/**
 * Expertise component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Expertise = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(slug: {eq: "expertise"}) {
        acf {
          skillsGroup {
            section
            skills {
              skill
            }
          }
        }
        title,
        content
      }
    }
  `)

  return (
    <section id="expertise" className="section section__expertise">
      <h2 className="section-title">{ parse( data.wpPage.title ) }</h2>
      <div className="section-content"></div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </section>
  )
}

export default Expertise

