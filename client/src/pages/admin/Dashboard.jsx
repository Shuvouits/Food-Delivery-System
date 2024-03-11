import React from 'react'
import Layout from '../../components/layout/Layout'
import Home from '../../components/admin/home/Home'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


function Dashboard() {
  return (
    <div className='layout'>
      <div className='container'>
        <div className='left-part'>
          <Sidebar />

        </div>
        <div className='right-part'>
          <Navbar />
          <Home />

        </div>

      </div>

    </div>
  )
}

export default Dashboard