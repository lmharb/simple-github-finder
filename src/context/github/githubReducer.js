import {
  SEARCH_USERS,
  SET_ISLOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case SET_ISLOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
