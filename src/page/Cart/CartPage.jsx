import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice';
import { FaTrashAlt, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, totalPrice, tax, grandTotal, selectedItems } = useSelector(
        (state) => state.cart
    );

    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleQuantity = (id, type) => {
        dispatch(updateQuantity({ id, type }));
    };

    if (products.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
                <FaShoppingCart size={80} className="text-gray-300" />
                <h2 className="text-3xl font-bold text-gray-700">Your Cart is Empty</h2>
                <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                <Link
                    to="/shop"
                    className="px-8 py-3 rounded-full text-white font-semibold text-lg transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8 flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition"
                >
                    <FaArrowLeft /> Back
                </button>
                <h1 className="text-3xl font-bold text-gray-800">
                    Shopping <span style={{ color: '#29A56C' }}>Cart</span>
                </h1>
                <span className="ml-2 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {selectedItems} item{selectedItems !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-1 flex flex-col gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex gap-5 items-center hover:shadow-md transition"
                        >
                            {/* Product Image */}
                            <Link to={`/shop/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                                />
                            </Link>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">
                                    {product.categoryName}
                                </p>
                                <Link to={`/shop/${product.id}`}>
                                    <h3 className="text-gray-800 font-semibold text-base mt-1 line-clamp-2 hover:text-green-600 transition">
                                        {product.name}
                                    </h3>
                                </Link>
                                {(product.selectedColor || product.selectedSize) && (
                                    <p className="text-gray-500 text-xs mt-1 flex gap-3">
                                        {product.selectedColor && <span>Color: <span className="font-semibold text-gray-700">{product.selectedColor}</span></span>}
                                        {product.selectedSize && <span>Size: <span className="font-semibold text-gray-700">{product.selectedSize}</span></span>}
                                    </p>
                                )}
                                <p className="text-green-600 font-bold text-lg mt-1">${product.price}</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => handleQuantity(product.id, 'decrement')}
                                    className="px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 transition text-lg font-bold"
                                >
                                    −
                                </button>
                                <span className="px-4 py-2 text-gray-800 font-semibold text-base min-w-[40px] text-center">
                                    {product.quantity}
                                </span>
                                <button
                                    onClick={() => handleQuantity(product.id, 'increment')}
                                    className="px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 transition text-lg font-bold"
                                >
                                    +
                                </button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right min-w-[80px]">
                                <p className="text-gray-800 font-bold text-lg">
                                    ${(product.price * product.quantity).toFixed(2)}
                                </p>
                                <p className="text-gray-400 text-xs">subtotal</p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemove(product)}
                                className="ml-2 text-gray-300 hover:text-red-500 transition"
                                title="Remove item"
                            >
                                <FaTrashAlt size={16} />
                            </button>
                        </div>
                    ))}

                    {/* Continue Shopping */}
                    <Link
                        to="/shop"
                        className="flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold mt-2 w-fit transition"
                    >
                        <FaArrowLeft size={14} /> Continue Shopping
                    </Link>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-[360px] flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                        {/* Items list */}
                        <div className="flex flex-col gap-2 mb-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex justify-between text-sm text-gray-600">
                                    <span className="truncate max-w-[180px]">
                                        <span className="font-medium text-gray-700">{product.name}</span>
                                        {(product.selectedColor || product.selectedSize) && (
                                            <span className="text-xs text-gray-400 block mt-0.5">
                                                {product.selectedColor && `Color: ${product.selectedColor}`}
                                                {product.selectedColor && product.selectedSize && ', '}
                                                {product.selectedSize && `Size: ${product.selectedSize}`}
                                            </span>
                                        )}
                                        <span className="block mt-0.5">Qty: {product.quantity}</span>
                                    </span>
                                    <span className="font-medium text-gray-800">
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-800">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (5%)</span>
                                <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600 font-semibold">Free</span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">Grand Total</span>
                                <span className="text-xl font-bold" style={{ color: '#29A56C' }}>
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/checkout')}
                            className="mt-6 w-full py-3 rounded-xl text-white font-bold text-base tracking-wide transition-all duration-300 hover:opacity-90 active:scale-98 shadow-md"
                            style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}
                        >
                            Proceed to Checkout →
                        </button>

                        {/* Trust badges */}
                        <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
                            <span>🔒 Secure Checkout</span>
                            <span>🚚 Free Shipping</span>
                            <span>↩ Easy Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
