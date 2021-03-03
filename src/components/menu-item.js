import React from "react"
// import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

const MenuItem = ({ menuItem }) => {
  return (
    <Link className="menu-item" to={ menuItem.url }>{ menuItem.label }</Link>
  )
}

export default MenuItem