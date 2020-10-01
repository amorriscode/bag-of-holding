import React from 'react'
import { useForm } from 'react-hook-form'

import StatBlock from './StatBlock'

export default function StatBlocks() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <StatBlock label="Strength" />
        <StatBlock label="Dexterity" />
        <StatBlock label="Constitution" />
        <StatBlock label="Intelligence" />
        <StatBlock label="Wisdom" />
        <StatBlock label="Charisma" />
      </div>
    </form>
  )
}
