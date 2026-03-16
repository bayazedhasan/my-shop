import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FaCheckCircle, FaShoppingBag, FaHome } from 'react-icons/fa';

const PAYMENT_LABELS = {
    bkash: { label: 'bKash', color: '#E2136E' },
    nagad: { label: 'Nagad', color: '#F7941D' },
    cod: { label: 'Cash on Delivery', color: '#29A56C' },
};

const OrderSuccess = () => {
    const [show, setShow] = useState(false);
    const { state } = useLocation();

    // Determine the payment method from route state, fallback to cod
    const methodKey = state?.paymentMethod ?? 'cod';
    const payment = PAYMENT_LABELS[methodKey] ?? PAYMENT_LABELS.cod;

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div
                className={`bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                    }`}
                style={{ transform: show ? 'none' : 'translateY(2rem) scale(0.95)' }}
            >
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 delay-200 ${show ? 'scale-100' : 'scale-0'
                            }`}
                        style={{ background: 'linear-gradient(135deg, #29A56C22, #29A56C44)' }}
                    >
                        <FaCheckCircle size={52} style={{ color: '#29A56C' }} />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed!</h1>
                <p className="text-gray-500 mb-2">
                    🎉 Thank you for your purchase!
                </p>
                <p className="text-gray-400 text-sm mb-8">
                    Your order has been confirmed and will be delivered to your address soon. You'll receive an email confirmation shortly.
                </p>

                {/* Order details */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-8 text-left">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Order Status</span>
                        <span className="text-green-600 font-semibold">Confirmed ✓</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Estimated Delivery</span>
                        <span className="text-gray-800 font-semibold">3–5 Business Days</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Payment</span>
                        <span className="font-semibold" style={{ color: payment.color }}>
                            {payment.label}
                        </span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                    <Link
                        to="/shop"
                        className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-white font-bold transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}
                    >
                        <FaShoppingBag size={16} />
                        Continue Shopping
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-gray-600 font-semibold border border-gray-200 hover:bg-gray-50 transition"
                    >
                        <FaHome size={16} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;

