import React, { useState } from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'

function Layout() {
 

  return (
    <div className='layout'>
        <div className='container'>
            <div className='left-part'>
                <Sidebar  />

            </div>
            <div className='right-part' >
                <Navbar handleClick={handleClick} />
                
            </div>

        </div>

    </div>
  )
}

export default Layout