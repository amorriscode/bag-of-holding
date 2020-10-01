import React from 'react'

interface Props {
  name: string
  ref: React.Ref<HTMLInputElement>
  type: string
  className?: string
  label?: string
}

export default function TextInput({
  name,
  ref,
  className,
  label,
  type,
}: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-xs uppercase font-bold">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-gray-200 rounded p-2 border border-transparent focus:border-brand-green focus:outline-none ${className}`}
        name={name}
        ref={ref}
        type={type}
      />
    </div>
  )
}
