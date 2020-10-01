import React from 'react'

interface Props {
  name: string
  ref: React.Ref<HTMLInputElement>
  className?: string
  label?: string
}

export default function TextInput({ name, ref, className, label }: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-xs uppercase font-bold">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-gray-200 rounded px-2 focus:border-brand-green focus:outline-none ${className}`}
        name={name}
        ref={ref}
      />
    </div>
  )
}
