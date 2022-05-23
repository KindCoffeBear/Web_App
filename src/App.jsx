import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailedPost from './components/DetailedPost/DetailedPost'
import DetailedUser from './components/DetailedUser/DetailedUser'
import PostsUser from './components/PostsUser/PostsUser'
import Users from './components/Users/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user/:idUser" element={<DetailedUser />} />
        <Route path="user/:idUser/posts" element={<PostsUser />} />
        <Route path="user/:idUser/posts/:idPost" element={<DetailedPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
