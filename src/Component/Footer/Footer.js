import React from 'react'

import './Footer.css'

import { FcMissedCall } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-left-section'>
            <spa>BK FoodCourt</spa>
        </div>
        <div className='footer-middle-section'>
            <span><FcMissedCall className='contact-icon' /><span className='footer-contact'>8308132338</span></span>
        </div>
        <div className='footer-right-section'>
            <span>Connect With Us</span>
            <div className='footer-icons'>
                <FaInstagram />
                <FaTelegram />
                <FaWhatsapp />
            </div>

        </div>
    </div>
  )
}

export default Footer