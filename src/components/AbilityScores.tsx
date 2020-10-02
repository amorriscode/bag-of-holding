import React from 'react'
import { useForm } from 'react-hook-form'

import AbilityScore from './AbilityScore'

export default function AbilityScores() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <AbilityScore label="Strength" />
        <AbilityScore label="Dexterity" />
        <AbilityScore label="Constitution" />
        <AbilityScore label="Intelligence" />
        <AbilityScore label="Wisdom" />
        <AbilityScore label="Charisma" />
      </div>
    </form>
  )
}
