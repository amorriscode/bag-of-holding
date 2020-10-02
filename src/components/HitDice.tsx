import React from 'react'

import TextInput from './TextInput'
import NumberInput from './NumberInput'

export default function HitDice() {
  return (
    <div className="bg-white shadow text-center rounded p-2 space-y-2">
      <div className="uppercase text-xxs font-bold truncate">
        Total Hit Dice
      </div>
      <TextInput name="totalHitDice" />

      <div>
        <div className="uppercase text-xxs font-bold truncate">Hit Dice</div>
        <NumberInput name="hitDice" />
      </div>
    </div>
  )
}
