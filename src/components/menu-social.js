/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "./menu-item"

const SocialMenu = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu(slug: {eq: "social-menu"}) {
        slug
        menuItems {
          nodes {
            label
            url
            target
            databaseId
            cssClasses
          }
        }
      }
    }
  `)

  const menu = data.wpMenu

  if( !menu ) {
    return null;
  }

  const menuItems = menu.menuItems.nodes

  return (
    <nav id={menu.slug} className={menu.slug}>
        {menuItems && 
          <ul id="primary-menu" className="menu">
            {menuItems.map( ( menuItem, index ) => {
              return (
                <li
                  key={menuItem.databaseId}
                  id={`menu-item-${menuItem.databaseId}`}
                  className={`menu-item ${menuItem.cssClasses}`}
                >
                <MenuItem menuItem={menuItem} />
              </li>
              )
            } )}
          </ul>
        }
    </nav>
  )
}

export default SocialMenu
