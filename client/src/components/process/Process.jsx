import React from 'react'
import './process.css'
import BackgroundProcess from '../../images/image-2023-10-17-09-10-17-5724.png'

function Process() {
  return (
    <div className='process'>

        <div className='left-side'>
            <img src={BackgroundProcess} />
        </div>

        <div className='right-side'>
            <div className='title'>
                <h2>The Process of Crafting your Dining Experience</h2>
            </div>
            <br></br>
            <div className='card-group'>

                <div className='card'>
                    <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <div className='description'>
                        <span><h2>Set your location</h2></span>
                    
                        <span>A high quality solution beautifully food for customers</span>
                    </div>
                    <span className='number'>1</span>
                </div>  

                <div className='card'>
                    <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <div className='description'>
                        <span><h2>Set your location</h2></span>
                    
                        <span>A high quality solution beautifully food for customers</span>
                    </div>
                    <span className='number'>1</span>
                </div>  

                <div className='card'>
                    <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <div className='description'>
                        <span><h2>Set your location</h2></span>
                    
                        <span>A high quality solution beautifully food for customers</span>
                    </div>
                    <span className='number'>1</span>
                </div>  

                

            </div>
        </div>

    </div>
  )
}

export default Process