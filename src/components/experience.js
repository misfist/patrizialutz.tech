/**
 * Exerience component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import { SVG } from '../utils/sprites'
import Section from './section'

const Experience = () => {
  const data = useStaticQuery(
    graphql`
    {
      allWpProject(
        sort: {
          order: DESC, fields: date
        }, filter: {
          projectTypes: {
            nodes: {
              elemMatch: {
                slug: {
                  eq: "job"
                }
              }
            }
          }
        }, 
        limit: 6) {
        nodes {
          acf {
            clients {
              clientName
              clientUrl
            }
            company
            endDate
            url
            location
            startDate
          }
          slug
          content
          title
        }
      }
    }
    `
  )
  
  const posts = data.allWpProject.nodes

  if( !posts.length ) {
    return (
      <>
        Nothing here to see.
      </>
    )
  }

  return (
      
      <div className="post-list post-list__experience">

        {posts.map( post => {

          let clients = post.acf.clients

          const condition = post.acf.url && post.acf.url.length !== 0;

          const props = {
            ...( condition && { href: post.acf.url } ),
            ...( condition ? { title: 'Opens in new tab' } : {} ),
            ...( condition && { rel: 'noopener' } ),
            ...( condition && { target: '_blank' } ),
          };
        
          return (
            <article
              key={post.slug}
              id={post.slug}
              className=""
            >
              <header className="entry-header">
                <h4 className="job-company">
                  <a {...props}>
                    { condition && <SVG 
                      id='external'
                      width='32'
                      height='32'
                    /> }
                    {post.acf.company}
                  </a>
                </h4>
                <div className="job-location">{post.acf.location}</div>
                <div className="job-dates">
                  <time className="start-date">{post.acf.startDate}</time> to
                  <time className="end-date">{post.acf.endDate ? post.acf.endDate : 'Present'}</time>
                </div>
              </header>

              <div className="entry-content">
                <h4 className="job-title">{post.title}</h4>
                <div className="job-description" dangerouslySetInnerHTML={{ __html: post.content }} />

                {clients && (
                  <div className="clients-list">
                    <h4 className="clients-list__heading">Clients</h4>

                    <ul>
                      {clients.map( (client, index) => {

                        const condition = client.clientUrl && client.clientUrl.length !== 0;

                        const props = {
                          ...( condition && { href: client.clientUrl } ),
                          ...( condition ? { title: 'Opens in new tab' } : {} ),
                          ...( condition && { rel: 'noopener' } ),
                          ...( condition && { target: '_blank' } ),
                        };
                        return (
                          <li 
                            key={`client-${index}`}
                            className="list-inline-item"
                          >
                            <a {...props}>
                              {parse(client.clientName)}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>

            </article>
          )
        } )}

      </div>

  )
}

export default Experience

