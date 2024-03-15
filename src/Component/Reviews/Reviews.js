import React from 'react'

import './Reviews.css'

import {Swiper, SwiperSlide} from 'swiper/react';

import Person1 from './Person1.jpg';
import Person2 from './Person2.jpg';
import Person3 from './Person3.jpg';

function Reviews() {
  return (
    <div className='reviews-main-container'>
        <span className='normal-style'>What's our <span className='style-heading'>client say</span></span>
        <Swiper slidesPerView={1} grabCursor={true} className='flex-reviews'>

            
                <SwiperSlide className='reviews-container'>
                    <div className='reviews-left-section'>
                        <img className='person-img' src={Person1} alt='' />
                    </div>
                    <div className='reviews-right-section'>
                        <span>Bharath</span>
                        <span>Assess whether the food offers good value for money <br />
                        based on its quality, portion size, and price point.</span>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='reviews-container'>
                    <div className='reviews-left-section'>
                        <img className='person-img' src={Person2} alt='' />
                    </div>
                    <div className='reviews-right-section'>
                        <span>Rithu Varma</span>
                        <span>The most crucial aspect of any food review is its taste. <br />
                         Describe the flavors, textures, and overall <br />
                         enjoyment experienced while eating the food.</span>
                    </div>
                </SwiperSlide> 


                <SwiperSlide className='reviews-container'>
                    <div className='reviews-left-section'>
                        <img className='person-img' src={Person3} alt='' />
                    </div>
                    <div className='reviews-right-section'>
                        <span>Shalini</span>
                        <span>Highlight the freshness and quality of the ingredients used. <br />
                         Fresh, high-quality ingredients often contribute to better-tasting <br />
                         and more satisfying meals.</span>
                    </div>
                </SwiperSlide>
            

        </Swiper>
    </div>
  )
}

export default Reviews