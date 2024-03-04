import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import Traditional from '../components/traditional/Traditional'


function Home() {
  return (
    <>
    <div className='nav-banner'>
      <Header />
      <Hero />
      
    </div>

    <Category />
    <Traditional />
     
    </>
  )
}

export default Home