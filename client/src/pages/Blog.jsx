import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import FAQ from '../components/faq/FAQ'
import Resturent from '../components/resturent/Resturent'
import BlogContent from '../components/blog/BlogContent'
import Footer from '../components/footer/Footer'


function Blog() {
  return (
    <div>
        <Header />
        <Banner title={'Blog Details'} />
        <BlogContent />
       
        <FAQ />
        <Resturent />
        <Footer />
    </div>
  )
}

export default Blog