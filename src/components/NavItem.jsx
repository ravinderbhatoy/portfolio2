import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({url,icon,text,disabled}) {
  return (
    <NavLink
      className={`group relative w-full p-1 bg-lightest-violet nav-item  ${disabled ? "link-disable" : ""}`}
      to={url}
      activeclassname="active "
    >
      <li className="flex gap-2 place-items-center">
        <div className="bg-medium-violet p-1 text-light-violet">
          {icon}
        </div>
        {text}
      </li>
      <div class="group-hover:border-medium-violet absolute top-0 left-0 w-full h-full border-y-2 border-lightest-violet pointer-events-none"></div>
    </NavLink>

  )
}

export default NavItem
