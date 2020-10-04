import React from 'react'

import NavLink from './NavLink'

export default function Nav() {
  return (
    <nav className="flex space-x-6 -mb-4">
      <NavLink to="/">Stats</NavLink>
      <NavLink to="/details">Details</NavLink>
      <NavLink to="/spells">Spells</NavLink>
      <NavLink to="/log">Adventure Log</NavLink>
    </nav>
  )
}
