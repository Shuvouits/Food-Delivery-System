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
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


function Home() {


  return (
    <>

      <Header />
      <div className='nav-banner'>


        <Hero />
      </div>
      <Category />
      <Traditional />
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