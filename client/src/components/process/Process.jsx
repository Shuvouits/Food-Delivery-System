import React, { useEffect } from 'react'
import './process.css'
import BackgroundProcess from '../../images/image-2023-10-17-09-10-17-5724.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Process() {

    useEffect(()=>{

        AOS.init({duration: 3000})

    },[])



  return (
    <div className='process'>

        <div className='left-side'>
            <img src={BackgroundProcess} />
          

        </div>
        <div className='right-side'>
          <span className='title'>
            <h2>The Process of Crafting your Dining Experience</h2>
          </span>
          <div className='card-group'>

            <div className='card'>
                <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className='card-info'>
                    <span>
                        <h3>Set your location</h3>
                    </span>
                    <span>
                        <p>A high quality solution beautifully food for customers</p>
                    </span>
                    <span className='sticker-number'>1</span>
                </div>

            </div>

            <div className='card'>
                <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className='card-info'>
                    <span>
                        <h3>Set your location</h3>
                    </span>
                    <span>
                        <p>A high quality solution beautifully food for customers</p>
                    </span>
                    <span className='sticker-number'>2</span>
                </div>

            </div>

            <div className='card'>
                <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className='card-info'>
                    <span>
                        <h3>Set your location</h3>
                    </span>
                    <span>
                        <p>A high quality solution beautifully food for customers</p>
                    </span>
                    <span className='sticker-number'>3</span>
                </div>

            </div>


            <div className='card'>
                <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className='card-info'>
                    <span>
                        <h3>Set your location</h3>
                    </span>
                    <span>
                        <p>A high quality solution beautifully food for customers</p>
                    </span>
                    <span className='sticker-number'>4</span>
                </div>

            </div>


            <div className='card'>
                <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div className='card-info'>
                    <span>
                        <h3>Set your location</h3>
                    </span>
                    <span>
                        <p>A high quality solution beautifully food for customers</p>
                    </span>
                    <span className='sticker-number'>5</span>
                </div>

            </div>

           

          </div>
        </div>
       

    </div>
  )
}

export default Process