import React from 'react'
import { useForm } from 'react-hook-form'

import {
  useCharacterSheet,
  useCharacterSheetDispatch,
} from '../CharacterSheetContext'

import TextInput from './TextInput'
import NumberInput from './NumberInput'

type CharacterInfo = {
  characterName: string
  level: number
  experience: number
  class: string
  race: string
  background: string
  alignment: string
}

export default function CharacterInfo() {
  const { handleSubmit, register } = useForm()
  const {
    characterName,
    level,
    experience,
    characterClass,
    race,
    background,
    alignment,
  } = useCharacterSheet()
  const characterSheetDispatch = useCharacterSheetDispatch()

  const onSubmit = (data: CharacterInfo) => {
    characterSheetDispatch({ type: 'characterInfo', data })
  }

  return (
    <form
      className="shadow bg-white p-4 rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TextInput
            name="characterName"
            label="Name"
            value={characterName}
            ref={register}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleSubmit(onSubmit)()
            }}
          />
        </div>

        <div className="col-span-1 grid grid-cols-2 gap-4">
          <NumberInput
            name="level"
            label="Level"
            value={level}
            ref={register}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleSubmit(onSubmit)()
            }}
          />

          <NumberInput
            name="experience"
            label="Experience"
            value={experience}
            ref={register}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleSubmit(onSubmit)()
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <TextInput
          name="characterClass"
          label="Class"
          value={characterClass}
          ref={register}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSubmit(onSubmit)()
          }}
        />

        <TextInput name="race" label="Race" value={race} ref={register} />

        <TextInput
          name="background"
          label="Background"
          value={background}
          ref={register}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSubmit(onSubmit)()
          }}
        />

        <TextInput
          name="alignment"
          label="Alignment"
          value={alignment}
          ref={register}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSubmit(onSubmit)()
          }}
        />
      </div>

      <input className="hidden" type="submit" />
    </form>
  )
}
