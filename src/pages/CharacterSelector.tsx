import React, { useEffect, useState } from 'react'
import cuid from 'cuid'

import Container from '../components/Container'
import {
  defaultState,
  useCharacterSheetDispatch,
} from '../CharacterSheetContext'

export default function CharacterSelector() {
  const [characters, setCharacters] = useState([])
  const characterSheetDispatch = useCharacterSheetDispatch()

  useEffect(() => {
    const getCharacters = async () => {
      const existingCharacterIds = await window.ipcRenderer.invoke(
        'getStoreValue',
        'characters'
      )

      // No characters exist
      if (!existingCharacterIds) {
        return
      }

      // Get data for existing characters so we can show some infor
      const existingCharacters = []
      for (let i = 0; i < existingCharacterIds.length; i++) {
        const character = await window.ipcRenderer.invoke(
          'getStoreValue',
          existingCharacterIds[i]
        )
        existingCharacters.push(character)
      }

      setCharacters(existingCharacters || [])
    }

    getCharacters()
  }, [])

  const loadCharacter = async (id: string) => {
    const data = await window.ipcRenderer.invoke('getStoreValue', id)
    characterSheetDispatch({ type: 'loadCharacter', data })
  }

  const createNewCharacter = async () => {
    const id = cuid()
    const data = { ...defaultState, id }
    const allCharacters = [...characters.map((character) => character.id), id]

    await window.ipcRenderer.invoke(
      'setStoreValue',
      'characters',
      allCharacters
    )

    await window.ipcRenderer.invoke('setStoreValue', id, data)

    setCharacters([...characters, data])

    characterSheetDispatch({ type: 'loadCharacter', data })
  }

  return (
    <Container>
      <div className="flex flex-col space-y-6 w-2/3 mx-auto">
        {!!characters.length && (
          <div className="space-y-6">
            {characters.map((character) => (
              <div
                key={character.id}
                onClick={() => loadCharacter(character.id)}
                className="flex items-center justify-between hover:text-brand-green hover:cursor-pointer bg-white rounded shadow p-4"
              >
                <div>
                  <div className="font-bold">
                    {character.characterName || character.id}{' '}
                  </div>

                  <div className="space-x-2">
                    {character.race && <span>{character.race}</span>}
                    {character.characterClass && (
                      <span>{character.characterClass}</span>
                    )}
                  </div>
                </div>

                <div className="bg-brand-green py-1 px-2 rounded text-white">
                  Level {character.level}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={createNewCharacter}
          className="bg-brand-green rounded p-4 text-white hover:opacity-75"
        >
          Create New Character
        </button>
      </div>
    </Container>
  )
}
