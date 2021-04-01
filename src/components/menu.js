/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

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
    <nav id={menu.slug} className="main-navigation">
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
                  {...props}
                >
                <Link
                  to={menuItem.url}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {menuItem.label}
                </Link>
              </li>
              )
            } )}
          </ul>
        }
    </nav>
  )
}

export default MainMenu
