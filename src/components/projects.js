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
import styled from 'styled-components'

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
    allWpPortfolio(filter: {portfolioTypes: {nodes: {elemMatch: {slug: {eq: "project"}}}}}, limit: 6, sort: {fields: menuOrder, order: ASC}) {
      nodes {
        title
        content
        slug
        company
        url
        databaseId
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
            localFile {
              childImageSharp {
                fluid(quality: 9, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
            const imageData = post.featuredImage.node.localFile.childImageSharp.fluid

            const style = {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
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
                    <div class="overlay">
                      <a href={post.url} title={parse(post.title)} rel="noreferrer" target="_blank">
                        <h3 className="entry-title">
                            {parse(post.title)}
                            <SVG 
                              id='external'
                              width='20'
                              height='20'
                            />
                        </h3>
                        <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content }} />                      
                      </a>
                    </div>

                  </BackgroundImage>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects