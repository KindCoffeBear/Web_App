import { Link } from 'react-router-dom'
import './User.css'

function User({ name, id }) {
  const arrayFromName = name.split(' ')
  const firstAndLastName = arrayFromName.filter((item) => item.length > 4).join(', ')

  return (
    <div className="users__card">
      <h2>{firstAndLastName}</h2>
      <Link className="button_multifunctional" to={`user/${id}`}>Смотреть профиль</Link>
    </div>
  )
}

export default User
