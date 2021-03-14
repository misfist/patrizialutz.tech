import React from 'react';
import Helmet from 'react-helmet'

import Header from './header';
import Footer from './footer';
import "../assets/scss/styles.scss"

const Layout = ({ isHomePage, children, bodyClass }) => {
  
  return (
    <>
      <Helmet
        bodyAttributes={{
            class: bodyClass ? bodyClass : ''
        }}
      />
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        
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
