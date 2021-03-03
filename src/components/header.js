import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Menu from "./menu"

const Header = ( { data } ) => {
  const {
    wp: {
      generalSettings: { 
        title, 
        description, 
        url,
        customHeaders
      },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      wp {
        generalSettings {
          title
          description
          url
          customHeaders
        }
      }
    }
  `)

  let backgroundImage = customHeaders.length ? customHeaders[Math.floor(Math.random() * customHeaders.length)] : '';

  const style = {
    backgroundImage:  'url(' + backgroundImage + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  return (
    <header className="global-header lazy" style={style} loading="lazy">
      <div className="main-heading">
        <h1 className="site-title">
          <Link to={url}>{parse(title)}</Link>
        </h1>
        <div
          className="site-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      <Menu />
    </header>
  )
}

export default Header
