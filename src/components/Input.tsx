import React from 'react'

type Props = {
  name: string
  type: string
  id?: string
  ref?: React.Ref<HTMLInputElement>
  className?: string
  label?: string
}

export default function TextInput({
  name,
  type,
  id,
  ref,
  className,
  label,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id || name} className="text-xxs uppercase font-bold">
          {label}
        </label>
      )}
      <input
        id={id || name}
        className={`bg-gray-200 rounded p-2 border border-transparent focus:border-brand-green focus:outline-none ${className}`}
        name={name}
        ref={ref}
        type={type}
      />
    </div>
  )
}
