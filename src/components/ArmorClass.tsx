import React from 'react'

import NumberInput from './NumberInput'

export default function ArmorClass() {
  return (
    <div className="bg-white shadow text-center rounded p-2">
      <div className="uppercase text-xxs font-bold truncate">Armor Class</div>
      <NumberInput name="armorClass" />
    </div>
  )
}
