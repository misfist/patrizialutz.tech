import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import avatar from '../assets/img/sneaky-cat-transparent.png'
import parse from 'html-react-parser'
import Helmet from 'react-helmet'
import MainMenu from './menu'
import SocialMenu from './menu-social'

const Header = ( { data } ) => {
  const [isSticky, setSticky] = useState( false );
  const ref = useRef( null );

  const handleScroll = () => {
    const offset = document.querySelector( '.main-heading' ).offsetHeight;

    if ( ref.current ) {
      setSticky( ref.current.getBoundingClientRect().top <= -offset );
    } 
  };

  useEffect(() => {
    window.addEventListener( 'scroll', handleScroll );

    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    };
  }, []);

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
            class: isSticky ? `${data.bodyClass} is-stuck` : data.bodyClass
        }}
      />
      <header className={`global-header lazy sticky-wrapper${isSticky ? ' sticky' : ''}`} style={style} loading="lazy" ref={ref}>
        <div className="main-heading">
          <h1 className="site-title">
            <a href={process.env.WEBSITE_URL}>{parse(title)}</a>
          </h1>
          <img 
            src={avatar} 
            alt="Avatar"
            className="avatar"
          />
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

        <MainMenu />
      </header>
    </>
  )
}

export default Header
