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
      ? 'border border-gray-400 bg-gray-100'
      : 'border border-transparent'

  return (
    <div
      className={`relative z-10 py-2 px-4 border-b-0 rounded-t ${activeStyles}`}
    >
      <Link to={to}>{children}</Link>
    </div>
  )
}
