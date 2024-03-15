
import React, { useState } from 'react'

import emailjs from '@emailjs/browser'; 
import { useRef } from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import './Contact.css'

function Contact() {

  const form = useRef();

    const [done, setdone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cg5vme9', 'template_tqn04mj', form.current, {
        publicKey: 'hbY3MW1xMdFXV0azk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setdone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className='contact-container'>
        <div className='contact-left-section'>
            <span>Get in Touch</span>
            <span>Have a question, suggestion, or just want to say hello? <br />
             We'd love to hear from you! Feel free to reach out to us via <br />
            email, social media, or through our website's contact form. <br />
            Your feedback and input are invaluable to us as we continue to grow and evolve.</span>
            <span>Thank you for being a part of the BK foodcourt family. <br />
            Together, let's create delicious memories that last a lifetime.</span>
            <span>BK foodcourt Team</span>
            <div className="contact-left-icons">
                <FaInstagram />
                <FaTelegram />
                <FaWhatsapp />
            </div>
        </div>
        <div className='contact-right-section'>
        <form ref={form} onSubmit={sendEmail} className='form-container'>
                <input type='text' name='from_name' className='user' placeholder='Name' />
                <input type='email' name='from_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type='submit' value="Send" className='button' />
                <span>{done && "Thanks for contact me"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact
