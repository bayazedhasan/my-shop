import React from 'react';
import Hero from './Hero/Hero';
import HomeCategory from './HomeCategory/HomeCategory';
import Footer from '../../Components/Footer'
import PopularProducts from './PopularProducts/PopularProducts';
const Home = () => {
    return (
        <div>
            
             <Hero></Hero>  
             <HomeCategory></HomeCategory> 
             <PopularProducts></PopularProducts>
             <Footer></Footer>
           
        </div>
    );
};

export default Home;