import * as actionTypes from '../actions/actionTypes'

const initialData = {
  initList: [],
  filterList: [],
  favorites: [],
  sort: 'ASC'
}

export default function reducer (state = initialData, action = []) {
  switch (action.type) {
    case actionTypes.SET_LIST:
      return { ...state, initList: action.list, filterList: action.list }
    case actionTypes.SET_FILTER:
      return { ...state, filterList: action.filter }
    case actionTypes.SET_FAVORITES:
      return { ...state, favorites: action.favorites }
    case actionTypes.SET_SORT:
      return { ...state, filterList: action.listSort, sort: action.sort }
    default:
      return state
  }
}
