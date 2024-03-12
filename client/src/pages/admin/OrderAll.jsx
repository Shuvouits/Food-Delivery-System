import React, { useState } from 'react'
import AllOrder from '../../components/admin/allorder/AllOrder'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

function OrderAll() {

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
        <AllOrder   />

      </div>

    </div>

  </div>
  )
}

export default OrderAll