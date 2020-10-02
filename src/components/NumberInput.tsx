import React from 'react'

import Input from './Input'

type Props = {
  name: string
  ref?: React.Ref<HTMLInputElement>
  className?: string
  label?: string
}

export default function TextInput({ name, ref, className, label }: Props) {
  return (
    <Input
      name={name}
      ref={ref}
      className={className}
      label={label}
      type="number"
    />
  )
}
