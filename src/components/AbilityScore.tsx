import React from 'react'

import {
  useCharacterSheet,
  useCharacterSheetDispatch,
} from '../CharacterSheetContext'

import NumberInput from './NumberInput'

type Props = {
  ability: string
}

const getModifier = (score: number) => {
  const modifier = Math.floor((score - 10) / 2)
  return modifier > 0 ? `+${modifier}` : `${modifier}`
}

export default function AbilityScore({ ability }: Props) {
  const { abilityScores } = useCharacterSheet()
  const characterSheetDispatch = useCharacterSheetDispatch()

  const abilityScore = abilityScores[ability.toLowerCase()]
  const modifier = getModifier(abilityScore)

  return (
    <div className="bg-white shadow text-center rounded p-2 space-y-2">
      <div className="uppercase text-xxs font-bold truncate">{ability}</div>

      <div className="font-bold text-xl">{modifier}</div>

      <NumberInput
        name={ability}
        value={abilityScore || 0}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          characterSheetDispatch({
            type: 'abilityScore',
            data: {
              ability: ability.toLowerCase(),
              score: parseInt(e.target.value),
            },
          })
        }}
      />
    </div>
  )
}
