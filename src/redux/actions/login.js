import * as actionTypes from './actionTypes'

export const Login = async (user) => {
  try {
    const response = await fetch('https://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch (error) { return { error, token: null } }
}

export const loginUser = (user) => async (dispatch, getState) => {
  try {
    const response = await Login(user)

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', response.token)

    dispatch({
      type: actionTypes.SET_USER,
      user: user
    })
  } catch (error) {
    console.log(error)
  }
}
