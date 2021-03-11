import React from 'react';
import Header from './header';
import Footer from './footer';
import "../assets/scss/styles.scss"

const Layout = ({ isHomePage, children }) => {

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      
      <Header 
        data={ {
          isHome: isHomePage
        } }
      />

      <main id="content" className="main-content">{children}</main>

      <Footer />

    </div>
  )
}

export default Layout
