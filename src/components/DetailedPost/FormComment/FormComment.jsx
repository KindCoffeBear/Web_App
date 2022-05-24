import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCommentQuery } from '../../../redux/actionCreators/commentsAC'
import './FormComment.css'

function FormComment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const { idPost } = useParams()

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    const newComment = {
      name,
      email,
      body: text,
      postId: +idPost,
    }

    if (name && email && text) {
      dispatch(addCommentQuery(newComment))

      setName('')
      setEmail('')
      setText('')
    } else {
      alert('Введите все данные')
    }
  }

  return (
    <form className="form" method="POST" onSubmit={submitHandler}>
      <h2>Оставьте комментарий</h2>
      <div className="form__inputs">
        <textarea onChange={changeName} name="name" placeholder="Имя" value={name} />
        <textarea onChange={changeEmail} name="email" placeholder="Email" value={email} />
        <textarea onChange={changeText} name="text" placeholder="Текст комментария" rows="5" value={text} />
      </div>
      <button type="submit" className="button_multifunctional form__button_submit">отправить</button>
    </form>
  )
}

export default FormComment
