import React from 'react'

import Aboutimage from '../Images/Aboutimage.png';
import Aboutimage2 from '../Images/Aboutimage2.png'

import './About.css'
import Contact from '../Contact/Contact'
import Chefs from '../Chefs/Chefs';
import Reviews from '../Reviews/Reviews';

function About() {
  return (
    <div>
      <div className='about-container'>
        <div className='about-left-section'>
          <span>Welcome to our food court !</span>
          <span>Our recipes are crafted to showcase the natural goodness of each ingredient <br />
          allowing their true essence to shine through in every bite.
          </span>
          <span>Join us on a journey of taste and discovery <br />
           as we explore the wonderful world of fresh and delicious food together. <br />
           With BK foodcourt as your guide.</span>
           <button>Order Now</button>
         </div>
        <div className='about-right-section'>
          <img src={Aboutimage} alt=''  className='about-img'/>
          <img src={Aboutimage2} alt=''  className='about-img2'/>
        </div>
      </div>
      <Chefs />
      <Reviews/>
      <Contact/>
    </div>
  )
}

export default About
