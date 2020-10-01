import React from 'react'
import { useForm } from 'react-hook-form'

import TextInput from './TextInput'

export default function CharacterInfo() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form
      className="shadow bg-white p-4 rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TextInput name="characterName" label="Name" ref={register} />
        </div>

        <div className="col-span-1 flex space-x-4">
          <TextInput name="level" label="Level" ref={register} />
          <TextInput name="experience" label="Experience" ref={register} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <TextInput name="class" label="Class" ref={register} />
        <TextInput name="race" label="Race" ref={register} />
        <TextInput name="background" label="Background" ref={register} />
        <TextInput name="alignment" label="Alignment" ref={register} />
      </div>
    </form>
  )
}
