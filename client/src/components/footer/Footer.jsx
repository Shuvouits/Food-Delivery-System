import React, { useEffect } from 'react'
import visa from '../../images/-2023-10-26-06-08-41-2782.png'
import americanExpress from '../../images/-2023-10-26-06-09-00-2179.png'
import paypal from '../../images/-2023-10-26-06-09-29-6264.png'
import mastarCard from '../../images/-2023-10-26-06-11-52-9757.png'
import googlePay from '../../images/-2023-10-26-06-12-07-2080.png'
import './footer.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

    useEffect(()=>{

        AOS.init({duration: 3000})

    },[])


    return (
        <div className='footer' >

            <div className='row' data-aos='fade-right'>

                <div className='col'>
                    <div className='title'>FoodOrder</div>
                    <div className='about'>
                        At ReservQ, we invite you to embark on a journey of taste and delight.Our tables are more than just places.
                    </div>
                    <div className='social'>
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>

                        </span>
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </span>
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </span>
                    </div>

                </div>

                <div className='col'>
                    <div className='title'>
                        Quick Links
                    </div>
                    <div className='qlink-group'>
                        <span className='q-link'>My Profile</span>
                        <span className='q-link'>About Us</span>
                        <span className='q-link'>Contact Us</span>
                    </div>

                </div>

                <div className='col'>
                    <div className='title'>
                        Terms & Privacy
                    </div>
                    <div className='title-group'>
                        <span className='terms'>Privacy & Policy</span>
                        <span className='terms'>Terms of Service</span>
                    </div>

                </div>

                <div className='col'>

                    <div className='row'>
                        <div className='title'>
                            Subscribe Our Newsletter
                        </div>
                        <div className='subscribe-form'>
                            <form className='form'>
                                <div className='form-group'>
                                    <input type='text' className='form-control' />
                                </div>
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='title'>
                            We accept Payment Methods
                        </div>
                        <div className='payment-image-group'>
                            <span>
                                <img src={visa} />
                            </span>
                            <span>
                                <img src={americanExpress} />
                            </span>
                            <span>
                                <img src={paypal} />
                            </span>
                            <span>
                                <img src={mastarCard} />
                            </span>

                            <span>
                                <img src={googlePay} />
                            </span>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default Footer