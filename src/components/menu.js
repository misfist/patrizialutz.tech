/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import parse from "html-react-parser"
import menuItem from './menu-item'
import MenuItem from "./menu-item"

const Menu = () => {
  const data = useStaticQuery(graphql`
  {
    wpMenu(locations: {eq: MENU_1}) {
      slug
      menuItems {
        nodes {
          url
          target
          label
          databaseId
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
    <nav id={menu.slug} className="main-navigation js-sticky-nav">
        {menuItems && 
          <ul id="primary-menu" className="menu">
            {menuItems.map( ( menuItem, index ) => {
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

export default Menu


// const Menu = () => {
//     return (
//       <nav id="site-navigation" className="main-navigation js-sticky-nav">
//         <div className="container">
//           <div className="menu-primary-navigation-container">
//             <ul id="primary-menu" className="menu">
              // <li
              //   id="menu-item-772"
              //   className="menu-item menu-item-type-custom menu-item-object-custom menu-item-772"
              // >
              //   <a href="#experience">Experience</a>
              // </li>
//               <li
//                 id="menu-item-773"
//                 className="menu-item menu-item-type-custom menu-item-object-custom menu-item-773"
//               >
//                 <a href="#expertise">Expertise</a>
//               </li>
//               <li
//                 id="menu-item-774"
//                 className="menu-item menu-item-type-custom menu-item-object-custom menu-item-774"
//               >
//                 <a href="#portfolio">Portfolio</a>
//               </li>
//               <li
//                 id="menu-item-775"
//                 className="contact menu-item menu-item-type-custom menu-item-object-custom menu-item-775"
//               >
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
// }

// const Menu = () => {
//   const { wpMenu } = useStaticQuery( graphql`
//     {
//       wpMenu(slug: { eq: "MENU_1" }) {
//         name
//         menuItems {
//           nodes {
//             label
//             url
//             databaseId
//             connectedNode {
//               node {
//                 ... on WpContentNode {
//                   uri
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   console.log( 'wpMenu', wpMenu )

//   if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

//   return (
//     <nav
//       className="primary-menu-wrapper"
//       aria-label="Horizontal"
//       role="navigation"
//     >
//       <ul className="primary-menu reset-list-style">
//         {wpMenu.menuItems.nodes.map((menuItem, i) => {
//           const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

//           const itemId = "menu-item-" + menuItem.databaseId

//           return (
//             <li
//               id={itemId}
//               key={i + menuItem.url}
//               className={
//                 "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
//                 itemId
//               }
//             >
//               <a
//                 href="{menuItem.url}"
//               >{menuItem.label}</a>
//             </li>
//           )
//         })}
//       </ul>
//     </nav>
//   )
// }

// export default Menu
