import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../../images/search.svg'
import heart from '../../images/heart.svg'
import cart from '../../images/shopping-cart.svg'
import './header.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div  className={`header ${scrolled ? 'scrolled' : ''}`}>
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
          <span><input type='text' placeholder='search' /></span>
          <span><img src={search} className='search-icon' /></span>
        </div>
        <div className='wish-list'>
          <span><img src={heart} className='heart-icon' /></span>
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
      <div className='responsive-menu'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </div>
  )
}

export default Header