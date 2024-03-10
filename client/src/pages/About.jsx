import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Category from '../components/category/Category'
import Traditional from '../components/traditional/Traditional'
import Process from '../components/process/Process'
import Popular from '../components/popular/Popular'
import FAQ from '../components/faq/FAQ'
import Customer from '../components/customer/Customer'
import Latest from '../components/latestNews/Latest'
import Resturent from '../components/resturent/Resturent.jsx'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner.jsx'
import AboutComponent from '../components/about/AboutComponent.jsx'

function About() {
  return (
    <div>
     <Header />
    <Banner title={'About Us'} />
    <AboutComponent />
    <Process />
    <Popular />
    <Customer />
    <FAQ />
    <Resturent />
    



    </div>
  )
}

export default About