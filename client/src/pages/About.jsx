import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'

import Process from '../components/process/Process'
import Popular from '../components/popular/Popular'
import FAQ from '../components/faq/FAQ'
import Customer from '../components/customer/Customer'
import Resturent from '../components/resturent/Resturent.jsx'
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
    <Footer />
    



    </div>
  )
}

export default About