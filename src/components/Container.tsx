import React from 'react'

interface Props {
  children: React.ReactChild
}

export default function Container({ children }: Props) {
  return <div>{children}</div>
}
