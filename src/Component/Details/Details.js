import React from 'react'

import './Details.css'

function Details() {
  return (
    <div className='details-container'>
        <div className='details-first-section'>
            <span className='details-heading'>BK FOODCOURT</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Partner offers</span>
            <span>Download App</span>
            <span>Contact Us</span>
        </div>
        <div className='details-second-section'>
            <span className='details-heading'>DISCOVER</span>
            <span>Table booking</span>
            <span>Fast food near me</span>
            <span>Prepaid deals near me</span>
        </div>
        <div className='details-third-section'>
            <span className='details-heading'>FOR YOU</span>
            <span>Prime Subscription</span>
            <span>EasyPoints Redemption</span>
            <span>Refer & Earn</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        <div className='details-fourth-section'>
            <span className='details-heading'>FOR RESTAURANTS</span>
            <span>List your Reastaurants</span>
            <span>Livetable-Reastaurants</span>
            <span>Food Critics</span>
            <span>Advisory council</span>
        </div>
    </div>
  )
}

export default Details