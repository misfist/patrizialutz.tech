import React from "react"
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <Link className="menu-item" to={CreateLocalLink( menuItem, wordPressUrl ) }>{ menuItem.label }</Link>
  )
}

export default MenuItem