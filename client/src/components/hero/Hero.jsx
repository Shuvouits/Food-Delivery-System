import React from 'react'
import './hero.css'
import Bell from '../../images/bell.svg'
import Play from '../../images/play.svg'

function Hero() {
  return (
    <div className='hero'>
        <h2 className='hero-title'>
        Homestyle Italian Cooking Best Enjoyed with Family.
        </h2>
        <div className='hero-title-btn-group'>
          <span className='group-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <button>Get Your Menu</button>
          </span>
          <span className='group-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <button>Watch video</button>
          </span>

        </div>
    </div>
  )
}

export default Hero