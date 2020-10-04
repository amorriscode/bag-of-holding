import React from 'react'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Container({ children }: Props) {
  return (
    <>
      <div className="bh-container mx-2 p-6 space-y-6">{children}</div>
      <style>{`
        .bh-container {
          min-width: 800px;
        }
      `}</style>
    </>
  )
}
