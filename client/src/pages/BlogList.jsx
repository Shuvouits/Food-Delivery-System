import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import FAQ from '../components/faq/FAQ'
import Resturent from '../components/resturent/Resturent'
import ListBlog from '../components/blog-list/ListBlog'


function BlogList() {

  


    return (
        <div>
            <Header />
            <Banner title={'Our Blogs'}/>
            <ListBlog />
          


            
            <FAQ />
            <Resturent />
        </div>
    )
}

export default BlogList