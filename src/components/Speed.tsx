import React from 'react'

import NumberInput from './NumberInput'

export default function Speed() {
  return (
    <div className="bg-white shadow text-center rounded p-2">
      <div className="uppercase text-xxs font-bold truncate">Speed</div>
      <NumberInput name="speed" />
    </div>
  )
}
