import GET_ALL_USERS from '../actionTypes/usersTypes'

const getAllUsers = (dataFromServer) => ({
  type: GET_ALL_USERS,
  payload: dataFromServer,
})

const getAllUsersFromServer = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataFromServer = await response.json()
  dispatch(getAllUsers(dataFromServer))
}

export default getAllUsersFromServer
