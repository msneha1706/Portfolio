import React from 'react'
import two from './two.jpeg'
import './body.css'

function Body() {
  return (
    <div id="body">
        <div className='body'>
            <div className='image' data-aos="slide-left">
                <img src={two} />
            </div>

            <div className='content' data-aos="slide-right">
                <h1>Hi, I'm Sneha</h1>
            </div>
        </div>
    </div>
  )
}

export default Body