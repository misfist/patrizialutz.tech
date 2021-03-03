import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Experience from "../components/experience"
import Expertise from "../components/expertise"
import ContactForm from "../components/contactForm"
import Projects from "../components/projects"

const Home = ({ data }) => {

  return (
    <Layout isHomePage>
      
      <SEO title="Home" />

      <Profile />

      <Experience />

      <Expertise />

      <Projects />

      <ContactForm />

    </Layout>
  )
}

export default Home
