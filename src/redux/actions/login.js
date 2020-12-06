import * as actionTypes from './actionTypes'

const headers = new Headers({ 'Content-Type': 'application/json' })

export const Login = async (userInfo) => {
  try {
    const response = await fetch('https://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify(userInfo)
    })
    return await response.json()
  } catch (error) { return { error, token: null } }
}

export const loginUser = (userInfo) => async (dispatch, getState) => {
  try {
    const response = await Login(userInfo)
    if (typeof response.token === 'undefined') {
      return
    }

    localStorage.setItem('user', JSON.stringify(userInfo))
    localStorage.setItem('token', response.token)

    userInfo.token = response.token

    dispatch({
      type: actionTypes.LOGIN_USER,
      userInfo: userInfo
    })
  } catch (error) {
    console.log(error)
  }
}

export const setCountrySelected = (country) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.COUNTRY_SELECTED,
    countrySelected: country
  })
}
