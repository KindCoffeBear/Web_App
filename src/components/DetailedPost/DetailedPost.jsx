import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCommentsFromServer } from '../../redux/actionCreators/commentsAC'
import getAllPostsFromServer from '../../redux/actionCreators/posts'
import Post from '../Post/Post'
import Comments from './Comments/Comments'
import './DetailedPost.css'
import FormComment from './FormComment/FormComment'

function DetailedPost() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const posts = useSelector((store) => store.posts)

  const { idPost } = useParams()

  const currentPost = posts.find((post) => post.id === +idPost)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPostsFromServer())
    dispatch(getAllCommentsFromServer())
  }, [])

  const clickHandler = () => {
    setIsFormOpen(true)
  }

  return (
    <section className="detailedPost">
      {currentPost && (<Post {...currentPost} />)}
      <p>Комментарии</p>
      <Comments />
      <button onClick={clickHandler} type="button" className="button_multifunctional detailedPost__button_addComment">Добавить комментарий</button>
      {isFormOpen && <FormComment />}
    </section>
  )
}

export default DetailedPost
