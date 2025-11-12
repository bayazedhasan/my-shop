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
    const [collectionCart,setCollectionCart] = useState([]);
    useEffect(()=>{
        fetch("collection.json")
        .then(res=> res.json())
        .then(data=>setCollectionCart(data))
    },[])
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch("blog.json")
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    },[])
    return {Categories,products,collectionCart,blogs}
};

export default useData;