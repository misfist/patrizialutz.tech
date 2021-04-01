import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet'

import Header from './header';
import Footer from './footer';
import "../assets/scss/styles.scss"

const Layout = ({ isHomePage, children, bodyClass }) => {
  const [isSticky, setSticky] = useState( false );
  const ref = useRef( null );

  const handleScroll = () => {
    const offset = document.querySelector( '.main-navigation' ).offsetHeight;

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
  
  return (
    <>
      <Helmet
        bodyAttributes={{
            class: bodyClass ? bodyClass : '',
            'data-nav-stuck': isSticky ? true : false,
        }}
      />
      <div className="global-wrapper" data-is-root-path={isHomePage} ref={ref}>
        
        <Header 
          data={ {
            isHome: isHomePage,
            bodyClass
          } }
        />

        <main id="content" className="main-content">{children}</main>

        <Footer />

      </div>
    </>
  )
}

export default Layout
