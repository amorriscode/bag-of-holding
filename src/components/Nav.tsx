import React from 'react'

import NavLink from './NavLink'

export default function nav() {
  return (
    <nav className="flex mt-2 mx-2">
      <NavLink to="/">Stats</NavLink>
      <NavLink to="/details">Details</NavLink>
      <NavLink to="/spells">Spells</NavLink>
      <NavLink to="/log">Adventure Log</NavLink>
    </nav>
  )
}
