import React from 'react'

import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";

import './TopCollectionCard.css'

const TopCollectionCard = ({data}) => {
    const {image, name, rating, price} = data
  return (
  <div className='topcollection-card'>
    <img className='card-image' src={image} alt='' />
    <div className='topcollection-card-right-section'>
        <span className='card-title'>{name}</span>
        <span className='card-star'><FaStar /><span className='card-rating'>{rating}</span></span>
        <span className='card-rupee'><MdOutlineCurrencyRupee /> <span className='card-price'>{price}</span></span>
        <FaCartArrowDown className='card-cart' />
    </div>
   </div>
  )
}

export default TopCollectionCard
