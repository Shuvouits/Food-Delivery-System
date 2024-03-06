import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import Traditional from '../components/traditional/Traditional'
import Process from '../components/process/Process'
import Popular from '../components/popular/Popular'
import FAQ from '../components/faq/FAQ'
import Customer from '../components/customer/Customer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Latest from '../components/latestNews/Latest'
import Resturent from '../components/resturent/Resturent'


function Home() {

 
  return (
    <>
      <div className='nav-banner'>
        <Header />
        <Hero />

      </div>
      
         <Category   />


      
      
      <Traditional  />
      
      
      <Process />
      <Popular />
      <FAQ />
      <Customer />
      <Latest />
      <Resturent />

    </>
  )
}

export default Home