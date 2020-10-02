import React from 'react'

import NumberInput from './NumberInput'

export default function ArmorClass() {
  return (
    <div className="bg-white shadow text-center rounded p-2 space-y-2">
      <div>
        <div className="uppercase text-xxs font-bold truncate">
          Maximum Hit Points
        </div>
        <NumberInput name="maxHitPoints" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="uppercase text-xxs font-bold truncate">
            Current Hit Points
          </div>
          <NumberInput name="currentHitPoints" />
        </div>

        <div>
          <div className="uppercase text-xxs font-bold truncate">
            Temporary Hit Points
          </div>
          <NumberInput name="temporaryHitPoints" />
        </div>
      </div>
    </div>
  )
}
