import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import truncateText from '../utils/truncateText'

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/contactForm'

const PageTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  const excerpt = post.content ? truncateText( post.content, 26 ) : ''

  return (
    <Layout bodyClass="single-page">
      <SEO title={post.title} description={excerpt} />

      <article
        className="page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="entry-header">
          <h1 className="entry-title page-title" itemProp="headline">{parse(post.title)}</h1>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        <div className="entry-content" itemProp="articleBody">
            {!!post.content && 
              parse(post.content)
            }

            { post.slug === `contact` && (
              <ContactForm />
            ) }

        </div>

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
            {previous && (
              <Link to={previous.uri} rel="prev">
                {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPage(id: { eq: $id }) {
      id
      content
      title
      slug
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPage(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPage(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
