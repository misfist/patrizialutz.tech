/**
 * Exerience component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

const Experience = () => {
  const data = useStaticQuery(
    graphql`
    {
      allWpPortfolio(sort: {order: DESC, fields: date}, filter: {portfolioTypes: {nodes: {elemMatch: {slug: {eq: "job"}}}}}) {
        nodes {
          acf {
            clients {
              clientName
              clientUrl
            }
            company
            endDate
            fieldGroupName
            url
            location
            startDate
          }
          slug
          content
          title
          location
        }
      }
    }
    `
  )
  
  const posts = data.allWpPortfolio.nodes

  if( !posts.length ) {
    return (
      <section id="experience" className="section section__experience">
        <h2 className="section-title">Experience</h2>
        <div className="section-content">
          Nothing here to see.
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="section section__experience">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="post-list post-list__experience">

          {posts.map( post => {

            let clients = post.acf.clients
            // let start = post.acf.startDate ? new date( post.acf.startDate ) : ''

            // const clientBlock = () => {
            //   if( clients && clients.length ) {
            //     <div>We have clients</div>
            //   }
            // }

            return (
              <article
                key={post.slug}
                id={post.slug}
                className=""
              >
                <header className="entry-header">
                  <h4 className="job-company">
                    <i className="fas fa-external-link-alt"></i>
                    <a
                      href={post.url}
                      target="_blank"
                      title={post.title}
                      rel="noreferrer"
                    >
                      {post.company}
                    </a>
                  </h4>
                  <div className="job-location">{post.location}</div>
                  <div className="job-dates">
                    <time className="start-date">{post.acf.startDate}</time> to
                    <time className="end-date">{post.acf.endDate ? post.acf.endDate : 'Present'}</time>
                  </div>
                </header>

                <div className="entry-content">
                  <h5 className="job-title">{post.title}</h5>
                  <div className="job-description">{parse(post.content)}</div>

                  {clients && (
                    <div className="clients-list">
                      <strong>Clients</strong>

                      <ul>
                        {clients.map( (client, index) => {
                          return (
                            <li 
                              className="list-inline-item"
                              key={'client-' + index}
                            >
                              <a
                                href={client.clientUrl}
                                title={parse(client.clientName)}
                                rel="noreferrer"
                                target="_blank"
                              >
                                {parse(client.clientName)}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>

                <footer className="entry-footer"></footer>
              </article>
            )
          } )}

        </div>
      </div>
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </section>
  )
}

export default Experience

