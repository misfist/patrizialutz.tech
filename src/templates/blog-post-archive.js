import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Experience from "../components/experience"
import Expertise from "../components/expertise"
import ContactForm from "../components/contactForm"
import Projects from "../components/projects"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPortfolio.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title="All projects" />
        <Bio />
        <p>
          No portfolios found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>

      <SEO title="Home" />

      <Profile />

      <Experience />

      <Expertise />

      <Projects />

      <ContactForm />
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPortfolio(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
              id
              srcSet
              sourceUrl
              title
              }
          }
      }
    }
  }
`
