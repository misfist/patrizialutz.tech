/**
 * Contat component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
// import { jQuery as $ } from 'jquery'
// import axios from "axios"

const Contact = () => {
  const data = useStaticQuery(graphql`
  {
    wpPage(slug: {eq: "contact"}) {
      title
      content
    }
  }
  `)

  useEffect(() => {
    console.log( 'useEffect' )

    const wpcf7El = document.querySelector( '.wpcf7-form' );
    const submit = wpcf7El.querySelector( 'input.wpcf7-submit' );
    const fieldEls = document.querySelectorAll( '.wpcf7-form-control' );
    const fields = Array.from( fieldEls );

    fields.map( field => {
      field.removeAttribute( 'value' );
    } );
 
    submit.addEventListener( 'click', function( event ) {
      event.preventDefault();
      submitForm();
    }, false );
  })

  // if ( typeof document !== 'undefined' ) {
  //   const wpcf7El = document.querySelector( '.wpcf7-form' );
  //   const submit = wpcf7El.querySelector( 'input.wpcf7-submit' );
 
  //   // console.log( dotenv );
  //   if( typeof submit !== 'undefined' ) {
  //     submit.addEventListener( 'click', function( event ) {
  //       event.preventDefault();
  //       submitForm();
  //     }, false );
  //   }

  // }
  return (
    <section id="contact" className="section section__contact">
      <h2 className="section-title">{ parse( data.wpPage.title ) }</h2>
      <div className="section-content">{ parse( data.wpPage.content ) }</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </section>
  )
}

const submitForm = () => {
  const wpcf7El = document.querySelector( '.wpcf7-form' );

  const formData = new FormData();
  formData.append("sender-name", "Pea");
  formData.append("[sender-name]", "Pea");
  formData.append("sender-email", "pea@misfist.com");
  formData.append("sender-subject", "Testing");
  formData.append("sender-message", "Will this thing ever work?");

  // fetch("https://editor.patrizialutz.tech/wp-json/contact-form-7/v1/contact-forms/983/feedback/", {
  //   "method": "POST",
  //   "headers": {
  //     "Content-Type": "multipart/form-data",
  //     // "Content-Type": "application/json",
  //     "Authorization": "Basic " + btoa( 'api_user' + ':' + '9GIc Ux2Z yELL 7vZC GlJ5 zOfa' ),
  //   },
  //   "body": { 'sender-name': 'Pea' }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
 
  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.addEventListener( "readystatechange", function () {
    if ( this.readyState === this.DONE ) {
      console.log( this.responseText );
    }
  });

  // // Define what happens on successful data submission
  // xhr.addEventListener( 'load', function( event ) {
  //   console.log( event );
  //   console.log( xhr.response );
  // } );

  // // Define what happens in case of error
  // xhr.addEventListener( 'error', function( event ) {
  //   console.error( 'Oops! Something went wrong.' );
  //   console.error( event );
  // } );

  xhr.open( "POST", `https://editor.patrizialutz.tech/wp-json/contact-form-7/v1/contact-forms/983/feedback/` );
  xhr.setRequestHeader( "Content-Type", "multipart/form-data" );
  xhr.setRequestHeader( "Authorization", "Basic " + btoa( 'api_user' + ':' + '9GIc Ux2Z yELL 7vZC GlJ5 zOfa' ) );

  xhr.send( formData );

  // formData.append("sender-name", "Pea-from site");
  // formData.append("sender-email", "pea@misfist.com");
  // formData.append("sender-subject", "Testing from site");
  // formData.append("sender-message", "Will this thing ever work when I send from Gatsby site?");

  // fetch( `https://editor.patrizialutz.tech/json/contact-form-7/v1/contact-forms/983/feedback/`, {
  //   "method": "POST",
  //   "headers": {
  //     "authorization": "Basic " + btoa( `${process.env.APPLICATION_PASSWORD_USER}:${process.env.APPLICATION_PASSWORD_KEY}` ),
  //     "content-type": 'multipart/form-data',
  //     "crossorigin": 'credentials'
  //   },
  //   "body": formData
  // })
  // .then(response => {
  //   console.log( response );
  // })
  // .catch(error => {
  //   console.error( error );
  // });

}

export default Contact