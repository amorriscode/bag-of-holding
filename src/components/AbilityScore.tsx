import React from 'react'

import {
  useCharacterSheet,
  useCharacterSheetDispatch,
} from '../CharacterSheetContext'

import NumberInput from './NumberInput'

type Props = {
  label: string
}

export default function AbilityScore({ label }: Props) {
  const { abilityScores } = useCharacterSheet()
  const characterSheetDispatch = useCharacterSheetDispatch()

  return (
    <div className="bg-white shadow text-center rounded p-2 space-y-2">
      <div className="uppercase text-xxs font-bold truncate">{label}</div>

      <div className="font-bold text-xl">+4</div>

      <NumberInput
        name={label}
        value={abilityScores[label]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          characterSheetDispatch({
            type: 'abilityScore',
            data: {
              ability: label.toLowerCase(),
              score: parseInt(e.target.value),
            },
          })
        }}
      />
    </div>
  )
}
