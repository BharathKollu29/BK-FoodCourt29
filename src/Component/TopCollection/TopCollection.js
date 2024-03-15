import React from 'react'



import './TopCollection.css'
import TopCollectionCard from '../TopCollectionCard/TopCollectionCard';

import Logo1 from '../Images/Logo1.png';
import Noodles from '../Images/Noodles.png';
import Haleem from '../Images/Haleem.png';
import PotBiriyani from '../Images/PotBiriyani.png';
import KFC from '../Images/KFC.png';
import Icecream from '../Images/Icecream.png';
import Salad from '../Images/Salad.png';



const Data = [

    {
        id: 1,
        image: Logo1,
        name: "Dum Biriyani",
        rating: "4.5",
        price: "280.00"
    },

    {
        id: 2,
        image: Noodles,
        name: "France Noodles",
        rating: "4.7",
        price: "180.00"
    },

    {
        id: 3,
        image: Haleem,
        name: "Haleem",
        rating: "4.8",
        price: "150.00"
    },

    {
        id: 4,
        image: KFC,
        name: "Fried Chicken",
        rating: "4.8",
        price: "450.00"
    },

    {
        id: 5,
        image: PotBiriyani,
        name: "Pot Biriyani",
        rating: "4.8",
        price: "320.00"
    },

    {
        id: 6,
        image: Salad,
        name: "Chopped Salad",
        rating: "4.8",
        price: "180.00"
    },

    {
        id: 7,
        image: Icecream,
        name: "IceCream",
        rating: "4.8",
        price: "180.00"
    }




    
]

function TopCollection() {

  return (
  <div className='topcollection-container'>
    <span className='style'>Top <span className='normal'>Collection !</span></span>
    <div className='topcollection-card-container'>
        {Data.map((each)=><TopCollectionCard  key={each.id} data={each}/>)}
    </div>
   </div>
  )
}

export default TopCollection