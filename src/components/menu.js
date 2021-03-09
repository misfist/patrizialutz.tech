/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "./menu-item"

const MainMenu = () => {
  const data = useStaticQuery(graphql`
  {
    wpMenu(locations: {eq: MENU_1}) {
      menuItems {
        nodes {
          url
          target
          label
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
    <nav id={menu.slug} className="main-navigation js-sticky-nav sticky-inner">
        {menuItems && 
          <ul id="primary-menu" className="menu">
            {menuItems.map( ( menuItem, index ) => {

              let props = {
                key: menuItem.databaseId,
                id: `menu-item-${menuItem.databaseId}`,
              };

              if( menuItem.cssClasses ) {
                props.className = 'menu-item'
              }
    
              return (
                <li
                  key={menuItem.databaseId}
                  id={`menu-item-${menuItem.databaseId}`}
                  className="menu-item"
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

export default MainMenu
