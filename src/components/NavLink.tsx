import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  to: string
  children: React.ReactChild
}

export default function NavLink({ to, children }: Props) {
  const location = useLocation()
  console.log(location)
  const activeStyles =
    location.pathname === to
      ? 'border border-black'
      : 'border border-transparent'

  return (
    <div className={`py-2 px-4 border-b-0 rounded-t-lg ${activeStyles}`}>
      <Link to={to}>{children}</Link>
    </div>
  )
}
