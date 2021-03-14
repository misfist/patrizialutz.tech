import React from 'react';
import parse from "html-react-parser"

const Section = ({ children, title, slug }) => {
  
  return (
    <>
      <section id={slug} className={`section section__${slug}`}>
        <header className="section-header">
          <h2 className="section-title">{ parse( title ) }</h2>
        </header>
        
        <div className="section-content">
          {children}
        </div>

      </section>
    </>
  )
}

export default Section
