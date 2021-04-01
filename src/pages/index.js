import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/section'
import Profile from "../components/profile"
import Experience from "../components/experience"
import Expertise from "../components/expertise"
import Contact from "../components/contact"
import Projects from "../components/projects"

const Home = ({ data }) => {

  return (
    <Layout isHomePage="true" bodyClass="home">
      
      <SEO title="Profile, Experience, Expertise & Projects" />

      <Section title="Patrizia Lutz" slug="profile">
        <Profile />
      </Section>

      <Section title="Expertise" slug="expertise">
        <Expertise />
      </Section>

      <Section title="Recent Projects" slug="projects">
        <Projects />
      </Section>

      <Section title="Experience" slug="experience">
        <Experience />
      </Section>

      <Section title="Contact" slug="contact">
        <Contact />
      </Section>

    </Layout>
  )
}

export default Home
