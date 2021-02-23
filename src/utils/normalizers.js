import React from "react"
import { Link, graphql } from "gatsby"

const mapPortfoliosToTypes = {
    name: `mapPortfoliosToTypes`,
    normalizer: function({ entities }) {
    const portfolioTypes = entities.filter(e => e.__type === `wordpress__wp_portfolioType`)
  
    return entities.map(e => {
      if (e.__type === `wordpress__wp_portfolio`) {
        let hasTypes = e.portfolioTypes && Array.isArray(e.portfolioTypes) && e.portfolioTypes.length
        // Replace portfolioTypes with links to their nodes.
        if (hasTypes) {
          e.portfolioTypes___NODE = e.portfolioTypes.map(
            c => portfolioTypes.find(gObj => c === gObj.wordpress_id).id
          )
          delete e.portfolioTypes
        }
      }
      return e
    })
  }
}