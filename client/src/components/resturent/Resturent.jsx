import React, { useEffect } from 'react'
import './resturent.css'
import appleImg from '../../images/apple.png'
import googleImg from '../../images/Google_Play.png'
import websiteImg from '../../images/image-2023-10-23-05-02-17-4927.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Resturent() {

    useEffect(()=>{

        AOS.init({duration: 2000})
    
    },[])


    return (
        <div className='resturent'>
            <div className='left-part'>

                <span className='title'>
                    <h2>
                        Find out Better Restaurant Food Experience
                    </h2>

                </span>
                <span className='description'>
                    We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                </span>
                <span className='logo'>
                    <span className='first-logo'>
                        <img src={googleImg} />
                        <p>Play Store</p>
                    </span>

                    <span className='second-logo' >
                        <img src={appleImg} />
                        <p>Apple</p>

                    </span>

                </span>

            </div>
            <div className='right-part' data-aos='fade-left'>
                <img src={websiteImg} />

            </div>

        </div>
    )
}

export default Resturent