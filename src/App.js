import React from 'react'
import { Provider } from 'react-redux'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import generateStore from './redux/store'
import Routes from './routes/Routes'
import './App.scss'

function App () {
  const store = generateStore()

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </I18nextProvider>
  )
}

export default App
