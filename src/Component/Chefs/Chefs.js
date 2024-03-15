import React from 'react'

import './Chefs.css'

import Chef1 from './Chef1.png';
import Chef2 from './Chef2.jpg';
import Chef3 from './Chef3.jpg';
import Chef4 from './Chef4.jpg';

function Chefs() {
  return (
    <div className='chefs-container'>
        <span className='normal-style'>Meet Our <span className='style-heading'>Chefs</span></span>
        <div className='overall-cards'>

            <div className='chefs-card'>
                <img className='chef-image' src={Chef1} alt=''/>
                <span>Oliver James</span>
             </div>

             <div className='chefs-card'>
                <img className='chef-image-av' src={Chef2} alt=''/>
                <span>Paula Deen</span>
             </div>

             <div className='chefs-card'>
                <img className='chef-image-av' src={Chef3} alt=''/>
                <span>Sarah Barber</span>
             </div>

             <div className='chefs-card'>
                <img className='chef-image-av' src={Chef4} alt=''/>
                <span>Anne Sophie</span>
             </div>
        </div>
    </div>
  )
}

export default Chefs