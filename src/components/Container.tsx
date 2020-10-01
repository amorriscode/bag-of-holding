import React from 'react'

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

export default function Container({ children }: Props) {
  return (
    <>
      <div className="bh-container mx-2 p-4 space-y-4">{children}</div>
      <style>{`
        .bh-container {
          min-width: 800px;
        }
      `}</style>
    </>
  )
}
