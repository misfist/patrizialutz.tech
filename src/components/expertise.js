/**
 * Expertise component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <>
        Nothing here to see.
      </>
    )
  }

  return (

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

  )
}

export default Expertise

