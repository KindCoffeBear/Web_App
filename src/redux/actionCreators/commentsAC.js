import { ADD_NEW_COMMENT, GET_ALL_COMMENTS } from '../actionTypes/commentsTypes'

const getAllComments = (dataFromServer) => ({
  type: GET_ALL_COMMENTS,
  payload: dataFromServer,
})

export const getAllCommentsFromServer = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const dataFromServer = await response.json()
  dispatch(getAllComments(dataFromServer))
}

const addComment = (newCommentFromServer) => ({
  type: ADD_NEW_COMMENT,
  payload: newCommentFromServer,
})

export const addCommentQuery = (newComment) => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  })

  const newCommentFromServer = await response.json()
  dispatch(addComment(newCommentFromServer))
}
