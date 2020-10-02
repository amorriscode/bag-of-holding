import React, { forwardRef } from 'react'

import Input from './Input'

type Props = {
  name: string
  value: number
  ref?: React.Ref<HTMLInputElement>
  className?: string
  label?: string
}

const NumberInput = forwardRef<HTMLInputElement, Props>(
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

export default NumberInput
