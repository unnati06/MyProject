import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Posts from './pages/Posts';
import Post from './pages/Post';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
      <div>
        {/* <h1>Hello World.</h1> */}
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />} />
          <Route path = "/login" element = {<Login />}/>
          <Route path ="/register" element = {<Register />}/>
          <Route path="/posts" exact element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />

        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
