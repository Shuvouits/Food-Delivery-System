import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from "../../images/pasta-2024-01-23-12-09-54-1343.png";
import Slider2 from "../../images/chicken-2024-01-23-12-07-55-7931.png";
import Slider3 from "../../images/delish-burger-2024-01-23-12-06-36-1053.png";
import Slider4 from "../../images/nachos-2024-01-31-11-33-41-6622.png";
import Slider5 from "../../images/sandwiches-2024-01-23-12-07-02-3056.png";
import Slider6 from "../../images/tacos-2024-01-31-11-33-57-7846.png";

import './category.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Category() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        }
      }
      // Add more responsive breakpoints as needed
    ]
  };  

  useEffect(()=>{

    AOS.init({duration: 2000})

},[])


  return (
    <div className='category' data-aos='fade-up'>

      <span className='title'>
        <h2>Our Categories</h2>
      </span>
      <br></br>
      <br></br>

      <div className='carousel-container'>
        <Slider {...settings} >
          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider1} alt="Slide 1" /></span>
                <span>Pasta</span>
              </div>

            </div>

          </div>

          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider2} alt="Slide 1" /></span>
                <span>Chicken</span>
              </div>

            </div>

          </div>

          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider3} alt="Slide 1" /></span>
                <span>Burger</span>
              </div>

            </div>

          </div>

          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider4} alt="Slide 1" /></span>
                <span>Nachos</span>
              </div>

            </div>

          </div>

          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider5} alt="Slide 1" /></span>
                <span>Sandwiches</span>
              </div>

            </div>

          </div>

          <div className='slider-card'>

            <div className='row'>
              <div className='data'>
                <span><img src={Slider6} alt="Slide 1" /></span>
                <span>Tacos</span>
              </div>

            </div>

          </div>




          {/* Add more slides as needed */}
        </Slider>
      </div>

    </div>
  )
}

export default Category