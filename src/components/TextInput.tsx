import React, { forwardRef } from 'react'

import Input from './Input'

type Props = {
  name: string
  value: string
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Input ref={ref} type="text" {...props} />
))

export default TextInput
