/**
 * Contat component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import grecaptcha from 'gatsby-plugin-recaptcha';

// import { jQuery as $ } from 'jquery'
// import axios from "axios"

const API_USER = 'api_user';
const API_PASS = 'pJDs zqWI Bwvp m9kH XFEJ 6F2b';
const JWT_AUTH_SECRET_KEY = `1Hu28j-IKr79,P<XQM}.v3zqB!b&TqaEiDH?|(+=PYH,Y4]N|,*xDdU:C}%tTt;q`;
const API_URL = `https://editor.patrizialutz.tech/wp-json/wp/v2/form-response`;
const RECAPTCHA_KEY = `6LeHGGsaAAAAAFHFRS4iFlVRZv7ML61xs_QfsgW2`;
const RECAPTCHA_SECRET = ``;

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
    const submit = wpcf7El.querySelector( '.wpcf7-submit' );
    const fieldEls = document.querySelectorAll( '.wpcf7-form-control' );
    const fields = Array.from( fieldEls );

    fields.map( field => {
      field.removeAttribute( 'value' );
    } );

    wpcf7El.addEventListener( 'submit', submitForm, false );
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
      {/* <div className="section-content">{ parse( data.wpPage.content ) }</div> */}
      <>
        <form 
          id="contact-form" 
          className="form-horizontal wpcf7-form" 
          method="post" 
          action="#"
        >
            <div className="form-group">
                <label className="col-md-4 control-label" for="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Please enter your name" className="form-control wpcf7-form-control input-md" />
            </div>
            <div className="form-group">
                <label className="col-md-4 control-label" for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Please entery your email" className="wpcf7-form-control form-control input-md" required="" />
            </div>
            <div className="form-group">
                <label className="col-md-4 control-label" for="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Please enter a subject" className="wpcf7-form-control form-control input-md" />
            </div>
            <div className="form-group">
                <label className="col-md-4 control-label" for="message">Please enter your message</label>
                <textarea className="wpcf7-form-control form-control" id="message" name="message"></textarea>
            </div>
            <div className="form-group">
                <input type="text" id="ip-address" hidden />
                <div id="is-human" className="cap"></div>
                <button id="submit" name="submit" className="wpcf7-submit btn btn-default">Send</button>
            </div>
        </form>
      </>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </section>
  )
}

const submitForm = ( event ) => {
  event.preventDefault();

  // const ipFormInput = document.getElementById( 'ip-address' );

  // fetch( 'https://api.ipify.org?format=json' )
  //     .then((response) => { return response.json() })
  //     .then((json) => {
  //         const ip = json.ip;
  //         ipFormInput.value = ip;
  //         console.log( ip );
  //     })
  //     .catch((err) => { console.error(`Error getting IP Address: ${err}`) })
  // const wpcf7El = document.querySelector( '.wpcf7-form' );

  const formEl = document.getElementById( 'contact-form' );
  const captchEl = document.getElementById( 'is-human' );
  // const formData = new FormData();
  // formData.append( 'title', '' );
  // formData.append( 'content', '' );
  // formData.append( 'email' );

  // const captchaResponse = grecaptcha.getResponse();
  // const isValidated = ( captchaResponse.length ) ? true : false;

  // if( isValidated ) {
    
  // } else {

  // }

  // const formData = {
  //   title: document.getElementById( 'subject' ).value,
  //   content: document.getElementById( 'message' ).value,
  //   status: 'private',
  //   meta: {
  //     name: document.getElementById( 'name' ).value,
  //     email: document.getElementById( 'email' ).value,
  //   }
  // }

  const formData = {
    "your-name": "Pea",
    "your-email": "pea@misfist.com",
    "your-subject": "subject here",
    "your-message": "Message",
  }



  // // const formData = new FormData();
  // // formData.append("sender-name", "Pea");
  // // formData.append("[sender-name]", "Pea");
  // // formData.append("sender-email", "pea@misfist.com");
  // // formData.append("sender-subject", "Testing");
  // // formData.append("sender-message", "Will this thing ever work?");

  // let senderName = wpcf7El.getElementById( 'sender-name' ).value;
  // let senderEmail = wpcf7El.getElementById( 'sender-email' ).value;
  // let senderSubject = wpcf7El.getElementById( 'sender-subject' ).value;
  // let senderMessage = wpcf7El.getElementById( 'sender-message' ).value;

  // let postContent = `Name: ${senderName}
  // Email: ${senderEmail}
  // Subject: ${senderSubject}
  // Message: ${senderMessage}`

  // const form = {
  //   title: 'Testing',
  //   content: postContent
  // }

  // const formData = JSON.stringify( form );

  // const data = new FormData( event.target );
  // const formData = Object.fromEntries( data.entries() );



  // const formData = new FormData();
  // for ( let field in emailBody ) {
  //   console.log( field, emailBody[field] );
  //   formData.append( field, emailBody[field] );
  // }

  
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

  console.log( JSON.stringify( formData ) );
 
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener( "readystatechange", function () {
    if ( this.readyState === this.DONE ) {
      console.log( this.responseText );
    }
  });

  // // Define what happens on successful data submission
  // xhr.addEventListener( 'load', function( event ) {
  //   console.log( event );
  //   console.log( xhr.response );  const isValidated = ( captchaResponse.length ) ? true : false;

  // } );

  // // Define what happens in case of error
  // xhr.addEventListener( 'error', function( event ) {
  //   console.error( 'Oops! Something went wrong.' );
  //   console.error( event );
  // } );

  // xhr.open( "POST", `https://editor.patrizialutz.tech/wp-json/wp/v2/responses` );
  xhr.open( "POST", `https://editor.patrizialutz.tech/wp-json/contact-form-7/v1/contact-forms/2303/feedback/` );

  // xhr.open( "POST", `https://editor.patrizialutz.tech/wp-json/contact-form-7/v1/contact-forms/983/feedback/` );
  // xhr.setRequestHeader( "Content-Type", "multipart/form-data" );
  xhr.setRequestHeader( "Content-Type", "application/json" );
  xhr.setRequestHeader( "Authorization", "Basic " + btoa( 'api_user' + ':' + 'MtSu qCkL vFc9 Zis9 uxdB NlcK' ) );

  xhr.send( JSON.stringify( formData ) );

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

// const onloadCallback = () => {
//   grecaptcha.render('is-human', {
//     'sitekey' : RECAPTCHA_KEY
//   });
// }

// const showMessage = ( type, message ) => {
  
// }


export default Contact