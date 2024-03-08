import React, { useEffect } from 'react'
import './traditional.css'
import CardImg1 from '../../images/baked-chicken-wings-and-legs-2024-01-25-10-02-43-3199.jpg';
import Popular from '../../images/populer.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Traditional() {

    useEffect(() => {

        AOS.init({ duration: 2000 })

    }, [])


    return (
        <div className='traditional' >
            <div className='title'>
                <h2>
                    Some Traditional Food Based on Location
                </h2>
            </div>

            <div className='button-group'>
                <span className='active'>All Categories</span>
                <span>Delish Burger</span>
                <span>Fried Rice</span>
                <span>Pasta</span>
                <span>Chicken</span>
                <span>Pizzas</span>
                <span>Sandwitches</span>
                <span>Nachos</span>
                <span>Tacos</span>

            </div>



            <div className='card-group' data-aos ='fade-up'>

                <div className='card'>
                    <div className='card-header'>
                        <img src={CardImg1} />
                        <span className='pouplar'>
                            <img src={Popular} />
                        </span>

                    </div>
                    <div className='card-body'>
                        <span className='product-price'>$150</span>
                        <span className='product-name'>Baked Chicken Wings and .....loream ipsumDolloe sum amet</span>
                        <div className='product-variation'>
                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                        </div>

                        <button>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                            <span>Add to Cart</span>
                        </button>


                    </div>

                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={CardImg1} />

                    </div>
                    <div className='card-body'>
                        <span className='product-price'>$150</span>
                        <span className='product-name'>Baked Chicken Wings and .....loream ipsumDolloe sum amet</span>
                        <div className='product-variation'>
                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                        </div>

                        <button>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                            <span>Add to Cart</span>
                        </button>


                    </div>

                </div>  

                <div className='card'>
                    <div className='card-header'>
                        <img src={CardImg1} />

                    </div>
                    <div className='card-body'>
                        <span className='product-price'>$150</span>
                        <span className='product-name'>Baked Chicken Wings and .....loream ipsumDolloe sum amet</span>
                        <div className='product-variation'>
                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                        </div>

                        <button>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                            <span>Add to Cart</span>
                        </button>


                    </div>

                </div>

                <div className='card'>
                    <div className='card-header'>
                        <img src={CardImg1} />

                    </div>
                    <div className='card-body'>
                        <span className='product-price'>$150</span>
                        <span className='product-name'>Baked Chicken Wings and .....loream ipsumDolloe sum amet</span>
                        <div className='product-variation'>
                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                            <span className='menu'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                                <span>4 Piece Chicken</span>
                            </span>

                        </div>

                        <button>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                            <span>Add to Cart</span>
                        </button>


                    </div>

                </div>

                




            </div>



        </div>
    )
}

export default Traditional