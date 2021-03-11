import React, { 
    useEffect, 
    useState,
    useCallback
} from 'react'
import { 
    useFormik, 
} from 'formik'
import axios from 'axios'
import Recaptcha from "react-recaptcha"
import * as Yup from 'yup';

const ContactForm = () => {

    const FORM_ID = "983"
    const WP_URL = process.env.WP_URL
    const API_USER = process.env.API_USER
    const API_KEY = process.env.API_KEY
    const USER_PASS = process.env.USER_PASS
    const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY

    /**
     * State
     */
    const [token, setToken] = useState("")

    const getAuthenticationToken = useCallback(() => {
        axios({
            method: "post",
            url: `${WP_URL}/wp-json/jwt-auth/v1/token`,
            data: {
                username: API_USER,
                password: USER_PASS
            },
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            setToken( response.data.token )
        })
        .catch( error => {
            console.error( "Error", error )
        } )
    }, [WP_URL, API_USER, USER_PASS]) 

    useEffect( () => {
        getAuthenticationToken()
    }, [getAuthenticationToken] )

    const formik = useFormik({
      initialValues: {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        fakeout: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Required"),
        message: Yup.string()
            .min(5, "Please enter a full message")
            .required("Required"),
        recaptcha: Yup.string().required()
      }),
      onSubmit: values => {

        const formData = new FormData()
        formData.set("fullname", values.fullname)
        formData.set("email", values.email)
        formData.set("subject", values.subject)
        formData.set("message", values.message)

        axios({
            method: "post",
            url: `${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
            data: formData,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => {
            console.log( 'response', response )

            formik.setStatus({
                sent: true,
                message: "Message has been sent! Thanks!",
            })
        })
        .catch(error => {
            console.error( 'error', error )

            formik.setStatus({
                sent: false,
                message: `Sorry, there was an error. Please try again later.`,
            })
        })
      },
    })

    return (
        <section id="contact" className="section section__contact">
            <h2 className="section-title">Contact</h2>
            <div className="section-content">
            {
                ( formik.status && formik.status.sent ) ? (
                    formik.status.message
                ) :
                (
                    <form onSubmit={formik.handleSubmit} name="contact-form">
                        <fieldset>
                            <label htmlFor="fullname">Name</label>
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                placeholder="Please add your name"
                                {...formik.getFieldProps('fullname')}
                            />
                            <label htmlFor="email">
                                Email<span className="required">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Please add your email"
                                {...formik.getFieldProps('email')}
                                required
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Please add a subject"
                                {...formik.getFieldProps('subject')}
                            />
                            <label htmlFor="message">
                                Message<span className="required">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Please add your message"
                                {...formik.getFieldProps('message')}
                                required
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="error">{formik.errors.message}</div>
                            ) : null}
                            <input
                                id="fakeout"
                                name="fakeout"
                                type="hidden"
                                placeholder="Please add something if you are not real"
                                {...formik.getFieldProps('fakeout')}
                            />
                            { formik.status && !formik.status.sent ? (
                                <div className="error">{formik.status.message}</div>
                            ) : null }
                            <Recaptcha
                                sitekey='6LfbYmwaAAAAACBs1GaYcoHVepA_Ju_KE7MY4cjD'
                                render="explicit"
                                theme="light"
                                type='checkbox'
                                size='compact'
                                verifyCallback={(response) => { 
                                    formik.setFieldValue("recaptcha", response ); 
                                }}
                                onloadCallback={() => { 
                                    console.log("done loading!"); 
                                }}
                            />
                            {formik.touched.recaptcha && formik.errors.recaptcha ? (
                                <div className="error">{formik.errors.recaptcha}</div>
                            ) : null}
                            <button type="submit" value="Send Message" disabled={formik.isSubmitting}>
                            Send Message
                            </button>
                        </fieldset>
                    </form> 
                )
            }
            </div>
            
        </section>
    )

}

export default ContactForm