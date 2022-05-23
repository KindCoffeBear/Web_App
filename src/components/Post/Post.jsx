import { Link } from 'react-router-dom'
import './Post.css'

function Post({
  id, title, body, isAllPost, isPreview,
}) {
  const description = `${body.slice(0, 60)}...`

  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__description">{isPreview ? description : body}</p>
      {isAllPost && (<Link className="button_multifunctional post__button" to={`./${id}`}>Раскрыть пост</Link>)}
    </div>
  )
}

export default Post
