import * as actionTypes from '../actions/actionTypes'

const initialData = {
  user: {
    name: '',
    last_name: '',
    country: '',
    province: '',
    mail: '',
    phone: '',
    password: ''
  }
}

export default function reducer (state = initialData, action = []) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, login: action.user }
    default:
      return state
  }
}
