import GET_ALL_USERS from '../actionTypes/usersTypes'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload
    default:
      return state
  }
}

export default usersReducer
