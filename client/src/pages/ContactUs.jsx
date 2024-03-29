import React from 'react'
import FAQ from '../components/faq/FAQ'
import Resturent from '../components/resturent/Resturent'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function ContactUs() {
  return (
    <div>
        <Header />
        <Banner title={'Contact Us'} />
        <Contact />
       <FAQ />
       <Resturent />
       <Footer />
    </div>
  )
}

export default ContactUs