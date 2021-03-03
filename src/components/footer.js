import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {

  return (
    <footer className="global-footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}
      And <a href="https://wordpress.org/">WordPress</a>
    </footer>
  )
}

export default Footer
