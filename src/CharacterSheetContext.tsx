import React, { createContext, useContext, useReducer } from 'react'

type Action = {
  type: 'characterInfo'
  data: {
    characterName?: string
    level?: number
    experience?: number
    characterClass?: string
    race?: string
    background?: string
    alignment?: string
  }
}

type Dispatch = (action: Action) => void

type State = {
  characterName: string
  level: number
  experience: number
  characterClass: string
  race: string
  background: string
  alignment: string
}

type CharacterSheetProviderProps = {
  children: React.ReactNode
}

const defaultState = {
  characterName: '',
  level: 0,
  experience: 0,
  characterClass: '',
  race: '',
  background: '',
  alignment: '',
}

const CharacterSheetContext = createContext<State | undefined>(undefined)
const CharacterSheetDispatchContext = createContext<Dispatch | undefined>(
  undefined
)

function characterSheetReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'characterInfo': {
      console.log(action.data)
      return { ...state, ...action.data }
    }
    default: {
      throw new Error(`Unhandled action: ${action.type}`)
    }
  }
}

function CharacterSheetProvider({ children }: CharacterSheetProviderProps) {
  const [state, dispatch] = useReducer(characterSheetReducer, defaultState)

  return (
    <CharacterSheetContext.Provider value={state}>
      <CharacterSheetDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterSheetDispatchContext.Provider>
    </CharacterSheetContext.Provider>
  )
}

function useCharacterSheet() {
  const context = useContext(CharacterSheetContext)
  if (context === undefined) {
    throw new Error(
      'useCharacterSheet must be used within a CharacterSheetProvider'
    )
  }
  return context
}

function useCharacterSheetDispatch() {
  const context = useContext(CharacterSheetDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useCharacterSheetDispatch must be used within a CharacterSheetProvider'
    )
  }
  return context
}

export { CharacterSheetProvider, useCharacterSheet, useCharacterSheetDispatch }
