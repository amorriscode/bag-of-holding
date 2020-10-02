import React, { useState } from 'react'

import { FaCheck, FaTimes } from 'react-icons/fa'

type Props = {
  name: string
  id?: string
  ref?: React.Ref<HTMLInputElement>
  className?: string
  label?: string
  error?: boolean
}

export default function Checkbox({
  name,
  ref,
  className,
  label,
  id,
  error = false,
}: Props) {
  const Icon = error ? FaTimes : FaCheck
  const bgColor = `bg-${error ? 'red-700' : 'brand-green'}`
  const [selected, setSelected] = useState(false)

  return (
    <>
      <div className="checkbox flex justify-center items-center">
        <input
          id={id || name}
          className={`bg-gray-200 rounded p-2 border border-transparent focus:border-brand-green focus:outline-none ${className}`}
          name={name}
          ref={ref}
          type="checkbox"
          onClick={() => setSelected(!selected)}
        />
        <label
          htmlFor={id || name}
          className=" flex items-center justify-center uppercase font-bold text-xxs"
        >
          <div
            className={`${
              selected ? bgColor : 'bg-gray-200'
            } w-8 h-8 text-lg rounded-full text-white flex justify-center items-center`}
          >
            <Icon className={`${selected ? 'block' : 'hidden'}`} />
          </div>{' '}
          {label && <div className="ml-2">{label}</div>}
        </label>
      </div>

      <style>{`
        input[type=checkbox] {
          visibility: hidden;
          width: 0;
          height: 0;
        }
      `}</style>
    </>
  )
}
