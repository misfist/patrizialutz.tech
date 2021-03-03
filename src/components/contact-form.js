import React, { 
    useEffect, 
    useState 
} from 'react'
import { 
    useFormik, 
    Formik, 
    Form, 
    Field,
    ErrorMessage
} from 'formik'
import axios from 'axios'
import Recaptcha from "react-recaptcha"

// const ContactForm = () => {
//     const WEBSITE_URL = "https://editor.patrizialutz.tech"
//     const FORM_ID = "983" //Form id that provides Contact Form 7
//     const RECAPTCHA_KEY = `6LfYOk0aAAAAAC5Vl8_aaM6J2nhBfOsKmCkK7kH-`;

//     const [token, setToken] = useState("") // store token
//     const [recaptaToken, setToken] = useState(null)
//     const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
//     const [messageSent, setMessageSent] = useState(false) // manage sent message state

//     // this effect function authenticates our subcriber user to get a token
//     useEffect(() => {
//         axios({
//         method: "post",
//         url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
//         data: {
//             username: "api_user", // provide a user credential with subscriber role
//             password: "rA7&np9z*mMGklAtLg*X8nPI",
//         },
//         headers: {
//             "Content-Type": "application/json",
//         },
//         })
//         .then(response => {
//             setToken(response.data.token)
//         })
//         .catch(error => console.error("Error", error))
//     }, [])

//     // use useFormik hook using object destructuring assignment to extract helpful methods
//     const { handleChange, isSubmitting, values, handleSubmit } = useFormik({
//         initialValues: {
//             fullname: "",
//             email: "",
//             subject: "",
//             message: "",
//         },
//         onSubmit: (
//             { fullname, email, subject, message },
//             { setSubmitting, resetForm }
//         ) => {
//             setSubmitting(true)
//             // here we created a FormData field for each form field
//             const formData = new FormData()
//             formData.set("fullname", fullname)
//             formData.set("email", email)
//             formData.set("subject", subject)
//             formData.set("message", message)

//         // here we sent
//         axios({
//             method: "post",
//             url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
//             data: formData,
//             headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//             },
//         })
//         .then(response => {
//             // actions taken when submission goes OK
//             console.log(response)
//             resetForm()
//             setSubmitting(false)
//             setMessageSent(true)
//             setIsSuccessMessage(true)
//             })
//         .catch(error => {
//             // actions taken when submission goes wrong
//             setSubmitting(false)
//             setMessageSent(true)
//             setIsSuccessMessage(false)
//             })
//         },
//     })

//     useEffect(() => {
//         // set timeout 3 seconds to remove error/success message.
//         setTimeout(() => {
//         // this will reset messageSent and isSuccessMessage state
//         setMessageSent(false)
//         setIsSuccessMessage(false)
//         }, 3000)
//         // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
//     }, [isSuccessMessage, messageSent])

//     return (
//         <form onSubmit={handleSubmit} name="contact-form">
//         <fieldset>
//             <div>
//             <label htmlFor="fullname">Name</label>
//             <input
//                 id="fullname"
//                 name="fullname"
//                 type="text"
//                 placeholder="Please add your name"
//                 onChange={handleChange}
//                 value={values.fullname}
//             />
//             </div>
//             <div>
//             <label htmlFor="email">
//                 Email<span className="required">*</span>
//             </label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Please add your email"
//                 onChange={handleChange}
//                 value={values.email}
//                 required
//             />
//             </div>
//             <div>
//             <label htmlFor="subject">Subject</label>
//             <input
//                 id="subject"
//                 name="subject"
//                 type="text"
//                 placeholder="Please add a subject"
//                 onChange={handleChange}
//                 value={values.subject}
//             />
//             </div>
//             <div>
//             <label htmlFor="message">
//                 Message<span className="required">*</span>
//             </label>
//             <textarea
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Please add your message"
//                 onChange={handleChange}
//                 value={values.message}
//                 required
//             />
//             </div>
//         </fieldset>
//         <Recaptcha
//             sitekey={RECAPTCHA_KEY}
//             render="explicit"
//             theme="dark"
//             verifyCallback={response => {
//                 setToken(response)
//             }}
//             onloadCallback={() => {
//                 console.log("done loading!")
//             }}
//         />
//         <div>
//             <button type="submit" value="Send Message" disabled={isSubmitting}>
//             Send Message
//             </button>
//         </div>
//         {messageSent && isSuccessMessage && <div>Message sent successfully!</div>}
//         {messageSent && !isSuccessMessage && (
//             <div>something went wrong please try again.</div>
//         )}
//         </form>
//     )
// }

// export default ContactForm


// export default () => (
//   <Formik
//     state={}
//     initialValues={{
//       name: "",
//       email: "",
//       message: "",
//     }}
//     onSubmit={(values, actions) => {
//       alert(JSON.stringify(values, null, 2))
//       actions.setSubmitting(false)
//     }}
//     validate={values => {
//       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//       const errors = {}
//     //   if (!values.name) {
//     //     errors.name = "Name Required"
//     //   }
//       if (!values.email || !emailRegex.test(values.email)) {
//         errors.email = "Valid Email Required"
//       }
//       if (!values.message) {
//         errors.message = "Message Required"
//       }
//       return errors
//     }}
//   >
//     {() => (
//       <Form>
//         <label htmlFor="name">Name</label>
//         <Field 
//             name="name"
//             type="text"
//             value={name}
//         />

//         <label htmlFor="email">Email<span className="required">*</span></label>
//         <Field 
//             name="email" 
//             type="email"
//             value={email}
//             onChange={event => setEmail(event.target.value)}
//             required
//         />
//         <ErrorMessage name="email" />

//         <label htmlFor="message">Message<span className="required">*</span></label>
//         <Field 
//             name="message" 
//             component="textarea"
//             value={message}
//             required
//         />
//         <ErrorMessage name="message" />

//         <button type="submit">Send</button>
//       </Form>
//     )}
//   </Formik>
// )