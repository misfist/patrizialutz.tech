import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout bodyClass="archive archive-posts 404">
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Layout className="archive-posts">
        <SEO title="All posts" />

        <div className="posts-list">
          {posts.map(post => {
            const title = post.title

            return (
                <article
                  key={post.uri}
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header className="entry-heading">
                    <h2 className="entry-title">
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <div className="entry-meta">{post.date}</div>
                  </header>
                  <div className="entry-content" itemProp="description">{parse(post.excerpt)}</div>
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
    </>
  )
}

export default PostIndex

export const blogPageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: {
        fields: date, 
        order: DESC
      }, 
      limit: $postsPerPage, 
      skip: $offset
      ) {
      nodes {
        excerpt
        date(formatString: "MMMM DD, YYYY")
        databaseId
        title
        uri
        slug
      }
    }
  }
`
