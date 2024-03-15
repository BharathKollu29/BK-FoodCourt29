import React from 'react'

import { FaTruckFast } from "react-icons/fa6";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineIssuesClose } from "react-icons/ai";


import './WhyBK.css'

function WhyBK() {

  return (
    <div className='whybk-container'>
        <div className='whybk-left-section'>
            <span className='non-style-elment'>Why <span className='style-element'>BK foodcourt</span></span>
        </div>
        <div className='whybk-right-section'>

            <div className='whybk-card'>
                <AiFillProfile />
                <span>Easy To Order</span>
            </div>

            <div className='whybk-card'>
                <FaTruckFast />
                <span>Fatest Delivery</span>
            </div>
            <div className='whybk-card'>
                <AiOutlineIssuesClose />
                <span>Best Quality</span>
            </div>

        </div>

    </div>
  )
}

export default WhyBK
