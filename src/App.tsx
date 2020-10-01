import * as React from 'react'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'

import Details from './pages/Details'
import Spells from './pages/Spells'
import Log from './pages/Log'
import Stats from './pages/Stats'

import Nav from './components/Nav'

export function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  )
}
