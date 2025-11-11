import React, { useEffect, useState } from 'react';
import Card from './HomeComponents/Card';
import Banner from './HomeComponents/Banner';
import SecondBanner from './HomeComponents/SecondBanner';
import BannerCounters from './HomeComponents/SuccessBanner';
import ThirdBanner from './HomeComponents/ThirdBanner';
import FourthBanner from './HomeComponents/FourthBanner';
import SecondCart from './HomeComponents/SecondCart';
import Footer from '../../Components/Footer';
import ThirdHeader from '../../Components/SharedComponents/Header/ThirdHeader';

const About = () => {
    const [carts,setCarts] = useState([]);
    useEffect(()=>{
        fetch("Card.json")
        .then(res=> res.json())
        .then(data=>setCarts(data)
        )
    },[])
    const [secoundCarts,setSecondCarts] = useState([])
useEffect(()=>{
    fetch("Short-card.json")
    .then(res => res.json())
    .then(data=> setSecondCarts(data))
},[])
    return (
        <div>
            <ThirdHeader></ThirdHeader>
            <Banner></Banner>
            <Card carts={carts}></Card>
            <SecondBanner></SecondBanner>
            <BannerCounters></BannerCounters>
            <ThirdBanner></ThirdBanner>
            <FourthBanner></FourthBanner>
            <SecondCart secoundCarts={secoundCarts}></SecondCart>
            <Footer></Footer>
        </div>
    );
};

export default About;