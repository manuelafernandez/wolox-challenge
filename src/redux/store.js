import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './reducers/login'
import authReducer from './reducers/auth'
import listReducer from './reducers/list'

const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
  list: listReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore () {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
