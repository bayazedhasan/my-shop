import React from 'react';
import Hero from './Hero/Hero';
import HomeCategory from './HomeCategory/HomeCategory';
import Footer from '../../Components/Footer'
import PopularProducts from './PopularProducts/PopularProducts';
import LatestExclusive from './LatestExclusive/LatestExclusive';
import CollectionCart from './CollectionCart/CollectionCart';
import NewProduct from './NewProduct/NewProduct';
import SupportCart from './SupportCart/SupportCart';
import CardCarousel from './CardCarousel/CardCarousel';
import Blog from '../Blog/Blog';
import ShardBlog from '../Blog/ShardBlog';
const Home = () => {
    return (
        <div>
            
             <Hero></Hero>  
             <HomeCategory></HomeCategory> 
             <NewProduct></NewProduct>
             <LatestExclusive></LatestExclusive>
             <PopularProducts></PopularProducts>
             <CollectionCart></CollectionCart>
             <SupportCart></SupportCart>
             <CardCarousel></CardCarousel>
             <ShardBlog></ShardBlog>
             <Footer></Footer>
           
        </div>
    );
};

export default Home;