import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Menu from './pages/Menu'
import Blog from './pages/Blog'
import BlogList from './pages/BlogList'
function App() {

  const isHomeRoute = window.location.pathname === '/';


  return (
    <>
     

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/blog/:title' element={<Blog />} />
        <Route path='/blog-list' element={<BlogList />} />
      </Routes>
      <Footer />



    </>
  )
}

export default App
