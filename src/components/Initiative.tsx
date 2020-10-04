import React from 'react'

import NumberInput from './NumberInput'

export default function Initiative() {
  return (
    <div className="bg-white shadow text-center rounded p-2">
      <div className="uppercase text-xxs font-bold truncate">Initiative</div>
      <NumberInput name="initiative" />
    </div>
  )
}
