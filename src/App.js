import React from 'react'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Routing from './components/Routing/Routing'
import './App.scss'

function App () {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}

export default App
