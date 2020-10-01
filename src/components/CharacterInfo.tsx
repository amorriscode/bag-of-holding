import React from 'react'
import { useForm } from 'react-hook-form'

import TextInput from './TextInput'

export default function CharacterInfo() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form
      className="flex space-x-4 justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput name="characterName" ref={register} className="w-2/6" />

      <div className="space-y-4 w-3/6">
        <div className="grid grid-cols-2 gap-4">
          <TextInput name="class" ref={register} />
          <TextInput name="level" ref={register} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput name="background" ref={register} />
          <TextInput name="playerName" ref={register} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput name="race" ref={register} />
          <TextInput name="alignment" ref={register} />
        </div>
      </div>

      <TextInput name="experience" ref={register} className="w-1/6" />
    </form>
  )
}
