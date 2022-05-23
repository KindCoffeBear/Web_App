import './Comment.css'

function Comment({ name, email, body }) {
  return (
    <div className="comment">
      <div>
        <h3 className="comment__name">{name}</h3>
        <p className="comment__email">{email}</p>
      </div>
      <p className="comment__text">{body}</p>
    </div>
  )
}

export default Comment
