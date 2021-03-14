/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "./menu-item"
import { SVG } from '../utils/sprites'

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

  if( !menuItems ) {
    return null;
  }

  const handleClick = ( event ) => {
    window.print();
  }

  return (
    <nav id={menu.slug} className={menu.slug}>
      <ul id="primary-menu" className="menu">
        {menuItems.map( ( menuItem ) => {
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
        <li className="menu-item print">
          <div 
            className="js-click" 
            onClick={ handleClick }
            onKeyDown={handleClick}
            role="button"
          >
            <SVG 
              id={`print`}
              width='32'
              height='32'
            />
            <span className="menu-label">Print</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default SocialMenu
