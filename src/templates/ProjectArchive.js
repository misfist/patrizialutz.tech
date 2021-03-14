import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { SVG } from '../utils/sprites'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpProject.nodes

  if (!posts.length) {
    return (
      <Layout>
        <SEO title="All projects" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout bodyClass="archive archive-projects">
      <SEO title="All projects" />

      <article id="projects" className="section section__projects">
        <header className="entry-header">
          <h2 className="section-title">Projects</h2>
        </header>
        <div className="section-content">
          <div className="post-list post-list__projects">
            {posts.map(post => {
              const title = post.title
              const imageData = post.featuredImage.node.localFile.childImageSharp.fluid

              const style = {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }

              const linkProps = {
                href: post.acf.url && typeof post.acf.url == 'string' ? post.acf.url : {},
                title: parse( post.title ),
                target: `_blank`,
                rel: `noreferrer`
              }

              return (
                <>
                  <BackgroundImage
                    Tag="article"
                    id={post.databaseId}
                    key={post.databaseId}
                    itemType="https://schema.org/Article"
                    className={'post-list-item'}
                    fluid={imageData}
                    style={style}
                  >
                    <div className="overlay">
                      <a {...linkProps}>
                        <h3 className="entry-title">
                            {parse(post.title)}
                            <SVG 
                              id='external'
                              width='20'
                              height='20'
                            />
                        </h3>
                        <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.excerpt }} />                      
                      </a>
                    </div>

                  </BackgroundImage>
              </>
              )
            })}
          </div>
        </div>
        <footer className="entry"></footer>
      </article>

      <nav className="post-navigation blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          
          <li>
            {previousPagePath && (<Link to={previousPagePath} rel="prev">Previous page</Link>)}
          </li>
          
          <li>
            {nextPagePath && (<Link to={nextPagePath} rel="next">Next page</Link>)}
          </li>
          
        </ul>
      </nav>

    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query WordPressProjectArchive( $offset: Int!, $postsPerPage: Int! ) {
    allWpProject( 
      filter: {
        projectTypes: {
          nodes: {
            elemMatch: {
              slug: {
                eq: "project"
              }
            }
          }
        }
      },
      limit: $postsPerPage,
      skip: $offset, 
      sort: {
        fields: menuOrder, 
        order: ASC
      } ) {
      nodes {
        title
        slug
        databaseId
        excerpt
        acf {
          company
          url
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
