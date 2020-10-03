import React from 'react'
import { useForm } from 'react-hook-form'

import AbilityScore from './AbilityScore'

export default function AbilityScores() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <AbilityScore ability="strength" />
        <AbilityScore ability="dexterity" />
        <AbilityScore ability="constitution" />
        <AbilityScore ability="intelligence" />
        <AbilityScore ability="wisdom" />
        <AbilityScore ability="charisma" />
      </div>
    </form>
  )
}
