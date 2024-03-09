import React from 'react'
import Header from '../components/header/Header'
import Traditional from '../components/traditional/Traditional'
import FAQ from '../components/faq/FAQ'
import Resturent from '../components/resturent/Resturent'
import Banner from '../components/banner/Banner'
import './page.css'

function Menu() {

    return (

        <>
           <Header  />
            <Banner title={'Our Menu'} />

            <Traditional />
            <FAQ />
            <Resturent />

        </>

    )
}

export default Menu