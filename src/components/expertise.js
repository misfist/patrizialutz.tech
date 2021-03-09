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

  const skillsGroups = data.wpPage.acf.skillsGroup;

  if( !skillsGroups.length ) {
    return (
      <section id="expertise" className="section section__expertise">
        <h2 className="section-title">Expertise</h2>
        <div className="section-content">
          Nothing here to see.
        </div>
      </section>
    )
  }

  return (
    <section id="expertise" className="section section__expertise">
      <h2 className="section-title">{ parse( data.wpPage.title ) }</h2>
      <div className="section-content">
        <div className="skills-list">
          <ul>
          {skillsGroups.map( ( group, index ) => {
            return (
              <li
                key={`group-${index}`}
              >
                <h4 dangerouslySetInnerHTML={{ __html: group.section }} />

              <ul>
                
                {group.skills.map( ( item, index ) => {
                  return (
                    <li
                      key={`skill-${index}`}
                      dangerouslySetInnerHTML={{ __html: item.skill }}
                    />
                  )
                } )}

                </ul>
              </li>
            )
          } )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Expertise

