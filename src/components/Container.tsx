import React from 'react'

interface Props {
  children: React.ReactChild
}

export default function Container({ children }: Props) {
  return (
    <div className="-my-1 mx-2 p-4 bg-gray-100 rounded-b border border-gray-400">
      {children}
    </div>
  )
}
