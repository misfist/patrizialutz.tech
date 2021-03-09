import React from "react"
import "../assets/scss/styles.scss"
import Header from './header';
import Footer from './footer';

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
