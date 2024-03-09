import React from 'react'
import './blog.css'
import FeaturedImg from '../../images/young-woman-cafe-dines-traditional-shakshuka-ayran_169016-16764.jpg'
import BlogImg from '../../images/-2024-02-01-12-05-11-5463.png'
import Sticker from '../../images/pertner-image-2023-10-21-08-41-59-7710.png'


function BlogContent() {



  return (
    <div className='blog'>
      <div className='blog-wrapper'>

        <div className='left-side'>

          <div className='section-1'>

            <div className='title'>
              <h1>Flavorful Fusion: Exploring the Art of Culinary Blending</h1>

            </div>
            <div className='image'>
              <img src={FeaturedImg} />
              <span className='image-overlay'></span>
            </div>
            <div className='content'>
              <p>
                Embark on a delectable journey as we delve into the world of culinary delights and gastronomic adventures. Food is not just sustenance; it's an art that connects cultures, evokes memories, and stirs emotions. In this blog, we invite you to join us as we explore the fascinating realm of flavors, aromas, and the stories behind every dish. Whether you're a seasoned foodie or simply curious about the magic that happens in the kitchen, our culinary exploration promises to satisfy your appetite for knowledge and inspiration.

                The Art of Fusion:

                Discover the artistry of blending flavors and techniques from different cuisines. Explore how culinary fusion can result in unique and tantalizing dishes that transcend cultural boundaries. From Japanese-Peruvian fusion to modern twists on classic comfort foods, we'll take you on a global taste tour that celebrates the beauty of culinary creativity.



                Prepare to be inspired, your taste buds to be tantalized, and your love for food to be reignited. Whether you're seeking new recipes, cultural insights, or a deeper appreciation for the art of cooking, our blog is your passport to a world of culinary delights and gastronomic adventures.
              </p>

            </div>

          </div>

          <div className='section-2'>
            <div className='tag'>
              <h3>Tags</h3>
              <span className='tag-list'>
                <span>#Stories</span>
                <span>#Media</span>
              </span>
            </div>
            <div className='social'>
              <h3>Social</h3>
              <span className='social-list'>
                <span>Facebook</span>
                <span>Twitter</span>

              </span>
            </div>

          </div>

          <div className='section-3'>
            <form className='form'>

              <div className='form-group'>
                <label htmlFor=''>Put Your Valuable Comment</label>
                <textarea placeholder='Type Here' className='form-control' />

              </div>
              <button>Submit Now</button>



            </form>

          </div>

        </div>

        <div className='right-side'>
          <div className='section-1'>
            <form className='form'>
              <div className='form-group'>
                <label>Search</label>
                <span className='icon-input'>
                  <input type='text' className='form-control' placeholder='Type Here' />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>

              </div>
            </form>

          </div>


          <div className='section-2'>
            <h3>Latest Blog</h3>

            <div className='row'>
              <span className='image'>
                <img src={BlogImg} />
              </span>

              <div className='blog-info'>

                <span className='title'>
                  <p>Time-Honored Recipes with a Modern Twist</p>
                </span>
                <span className='date-group'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>

                  <span className='date'>22October2023</span>

                </span>

              </div>

            </div>

            <div className='row'>
              <span className='image'>
                <img src={BlogImg} />
              </span>

              <div className='blog-info'>

                <span className='title'>
                  <p>Time-Honored Recipes with a Modern Twist</p>
                </span>
                <span className='date-group'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>

                  <span className='date'>22October2023</span>

                </span>

              </div>

            </div>

            <div className='row'>
              <span className='image'>
                <img src={BlogImg} />
              </span>

              <div className='blog-info'>

                <span className='title'>
                  <p>Time-Honored Recipes with a Modern Twist</p>
                </span>
                <span className='date-group'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>

                  <span className='date'>22October2023</span>

                </span>

              </div>

            </div>

            <div className='row'>
              <span className='image'>
                <img src={BlogImg} />
              </span>

              <div className='blog-info'>

                <span className='title'>
                  <p>Time-Honored Recipes with a Modern Twist</p>
                </span>
                <span className='date-group'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>

                  <span className='date'>22October2023</span>

                </span>

              </div>

            </div>


          </div>

          <div className='section-3'>
            <h3>Follow Us</h3>
            <div className='social-group'>


              <span className='facebook'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>

              </span>

              <span className='twitter'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </span>

              <span className='linkedin'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>

            </div>

          </div>

          <div className='section-4'>
            <img src={Sticker} />

          </div>









        </div>

      </div>

    </div>
  )
}

export default BlogContent