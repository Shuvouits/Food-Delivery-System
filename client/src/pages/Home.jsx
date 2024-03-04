import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import Traditional from '../components/traditional/Traditional'
import Process from '../components/process/Process'
import Popular from '../components/popular/Popular'
import FAQ from '../components/faq/FAQ'
import Customer from '../components/customer/Customer'


function Home() {
  return (
    <>
      <div className='nav-banner'>
        <Header />
        <Hero />

      </div>

      <Category />
      <Traditional />
      <Process />
      <Popular />
      <FAQ />
      <Customer />

    </>
  )
}

export default Home