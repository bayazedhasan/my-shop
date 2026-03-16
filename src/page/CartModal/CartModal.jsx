"use Client"
import React from 'react';

const CartModal = (products, isopen, onclose) => {
    console.log(isopen)
    return (
        <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity ${isopen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: 'opacity 300ms' }}>
            modal
            </div>
        
    );
};

export default CartModal;