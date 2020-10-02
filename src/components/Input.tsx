import React, { forwardRef } from 'react'

type Props = {
  name: string
  type: string
  value: string | number
  id?: string
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, type, id, className, label, value, onChange }: Props, ref) => (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id || name} className="text-xxs uppercase font-bold">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        className={`bg-gray-200 rounded p-2 border border-transparent focus:border-brand-green focus:outline-none ${className}`}
        ref={ref}
        type={type}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  )
)

export default Input
