import * as React from 'react'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'

import { useCharacterSheet } from '../CharacterSheetContext'

import CharacterSelector from './CharacterSelector'
import Details from './Details'
import Spells from './Spells'
import Log from './Log'
import Stats from './Stats'

import Container from '../components/Container'
import Nav from '../components/Nav'

export default function Wrapper() {
  const { id } = useCharacterSheet()

  return (
    <>
      {id ? (
        <Router>
          <Container>
            <Nav />

            <Switch>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/spells">
                <Spells />
              </Route>
              <Route path="/log">
                <Log />
              </Route>
              <Route path="/">
                <Stats />
              </Route>
            </Switch>
          </Container>
        </Router>
      ) : (
        <CharacterSelector />
      )}
    </>
  )
}
