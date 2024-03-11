import React, { useState } from 'react'
import avater from '../../images/-2023-10-22-11-18-01-4058.png'
import './navbar.css'

function Navbar() {
  const [profile, setProfile] = useState(false)
  return (
    <div className='navbar'>
      <div className='container'>

        <div className='section-1' onClick={() => setProfile(!profile)}>
          <span>
            <img src={avater} width={20} />
          </span>
          <span className='name'>

            <span className='row'>
              Jhon Doe
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </span>


            <br></br>
            <span style={{ fontSize: '14px', color: 'gray' }}> Admin</span>
          </span>


        </div>

        {profile && (

          <div className='section-2'>
            <span className='title'>My Profile</span>

            <span className='profile-group'>
              <span className='icon'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              <span>My Profile</span>

            </span>

            <span className='profile-group'>
              <span className='icon'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </span>
              <span>LogOut</span>

            </span>
            <br></br>


          </div>

        )}


      </div>

    </div>
  )
}

export default Navbar