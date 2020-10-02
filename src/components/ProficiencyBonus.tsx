import React from 'react'

import NumberInput from './NumberInput'

export default function ProficiencyBonus() {
  return (
    <div className="bg-white p-2 rounded shadow">
      <NumberInput name="numberInput" label="Proficiency Bonus" />
    </div>
  )
}
