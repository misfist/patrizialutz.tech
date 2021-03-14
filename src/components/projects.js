/**
 * Projects component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { SVG } from '../utils/sprites'
import BackgroundImage from 'gatsby-background-image'

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
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
      sort: {
        fields: menuOrder, order: ASC
      }, 
      limit: 6 ) {
      nodes {
        title
        slug
        excerpt
        databaseId
        acf {
          company
          url
          location
          clients {
            clientName
            clientUrl
          }
          startDate
          endDate
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
  `)
  const posts = data.allWpProject.nodes

  if( !posts.length ) {
    return (
      <>
        Nothing here to see.
      </>
    )
  }

  return (

        <div className="post-list post-list__projects">
          {posts.map(post => {
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

  )
}

export default Projects