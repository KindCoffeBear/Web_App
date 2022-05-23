import './Users.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllUsersFromServer from '../../redux/actionCreators/usersAC'
import User from './User/User'

function Users() {
  const users = useSelector((store) => store.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsersFromServer())
  }, [])

  return (
    <section className="users">
      <h1>Пользователи</h1>
      <div className="users__cards">
        {users.length ? users.map((user) => (<User key={user.id} {...user} />)) : null}
      </div>
    </section>
  )
}

export default Users
