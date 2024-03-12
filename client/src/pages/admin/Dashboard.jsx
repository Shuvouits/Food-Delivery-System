import React, { useState } from 'react'
import Home from '../../components/admin/home/Home'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import '../../components/layout/layout.css'


function Dashboard() {

  const[mobileMenu, setMobileMenu] = useState(false)
  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }

  console.log(mobileMenu)

  return (
    <div className='layout'>
      <div className='container'>
        <div className={mobileMenu ? 'left-part responsive' : 'left-part'}>
          <Sidebar handleClick={handleClick} />

        </div>
        <div className='right-part'>
          <Navbar handleClick={handleClick} />
          <Home   />

        </div>

      </div>

    </div>
  )
}

export default Dashboard