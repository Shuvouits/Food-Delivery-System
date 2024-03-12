import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Menu from './pages/Menu'
import Blog from './pages/Blog'
import BlogList from './pages/BlogList'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/admin/Dashboard'
import OrderAll from './pages/admin/OrderAll'
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
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/all-order' element={<OrderAll />} />
      </Routes>
  



    </>
  )
}

export default App
