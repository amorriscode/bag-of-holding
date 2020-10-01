import React from 'react'

interface Props {
  name: string
  ref: React.Ref<HTMLInputElement>
  className?: string
}

export default function TextInput({ name, ref, className }: Props) {
  return (
    <input
      className={`border border-gray-400 rounded px-2 focus:border-brand-green focus:outline-none ${className}`}
      name={name}
      ref={ref}
    />
  )
}
