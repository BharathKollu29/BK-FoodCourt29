import React from 'react'

import Overviewimg from '../Images/Overviewimg.png';

import './Services.css'

import WhyBK from '../WhyBK/WhyBK';
import Overview from '../Overview/Overview';

import Menu from './Menu.jpg';


function Services() {

  return (
    <div>
      <div className='services-container'>
        <div className='services-left-section'>
        <span>The taste of tradition, <br /> With a modern twist.</span>
          <span>This website is for people who love to eat and who appreciate good food. <br /> 
          With recipes that are both delicious and visually appeading, you're sure to <br />
          To find something to wow your taste buds.</span>
          <a href={Menu} download>
            <button className='menu-button'>Download Menu</button>
          </a>
          
        </div>
        <div className='services-right-section'>
          <img className='service-img' src={Overviewimg} alt='' />
        </div>
    </div>
    <WhyBK/>
    <Overview />
    </div>
  )
}

export default Services
