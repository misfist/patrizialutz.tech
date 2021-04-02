import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'
import avatar from '../assets/img/sneaky-cat-transparent.png'
import parse from 'html-react-parser'
import Helmet from 'react-helmet'
import MainMenu from './menu'
import SocialMenu from './menu-social'

const Header = ( { data } ) => {
  const [panelIsOpen, setPanelIsOpen] = useState(false);

  const sidePanel = ( event ) => {
    setPanelIsOpen( !panelIsOpen );
  }

  const {
    wp: {
      generalSettings: { 
        title, 
        description, 
        url,
        customHeaders,
        contactEmail
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
          contactEmail
        }
      }
    }
  `)

  let backgroundImage = customHeaders.length ? customHeaders[Math.floor(Math.random() * customHeaders.length)] : '';

  const style = {
    backgroundImage:  'linear-gradient(rgba(11, 79, 108, 0.75), rgba(11, 79, 108, 0.75)), url(' + backgroundImage + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  return (
    <>
      <Helmet
        bodyAttributes={{
          'data-panel-visible': panelIsOpen ? true : false,
        }}
      />
      <header className={`global-header`}>
        <button 
          className="sidebar-toggle"
          onClick={sidePanel}
        >
          <span className="button-icon"></span>
          <span className="screen-reader-text">Open</span>
        </button>
        <div className="main-heading">
          <Link
            to={`/`}
          >
            <img 
              src={avatar} 
              alt="Avatar"
              className="avatar"
            />
          </Link>
          <h1 className="site-title">
            <Link
              to={`/`}
            >
                {parse(title)}
            </Link>
          </h1>
          <div
            className="site-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="contact-details print-only">
            <div className="contact-website"><a href={process.env.WEBSITE_URL}>{parse(process.env.WEBSITE_URL)}</a></div>
            <div className="contact-email"><a href={`mailto:#${contactEmail}`}>{parse(contactEmail)}</a></div>
          </div>
          <SocialMenu />
        </div>

      </header>
      <MainMenu />
    </>
  )
}

export default Header
