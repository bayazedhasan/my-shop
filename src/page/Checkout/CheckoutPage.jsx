import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { clearCart } from '../../redux/features/cart/cartSlice';
import { FaLock, FaCheckCircle } from 'react-icons/fa';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { products: cartProducts, totalPrice: cartTotal, tax: cartTax, grandTotal: cartGrandTotal } = useSelector((state) => state.cart);

    // Direct Buy Now item passed via route state
    const buyNowItem = location.state?.buyNowItem;

    // Determine the source of data (Direct buy or Cart)
    const products = buyNowItem ? [buyNowItem] : cartProducts;
    const totalPrice = buyNowItem ? buyNowItem.price * buyNowItem.quantity : cartTotal;
    const tax = buyNowItem ? totalPrice * 0.05 : cartTax;
    const grandTotal = buyNowItem ? totalPrice + tax : cartGrandTotal;

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod', 'bkash', 'nagad'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!form.address.trim()) newErrors.address = 'Address is required';
        if (!form.city.trim()) newErrors.city = 'City is required';
        if (!form.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
        if (!form.country.trim()) newErrors.country = 'Country is required';
        return newErrors;
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            if (paymentMethod === 'cod') {
                if (!buyNowItem) dispatch(clearCart());
                navigate('/order-success', { state: { paymentMethod: 'cod' } });
            } else {
                // For bKash and Nagad, go to payment method selection first
                navigate('/payment-select', {
                    state: {
                        method: paymentMethod,
                        total: grandTotal,
                        buyNowItem: buyNowItem
                    }
                });
            }
        }, 1200);
    };

    if (products.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-gray-600 text-xl font-semibold">No items in cart!</p>
                <button
                    onClick={() => navigate('/shop')}
                    className="px-6 py-3 rounded-full text-white font-semibold transition hover:opacity-90"
                    style={{ background: '#29A56C' }}
                >
                    Go Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <button onClick={() => navigate('/cart')} className="hover:text-green-600 transition">
                        Cart
                    </button>
                    <span>›</span>
                    <span className="text-green-600 font-semibold">Checkout</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">
                    Checkout <span style={{ color: '#29A56C' }}>Details</span>
                </h1>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Shipping Form */}
                <div className="flex-1">
                    <form onSubmit={handlePlaceOrder} noValidate>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                                <span className="w-7 h-7 rounded-full text-white flex items-center justify-center text-sm font-bold" style={{ background: '#29A56C' }}>
                                    1
                                </span>
                                Shipping Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.fullName
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.email
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+1 234 567 8900"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.phone
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Street Address *
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="123 Main Street, Apt 4B"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.address
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                                    )}
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="New York"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.city
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                                    )}
                                </div>

                                {/* Postal Code */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Postal Code *
                                    </label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={form.postalCode}
                                        onChange={handleChange}
                                        placeholder="10001"
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.postalCode
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    />
                                    {errors.postalCode && (
                                        <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
                                    )}
                                </div>

                                {/* Country */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Country *
                                    </label>
                                    <select
                                        name="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border text-gray-800 bg-white focus:outline-none focus:ring-2 transition ${errors.country
                                            ? 'border-red-400 focus:ring-red-200'
                                            : 'border-gray-200 focus:ring-green-200 focus:border-green-400'
                                            }`}
                                    >
                                        <option value="">Select a country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="India">India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                                <span className="w-7 h-7 rounded-full text-white flex items-center justify-center text-sm font-bold" style={{ background: '#29A56C' }}>
                                    2
                                </span>
                                Payment Method
                            </h2>
                            <div className="flex flex-col gap-3">
                                {/* Cash on Delivery */}
                                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-200'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="w-5 h-5 accent-green-600"
                                    />
                                    <span className="font-semibold text-gray-800">Cash on Delivery (COD)</span>
                                </label>

                                {/* bKash */}
                                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'bkash' ? 'border-[#e2136e] bg-[#fce4ec]' : 'border-gray-200 hover:border-[#f48fb1]'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bkash"
                                        checked={paymentMethod === 'bkash'}
                                        onChange={() => setPaymentMethod('bkash')}
                                        className="w-5 h-5 accent-[#e2136e]"
                                    />
                                    <div className="flex items-center gap-2">
                                        <img src="https://scripts.sandbox.bka.sh/resources/img/bkash_logo.png" alt="bKash" className="h-6 object-contain" />
                                        <span className="font-semibold text-gray-800">bKash</span>
                                    </div>
                                </label>

                                {/* Nagad */}
                                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'nagad' ? 'border-[#ed1c24] bg-[#ffebee]' : 'border-gray-200 hover:border-[#ef9a9a]'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="nagad"
                                        checked={paymentMethod === 'nagad'}
                                        onChange={() => setPaymentMethod('nagad')}
                                        className="w-5 h-5 accent-[#ed1c24]"
                                    />
                                    <div className="flex items-center gap-2">
                                        <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="Nagad" className="h-8 -ml-1 object-contain" />
                                        <span className="font-semibold text-gray-800">Nagad</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Place Order Button */}
                        <button
                            onClick={handlePlaceOrder}
                            disabled={loading}
                            className="w-full py-4 mt-5 rounded-xl text-white font-bold text-lg tracking-wide transition-all duration-300 hover:opacity-90 active:scale-98 shadow-lg disabled:opacity-70 flex items-center justify-center gap-3"
                            style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <FaLock size={16} />
                                    {paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Pay'} · ${grandTotal.toFixed(2)}
                                </>
                            )}
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-3">
                            🔒 Your information is encrypted and secure
                        </p>
                    </form>
                </div>

                {/* Order Summary Sidebar */}
                <div className="w-full lg:w-[360px] flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-bold text-gray-800 mb-5">Order Summary</h2>

                        {/* Products */}
                        <div className="flex flex-col gap-4 mb-4 max-h-64 overflow-y-auto pr-1">
                            {products.map((product) => (
                                <div key={product.id} className="flex items-center gap-3">
                                    <div className="relative flex-shrink-0">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-14 h-14 object-cover rounded-xl"
                                        />
                                        <span className="absolute top-0 -right-2 bg-[#29A56C] text-white text-xs w-5 h-5 rounded-full flex text-center items-center justify-center font-bold">
                                            {product.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-800 font-medium text-sm line-clamp-1">{product.name}</p>
                                        {(product.selectedColor || product.selectedSize) && (
                                            <p className="text-gray-500 text-xs mt-0.5 mb-0.5 flex gap-2">
                                                {product.selectedColor && <span>Color: {product.selectedColor}</span>}
                                                {product.selectedSize && <span>Size: {product.selectedSize}</span>}
                                            </p>
                                        )}
                                        <p className="text-gray-400 text-xs">${product.price} each</p>
                                    </div>
                                    <p className="text-gray-800 font-semibold text-sm flex-shrink-0">
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                            <div className="flex justify-between text-gray-600 text-sm">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-800">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 text-sm">
                                <span>Tax (5%)</span>
                                <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 text-sm">
                                <span>Shipping</span>
                                <span className="text-green-600 font-semibold">Free</span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                                <span className="text-base font-bold text-gray-800">Total</span>
                                <span className="text-xl font-bold" style={{ color: '#29A56C' }}>
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Security badges */}
                        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                            {['🔒 SSL Secure', '🚚 Free Ship', '↩ Easy Return'].map((badge) => (
                                <div
                                    key={badge}
                                    className="bg-gray-50 rounded-lg py-2 px-1 text-xs text-gray-500 font-medium"
                                >
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
