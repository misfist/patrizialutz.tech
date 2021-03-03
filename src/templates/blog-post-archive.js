import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Experience from "../components/experience"
import Expertise from "../components/expertise"
import ContactForm from "../components/contactForm"
import Projects from "../components/projects"
// import Contact from "../components/contact"

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
      <SEO title="All projects" />

      <Profile />

      <Experience />

      <Expertise />

      <Projects />

      <ContactForm />

      <div>
        {posts.map(post => {
          const title = post.title

          return (
              <article
                key={post.uri}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
          )
        })}
      </div>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
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
