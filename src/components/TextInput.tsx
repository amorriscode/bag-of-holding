import React, { forwardRef } from 'react'

import Input from './Input'

type Props = {
  name: string
  value: string
  className?: string
  label?: string
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ name, className, label, value }: Props, ref) => (
    <Input
      value={value}
      name={name}
      ref={ref}
      className={className}
      label={label}
      type="text"
    />
  )
)

export default TextInput
