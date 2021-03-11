import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import Helmet from 'react-helmet'
import MainMenu from './menu'
import SocialMenu from './menu-social'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

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
    backgroundImage:  'linear-gradient(rgba(11, 79, 108, 0.75), rgba(11, 79, 108, 0.75)), url(' + backgroundImage + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  return (
    <>
      <Helmet
        bodyAttributes={{
            class: isSticky ? 'is-stuck' : ''
        }}
      />
      <header className={`global-header lazy sticky-wrapper${isSticky ? ' sticky' : ''}`} style={style} loading="lazy" ref={ref}>
        <div className="main-heading">
          <h1 className="site-title">
            <a href={process.env.WEBSITE_URL}>{parse(title)}</a>
          </h1>
          <div
            className="site-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <SocialMenu />
        </div>

        <MainMenu />
      </header>
    </>
  )
}

export default Header
