import React from 'react'

import NumberInput from './NumberInput'
import Checkbox from './Checkbox'

function SavingThrowOption({ ability }: { ability: string }) {
  return (
    <div>
      <div className="uppercase text-xxs font-bold">{ability}</div>

      <div className="flex space-x-2">
        <Checkbox
          name={`${ability.toLowerCase()}Proficiency`}
          className="w-1/4"
        />
        <NumberInput
          name={`${ability.toLowerCase()}Saving`}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default function SavingThrows() {
  return (
    <div className="bg-white p-2 rounded shadow space-y-2">
      <div className="uppercase font-bold text-center text-sm">
        Saving Throws
      </div>

      <SavingThrowOption ability="Strength" />
      <SavingThrowOption ability="Dexterity" />
      <SavingThrowOption ability="Constitution" />
      <SavingThrowOption ability="Intelligence" />
      <SavingThrowOption ability="Wisdom" />
      <SavingThrowOption ability="Charisma" />
    </div>
  )
}
