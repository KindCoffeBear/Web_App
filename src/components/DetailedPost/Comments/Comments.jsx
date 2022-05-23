import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comment from './Comment/Comment'

function Comments() {
  const comments = useSelector((store) => store.comments)

  const { idPost } = useParams()

  const commentsPost = comments.filter((comment) => comment.postId === +idPost)

  return (
    <div>
      {commentsPost.length ? commentsPost.map((comment) => <Comment key={comment.id} {...comment} />) : null}
    </div>
  )
}

export default Comments
