import React from 'react'
import aboutImg from '../../images/banner-image-2023-10-29-04-04-45-9740 (1).png'
import img1 from '../../images/about-icon-1.png'
import img2 from '../../images/about-icon-2.png'
import './about.css'

function AboutComponent() {
    return (
        <div className='aboutp'>
            <div className='container'>
                <div className='left-side'>
                    <div className='image'>
                        <img src={aboutImg} />

                    </div>

                </div>
                <div className='right-side'>
                    <span className='title'>
                        <h2>Our Story of food Culinary Excellence at ReservQ</h2>
                    </span>
                    <span className='description'>
                        There are many variations of passages of Lorem Ipsum available, but the to a majority have suffered alteration in some form, by injected humour, or find randomised words which don't look even slightly believable.
                        <br></br>
                        <br></br>
                        Over 20 years’ experience providing top quality house Booking rant and sell for your Amazing Dream & Make you Happy
                    </span>
                    <div className='row'>


                        <span className='icon-group'>
                            <span>
                                <img src={img1} />
                            </span>
                            <div className='info'>
                                <span className='first'>
                                    90k+ Customers
                                </span>
                                <span className='second'>
                                    Believe in our service & Care

                                </span>

                            </div>



                        </span>

                        <span className='icon-group'>
                            <span>
                                <img src={img1} />
                            </span>

                            <div className='info'>
                                <span className='first'>
                                    90k+ Customers
                                </span>
                                <span className='second'>
                                    Believe in our service & Care

                                </span>

                            </div>



                        </span>




                    </div>



                </div>


            </div>

        </div>
    )
}

export default AboutComponent