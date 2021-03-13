import React from "react"
import { SVGSource } from '../utils/sprites'

const Footer = () => {

  return (
    <footer className="global-footer">
      <div className="footer-wrapper">
        © {new Date().getFullYear()}, Proudly Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/" target="_blank" rel="noreferrer">WordPress</a>  
      </div>
      <SVGSource />
   </footer>
  )
}

export default Footer
