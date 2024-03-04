import React from 'react'
import {Link} from 'react-router-dom'
import search from '../../images/search.svg'
import heart from '../../images/heart.svg'
import cart from '../../images/shopping-cart.svg'
import './header.css'

function Header() {
  return (
    <div className='header'>
       <div className='left-side'>
        <div className='brand'>FoodOrder</div>
        <div className='menu'>
          <Link className='custom-link' to={'/'}> Home</Link>
          <Link className='custom-link' to={'/menu'}> Menu</Link>
          <Link className='custom-link' to={'/about'}> About Us</Link>
          <Link className='custom-link' to={'/contact'}> Contact Us</Link>
          <Link className='custom-link' to={'/blog'}> Blog</Link>
        </div>
       </div>
       <div className='right-side'>
        <div className='search-bar'>
          <span><input type='text' placeholder='search'/></span>
          <span><img src={search} className='search-icon' /></span>
        </div>
        <div className='wish-list'>
          <span><img src={heart} className='heart-icon'/></span>
          <span className='number'>0</span>
          
        </div>
        <div className='cart'>
        <span><img src={cart} /></span>
        <span className='number'>0</span>
        </div>
        <div className='signin'>
          <button>SignIn</button>
        </div>
       </div>
    </div>
  )
}

export default Header