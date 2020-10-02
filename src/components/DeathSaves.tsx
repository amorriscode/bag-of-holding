import React from 'react'

import Checkbox from './Checkbox'

export default function DeathSaves() {
  return (
    <div className="bg-white shadow rounded p-2 space-y-2">
      <div className="uppercase font-bold text-center text-sm">Death Saves</div>

      <div>
        <div className="uppercase text-xxs font-bold truncate">Successes</div>
        <div className="flex justify-between">
          <Checkbox name="deathSuccess1" />
          <Checkbox name="deathSuccess2" />
          <Checkbox name="deathSuccess3" />
        </div>
      </div>

      <div>
        <div className="uppercase text-xxs font-bold truncate">Failures</div>
        <div className="flex justify-between">
          <Checkbox name="deathFailure1" error />
          <Checkbox name="deathFailure2" error />
          <Checkbox name="deathFailure3" error />
        </div>
      </div>
    </div>
  )
}
