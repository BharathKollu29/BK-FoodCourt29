import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'

import Salad from '../Images/Salad.png';
import PotBiriyani from '../Images/PotBiriyani.png';
import Burger from '../Images/Burger.png';
import Pizza from '../Images/Pizza.png';
import Biriyani from '../Images/Biriyani.png';
import KFC from '../Images/KFC.png';
import Sandwich from '../Images/Sandwich.png';

import './Items.css'

function Items() {
  return (
        <div className='card-container'>
            <span className='items-heading'>WHAT'S ON YOUR MIND ?</span>
            <Swiper  slidesPerView={6} grabCursor={true} className='card-items-container'>

                <SwiperSlide className='card'>
                    <img className='item-image' src={KFC} alt='' />
                    <span className='item-name'>KFC</span>
                </SwiperSlide>

                <SwiperSlide className='card'>
                    <img className='item-image' src={PotBiriyani} alt='' />
                    <span className='item-name'>Biriyani</span>
                </SwiperSlide>

                <SwiperSlide className='card'>
                    <img className='item-image' src={Pizza} alt='' />
                    <span className='item-name'>Pizaa</span>
                </SwiperSlide>

                <SwiperSlide className='card'>
                    <img className='item-image' src={Burger} alt='' />
                    <span className='item-name'>Burger</span>
                </SwiperSlide>

                <SwiperSlide className='card'>
                    <img className='item-image' src={Sandwich} alt='' />
                    <span className='item-name'>Sandwich</span>
                </SwiperSlide>
                
                
                <SwiperSlide className='card'>
                    <img className='item-image' src={Salad} alt='' />
                    <span className='item-name'>Salad</span>
                </SwiperSlide>

                <SwiperSlide className='card'>
                    <img className='item-image' src={Biriyani} alt='' />
                    <span className='item-name'>Mutton Biriyani</span>
                </SwiperSlide>

    

                
            </Swiper>
    </div>
                

                
            
  )
}

export default Items
