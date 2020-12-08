import * as actionTypes from './actionTypes'

export const Get = async () => {
  try {
    const response = await fetch('https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    return await response.json()
  } catch (error) {
    return { error, token: null }
  }
}

export const setFavorites = (favorites) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SET_FAVORITES,
    favorites: favorites
  })
}

export const getList = () => async (dispatch, getState) => {
  const list = await Get()
  const listSort = sortArray(list, 'tech', 'ASC')

  dispatch({
    type: actionTypes.SET_LIST,
    list: listSort
  })
}

export const filter = (name, type) => async (dispatch, getState) => {
  const state = getState()
  let list = state.list.initList

  if (type.length > 0 && type !== 'All') {
    list = list.filter((item) => item.type === type)
  }

  if (name.trim().length > 0) {
    list = list.filter(
      (item) => item.tech.toLowerCase().indexOf(name.toLowerCase()) > -1
    )
  }

  const listSort = sortArray(list, 'tech', state.list.sort)

  dispatch({
    type: actionTypes.SET_FILTER,
    filter: listSort
  })
}

const sortArray = (array, item, sort = 'ASC') => {
  array.sort(function (a, b) {
    const nameA = a[item].toUpperCase()
    const nameB = b[item].toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })

  if (sort === 'DESC') {
    return array.reverse()
  }
  return array
}

export const sortList = () => async (dispatch, getState) => {
  const state = getState()
  const sort = state.list.sort === 'DESC' ? 'ASC' : 'DESC'
  const listSort = sortArray(state.list.filterList, 'tech', sort)

  dispatch({
    type: actionTypes.SET_SORT,
    listSort: listSort,
    sort: sort
  })
}
