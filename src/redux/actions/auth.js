import * as actionTypes from './actionTypes'

export const setAutentication = () => async (dispatch, getState) => {
  const token = localStorage.getItem('token')
  const isAuth = token !== null
  dispatch({
    type: actionTypes.SET_AUTHENTICATION,
    auth: isAuth
  })
}
