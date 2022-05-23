import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import getAllPostsFromServer from '../../redux/actionCreators/posts'
import Post from '../Post/Post'
import './PostsUser.css'

const isAllPost = true
const isPreview = true

function PostsUser() {
  const posts = useSelector((store) => store.posts)

  const { idUser } = useParams()

  const userPosts = posts.filter((post) => post.userId === +idUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPostsFromServer())
  }, [])

  return (
    <section className="posts">
      <h1>Все посты</h1>
      <div className="posts__cards">
        {userPosts.length ? userPosts.map((userPost) => (<Post key={userPost.id} {...userPost} isAllPost={isAllPost} isPreview={isPreview} />)) : null}
      </div>
    </section>
  )
}

export default PostsUser
