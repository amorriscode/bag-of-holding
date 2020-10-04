import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  to: string
  children: React.ReactChild | React.ReactChild[]
}

export default function NavLink({ to, children }: Props) {
  const location = useLocation()
  const activeStyles = location.pathname === to ? 'text-brand-green' : ''

  return (
    <div className={`py-2 font-bold ${activeStyles}`}>
      <Link to={to}>{children}</Link>
    </div>
  )
}
