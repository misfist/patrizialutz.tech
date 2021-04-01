/**
 * Profile component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import SocialMenu from './menu-social'

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
    <>
      <div className="section-content" dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      <SocialMenu />
    </>
  )
}

export default Profile