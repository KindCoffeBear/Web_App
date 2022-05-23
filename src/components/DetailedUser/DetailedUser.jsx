import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import getAllPostsFromServer from '../../redux/actionCreators/posts'
import getAllUsersFromServer from '../../redux/actionCreators/usersAC'
import Post from '../Post/Post'
import AboutUser from './AboutUser/AboutUser'
import './DetailedUser.css'

const isPreview = true

function DetailedUser() {
  const users = useSelector((store) => store.users)
  const posts = useSelector((store) => store.posts)

  const { idUser } = useParams()

  const indexUser = users.findIndex((item) => item.id === +idUser)

  const user = users[indexUser]

  const userPosts = posts.filter((post) => post.userId === +idUser).slice(-3)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsersFromServer())
    dispatch(getAllPostsFromServer())
  }, [])

  return (
    <section className="detailedUser">
      {user && <AboutUser {...user} />}
      <div className="detailedUser__posts">
        <h1 className="detailedUser__titlePosts">Посты</h1>
        <div className="detailedUser__postsWrap">
          {userPosts.length ? userPosts.map((post) => (<Post key={post.id} {...post} isPreview={isPreview} />)) : null}
        </div>
        <Link className="button_multifunctional detailedUser__button" to="./posts">Посмотреть все</Link>
      </div>
    </section>
  )
}

export default DetailedUser
