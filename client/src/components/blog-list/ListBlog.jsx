import React, { useEffect } from 'react'
import './listblog.css'
import BlogImg from '../../images/-2023-10-22-11-18-01-4058.png'
import Img1 from '../../images/-2024-02-01-12-05-11-5463.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


function ListBlog() {
    
    useEffect(()=>{

        AOS.init({duration: 1000})

    },[])

    return (
        <div className='list-blog' data-aos='fade-up'>
            <div className='container'>

                <div className='row'>

                    <div className='card'>

                        <span className='image'>
                            <img src={BlogImg} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>

                    <div className='card'>

                        <span className='image'>
                            <img src={Img1} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>

                    <div className='card'>

                        <span className='image'>
                            <img src={BlogImg} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>

                    <div className='card'>

                        <span className='image'>
                            <img src={BlogImg} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>

                    <div className='card'>

                        <span className='image'>
                            <img src={BlogImg} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>

                    <div className='card'>

                        <span className='image'>
                            <img src={BlogImg} />
                        </span>

                        <div className='info'>

                            <span className='tag-list'>
                                <span>Stories</span>
                                <span>Media</span>
                            </span>
                            <span className='title'>
                                Chef Spotlight: Behind the Scenes of Culinary Mastery
                            </span>
                            <span className='read-more'>
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>

                        </div>


                    </div>







                </div>



            </div>

        </div>
    )
}

export default ListBlog