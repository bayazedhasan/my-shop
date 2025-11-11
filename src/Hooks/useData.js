import React, { useEffect, useState } from 'react';

const useData = () => {
    const [Categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("category.json")
        .then(res=> res.json())
        .then(data=>setCategories(data))
    },[])
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return {Categories,products}
};

export default useData;