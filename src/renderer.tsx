import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import { App } from './App'
import './index.css'

declare global {
  interface Window {
    ipcRenderer: any
  }
}

window.ipcRenderer = window.ipcRenderer || {}

ReactDOM.render(<App />, document.getElementById('root'))

export default hot(module)(App)
