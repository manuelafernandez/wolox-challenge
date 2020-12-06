import * as actionTypes from '../actions/actionTypes'

const initData = {
  userInfo: {
    name: '',
    surname: '',
    country: '',
    province: '',
    email: '',
    phone: '',
    password: '',
    terms: false,
    token: ''
  },
  countrySelected: ''
}

export default function reducer (state = initData, action = []) {
  switch (action.type) {
    case actionTypes.COUNTRY_SELECTED:
      return { ...state, countrySelected: action.countrySelected }

    case actionTypes.LOGIN_USER:
      return { ...state, userInfo: action.userInfo }

    default:
      return state
  }
}
