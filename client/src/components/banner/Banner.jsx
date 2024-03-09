import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

function Banner({title}) {
    return (
        <div className='banner'>
            <div className='banner-wrapper'>

                <span className='title'>
                    <h2>{title}</h2>
                </span>
                <span className='breadcumb'>
                    <span className='first'><Link to='/' className='custom-link'>Home</Link></span>
                    <span className='second'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </span>
                    <span className='third'>{title}</span>
                </span>

            </div>

        </div>
    )
}

export default Banner