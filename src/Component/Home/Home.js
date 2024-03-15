import React from 'react'

import Logo1 from '../Images/Logo1.png';
import Logo2 from '../Images/Logo2.png';


import './Home.css'
import Items from '../Items/Items';
import TopCollection from '../TopCollection/TopCollection';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
        <div className='home-container'>
            <div className="home-left-section">
                <span>Welcome to BK food court ! </span> 
                <span> Life is Beautiful, make it better with Your favourite food </span>
                <span>Enjoy your life by eating delicious <br /> and healthy food. Because we are the best <br /> in the town.</span>
                <button>Order Now</button>
            </div>
            <div className="home-right-section">
                <img src={Logo1} alt='' />
                <img src={Logo2} alt='' />
            </div>
        </div>
        <Items/>
        <TopCollection/>
        <Details/>
        <Footer/>
    </div>
  )
}

export default Home
