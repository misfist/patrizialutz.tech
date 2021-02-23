/**
 * Contat component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
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

  if ( typeof document !== 'undefined' ) {
    const wpcf7El = document.querySelector( '.wpcf7-form' );
    const submit = wpcf7El.querySelector( 'input.wpcf7-submit' );
 
    // console.log( dotenv );
    if( typeof submit !== 'undefined' ) {
      submit.addEventListener( 'click', function( event ) {
        event.preventDefault();
        submitForm();
      }, false );
    }

  }
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
  const formData = new FormData( wpcf7El );
  const entries = formData.entries();
  const formID = entries._wpcf7;
  console.log( formID );

  const apiURL = `${process.env.REST_API_URL}/contact-form-7/v1/contact-forms/${formID}/feedback/`;

  // const data = new FormData();
  // data.append("sender-name", "Pea");
  // data.append("sender-email", "pea@misfist.com");
  // data.append("sender-subject", "Testing");
  // data.append("sender-message", "Will this thing ever work?");

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener( "readystatechange", function () {
    if ( this.readyState === this.DONE ) {
      console.log( this.responseText );
    }
  });

  // Define what happens on successful data submission
  xhr.addEventListener( 'load', function( event ) {
    alert( 'Yeah! Data sent and response loaded.' );
    console.log( xhr.response );
  } );

  // Define what happens in case of error
  xhr.addEventListener( 'error', function( event ) {
    alert( 'Oops! Something went wrong.' );
    console.error( xhr.response );
  } );

  xhr.open( "POST", `https://editor.patrizialutz.tech/json/contact-form-7/v1/contact-forms/983/feedback/` );
  xhr.setRequestHeader( "Content-Type", "multipart/form-data" );
  xhr.setRequestHeader( "Authorization", "Basic " + btoa( process.env.APPLICATION_PASSWORD_USER + ":" + process.env.APPLICATION_PASSWORD_USER ) );

  xhr.send( formData );
  
  // $.ajax({
  //   url: `${process.env.REST_API_URL}/contact-form-7/v1/contact-forms/983/feedback/`,
  //   method: "POST",
  //   crossDomain: true,
  //   headers: {
  //     "Authorization": "Basic " + btoa( process.env.APPLICATION_PASSWORD_USER + ":" + process.env.APPLICATION_PASSWORD_USER )
  //   },
  //   data: formData
  // })
  // .done( response => {
  //   console.log( response );
  // })
  // .fail( error => {
  //   console.error( error );
  // })
  // .always( response => {
  //   console.log( response );
  // });

  // formData.append("sender-name", "Pea-from site");
  // formData.append("sender-email", "pea@misfist.com");
  // formData.append("sender-subject", "Testing from site");
  // formData.append("sender-message", "Will this thing ever work when I send from Gatsby site?");

  // axios({
  //   method: 'post',
  //   url: `https://editor.patrizialutz.tech/json/contact-form-7/v1/contact-forms/983/feedback/`,
  //   data: formData,
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // })
  //   .then(response => {
  //     // actions taken when submission goes OK
  //     console.log( response );
  //   })
  //   .catch(error => {
  //     // actions taken when submission goes wrong
  //     console.error( error );
  //   })

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