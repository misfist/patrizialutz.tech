/**
 * Profile component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Profile = () => {
  const data = useStaticQuery(graphql`
  {
    wpPage(slug: {eq: "home"}) {
      title
      content
    }
  }
  `)
  return (
    <section id="profile" className="section section__profile">
      <h2 className="section-title">{ parse( data.wpPage.title ) }</h2>
      <div className="section-content" dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </section>
  )
}

export default Profile