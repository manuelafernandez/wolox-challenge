import React from 'react'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Routes from './components/Routes/Routes'
import './App.scss'

function App () {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
