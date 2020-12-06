import * as actionTypes from '../actions/actionTypes'

const initData = {
  login: false
}

export default function reducer (state = initData, action = []) {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      return { ...state, login: action.auth }

    default:
      return state
  }
}
