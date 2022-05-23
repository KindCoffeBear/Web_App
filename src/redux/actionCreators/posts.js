import GET_ALL_POSTS from '../actionTypes/postsTypes'

const getAllPosts = (dataFromServer) => ({
  type: GET_ALL_POSTS,
  payload: dataFromServer,
})

const getAllPostsFromServer = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataFromServer = await response.json()
  dispatch(getAllPosts(dataFromServer))
}

export default getAllPostsFromServer
