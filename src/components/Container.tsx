import React from 'react'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Container({ children }: Props) {
  return (
    <>
      <div className="mx-auto container p-6 space-y-6">{children}</div>
      <style>{`
        .container {
          min-width: 800px;
        }
      `}</style>
    </>
  )
}
