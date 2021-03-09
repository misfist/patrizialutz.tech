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

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
    allWpPortfolio(filter: {portfolioTypes: {nodes: {elemMatch: {slug: {eq: "project"}}}}}, limit: 6, sort: {fields: menuOrder, order: ASC}) {
      nodes {
        title
        content
        link
        slug
        featuredImage {
          node {
            title
            srcSet
            sourceUrl
            sizes
            mediaDetails {
              height
              width
            }
          }
        }
        acf {
          company
          url
        }
      }
    }
  }
  `)
  const posts = data.allWpPortfolio.nodes

  if( !posts.length ) {
    return (
      <section id="projects" className="section section__projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="section-content">
          Nothing here to see.
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section section__projects">
      <h2 className="section-title">Recent Projects</h2>
      <div className="section-content">
        <div className="post-list post-list__projects">
          {posts.map(post => {
            const featuredImage = post.featuredImage.node

            const props = {}

            return (
              <article
                key={post.slug}
                id={post.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="hovereffect">
                  <img
                    src={featuredImage.sourceUrl}
                    className="img-responsive responsive--full wp-post-image"
                    alt=""
                    srcSet={featuredImage.srcSet}
                    sizes={featuredImage.sizes}
                    loading="lazy"
                    title={post.title}
                  />
                  <div className="overlay">
                    <h3 className="entry-title">
                        <a href={post.acf.url} title={parse(post.title)} rel="noreferrer" target="_blank">
                          {parse(post.title)}
                          <SVG 
                            id='external'
                            width='32'
                            height='32'
                          />
                        </a>
                      </h3>
                    <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
