import * as actionTypes from '../actions/actionTypes'

const initialData = {
  login: false
}

export default function reducer (state = initialData, action = []) {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      return { ...state, login: action.auth }
    default:
      return state
  }
}
