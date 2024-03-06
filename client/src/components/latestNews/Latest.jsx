import React from 'react'
import './latest.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from "../../images/-2023-10-22-11-18-01-4058.png";
import Slider2 from "../../images/-2024-01-31-12-09-57-3229 (1).png";
import Slider3 from "../../images/-2024-01-31-12-09-57-3229.png";
import Slider4 from "../../images/-2024-02-01-12-05-11-5463.png";
import Slider5 from "../../images/-2024-02-01-12-05-11-5463.png";
import Slider6 from "../../images/-2024-02-01-12-05-11-5463.png";

function Latest() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };


    return (
        <div className='latest'>

            <div className='title'>
                <h2>Our Latest News</h2>

            </div>
            <br></br>

            <div className='carousel-container'>
                <Slider {...settings} >


                    <div className='slider-card'>

                        <div className='row'>
                            <div className='data'>
                                <span><img src={Slider4} alt="Slide 1" /></span>
                                <div className='group-data'>

                                    <span className='blog-title'>Chef Spotlight: Behind the Scenes of Culinary Mastery</span>
                                    
                                    <button>
                                        Read More
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='slider-card'>

                        <div className='row'>
                            <div className='data'>
                                <span><img src={Slider4} alt="Slide 1" /></span>
                                <div className='group-data'>

                                    <span className='blog-title'>Chef Spotlight: Behind the Scenes of Culinary Mastery</span>
                                    <button>
                                        Read More
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='slider-card'>

                        <div className='row'>
                            <div className='data'>
                                <span><img src={Slider4} alt="Slide 1" /></span>
                                <div className='group-data'>

                                    <span className='blog-title'>Chef Spotlight: Behind the Scenes of Culinary Mastery</span>
                                    <button>
                                        Read More
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='slider-card'>

                        <div className='row'>
                            <div className='data'>
                                <span><img src={Slider4} alt="Slide 1" /></span>
                                <div className='group-data'>

                                    <span className='blog-title'>Chef Spotlight: Behind the Scenes of Culinary Mastery</span>
                                    <button>
                                        Read More
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='slider-card'>

                        <div className='row'>
                            <div className='data'>
                                <span><img src={Slider4} alt="Slide 1" /></span>
                                <div className='group-data'>

                                    <span className='blog-title'>Chef Spotlight: Behind the Scenes of Culinary Mastery</span>
                                    <button>
                                        Read More
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Add more slides as needed */}
                </Slider>

            </div>

        </div>
    )
}

export default Latest