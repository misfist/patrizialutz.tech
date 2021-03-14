import React from "react"
import { Link, graphql } from "gatsby"

const mapProjectToTypes = {
    name: `mapProjectToTypes`,
    normalizer: function({ entities }) {
    const projectTypes = entities.filter(e => e.__type === `wordpress__wp_projectType`)
  
    return entities.map(e => {
      if (e.__type === `wordpress__wp_project`) {
        let hasTypes = e.projectTypes && Array.isArray(e.projectTypes) && e.projectTypes.length
        // Replace projectTypes with links to their nodes.
        if (hasTypes) {
          e.projectTypes___NODE = e.projectTypes.map(
            c => projectTypes.find(gObj => c === gObj.wordpress_id).id
          )
          delete e.projectTypes
        }
      }
      return e
    })
  }
}