import React from 'react'

import './Overview.css'

import Chef from '../Images/Chef.png';

function Overview() {
  return (
    <div className='overview-container'>
        <div className='overview-left-section'>
            <div>
                <img className='overview-img' src= {Chef} alt='' />
            </div>
            <div className='span-div'>
                <span>Eat <span className='style-span'>Healthy</span></span>
                <span>Live <span className='style-span'>Long</span></span>
                <span>Live <span className='style-span'>Strong!</span></span>
            </div>
        </div>
        <div className='overview-right-section'>
            <span>OVERVIEW</span>
            <span>A Little information For <br /> Our Guest</span>
            <span>Here we attach brief data about our wistra coffee capce that <br />
            Will make it easier for us guests at our cage tp get to know us better.</span>
            <div className='overview-right-inner'>
                <div className='inner-sud'>
                    <span>15K +</span>
                    <span>Happy Customers</span>
                </div>
                <div className='inner-sud'>
                    <span>10 +</span>
                    <span>Award Win</span>
                </div>
                <div className='inner-sud'>
                    <span>100 +</span>
                    <span>Food Menu</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Overview
