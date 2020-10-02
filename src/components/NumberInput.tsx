import React, { forwardRef } from 'react'

import Input from './Input'

type Props = {
  name: string
  value: number
  ref?: React.Ref<HTMLInputElement>
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NumberInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
  <Input ref={ref} type="text" {...props} />
))

export default NumberInput
