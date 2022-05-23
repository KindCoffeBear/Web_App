import { ADD_NEW_COMMENT, GET_ALL_COMMENTS } from '../actionTypes/commentsTypes'

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return action.payload

    case ADD_NEW_COMMENT:
      return [...state, action.payload]

    default:
      return state
  }
}

export default commentsReducer
