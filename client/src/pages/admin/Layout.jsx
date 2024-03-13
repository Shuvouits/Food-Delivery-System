import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
import './assets/plugins/vectormap/jquery-jvectormap-2.0.2.css'
import './assets/plugins/simplebar/css/simplebar.css'
import './assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css'
import './assets/plugins/metismenu/css/metisMenu.min.css'
import './assets/css/pace.min.css'
import './assets/js/pace.min.js'
import './assets/css/bootstrap.min.css'
import './assets/css/app.css'
import './assets/css/icons.css'
import './assets/css/dark-theme.css'
import './assets/css/semi-dark.css'
import './assets/css/header-colors.css'

function Layout() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout