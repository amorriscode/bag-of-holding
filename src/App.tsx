import * as React from 'react'

import { CharacterSheetProvider } from './CharacterSheetContext'

import Wrapper from './pages/Wrapper'

export function App() {
  return (
    <CharacterSheetProvider>
      <Wrapper />
    </CharacterSheetProvider>
  )
}
