import React from "react"
import { SVG } from '../utils/sprites'

const MenuItem = ({ menuItem }) => {

  const condition = menuItem.target === '_blank';

  const props = {
    href: menuItem.url,
    ...( condition ? { title: 'Opens in new tab' } : {} ),
    ...( condition && { rel: 'noopener' } ),
    ...( condition && { target: '_blank' } ),
  };

  return (
    <a {...props}>
      <SVG 
          id={menuItem.cssClasses}
          width='32'
          height='32'
        />
      <span className="menu-label">{ menuItem.label }</span>
    </a>
  )
}

export default MenuItem