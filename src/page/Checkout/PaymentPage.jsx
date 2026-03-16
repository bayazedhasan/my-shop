import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/features/cart/cartSlice';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const paymentData = location.state;
    // If no payment data exists (user navigated here directly), redirect to cart
    if (!paymentData) {
        navigate('/cart');
        return null;
    }

    const { method, total, buyNowItem } = paymentData;

    const [trxId, setTrxId] = useState('');
    const [last4Digits, setLast4Digits] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const isBkash = method === 'bkash';

    const handlePayment = (e) => {
        e.preventDefault();

        // Basic validation for an 11-digit Bangladeshi number
        if (!accountNumber.trim()) {
            setError('Account number is required');
            return;
        }
        if (!/^(01)[3-9][0-9]{8}$/.test(accountNumber)) {
            setError('Please enter a valid 11-digit mobile number');
            return;
        }

        setError('');
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            if (!buyNowItem) dispatch(clearCart());
            navigate('/order-success');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-center">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-md relative overflow-hidden">

                {/* Decorative background circle */}
                <div
                    className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10"
                    style={{ background: isBkash ? '#e2136e' : '#ed1c24' }}
                />

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition mb-6"
                >
                    <FaArrowLeft size={14} /> Back to Checkout
                </button>

                <div className="text-center mb-8 relative z-10">
                    <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 p-4 shadow-inner">
                        <img
                            src={isBkash
                                ? "https://scripts.sandbox.bka.sh/resources/img/bkash_logo.png"
                                : "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"}
                            alt={method}
                            className={isBkash ? "w-full object-contain" : "w-full -ml-1 object-contain transform scale-125"}
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Pay with <span className="capitalize" style={{ color: isBkash ? '#e2136e' : '#ed1c24' }}>{method}</span>
                    </h2>
                    <p className="text-gray-500 mt-2">Amount to pay</p>
                    <p className="text-4xl font-bold tracking-tight text-gray-800 mt-1 mb-4">৳{total.toFixed(2)}</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 inline-block">
                        <p className="text-sm text-gray-500 mb-1">Please Send Money to:</p>
                        <p className="text-xl font-bold tracking-wide" style={{ color: isBkash ? '#e2136e' : '#ed1c24' }}>
                            01791971760
                        </p>
                    </div>
                </div>

                <form onSubmit={handlePayment} className="relative z-10 flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Enter the {isBkash ? 'bKash' : 'Nagad'} number you sent money from:
                        </label>
                        <input
                            type="tel"
                            placeholder="01XXXXXXXXX"
                            maxLength={11}
                            value={accountNumber}
                            onChange={(e) => {
                                setAccountNumber(e.target.value.replace(/\D/g, ''));
                                setError('');
                            }}
                            className={`w-full px-5 py-4 rounded-xl border text-center text-xl tracking-widest text-gray-800 placeholder-gray-300 focus:outline-none transition-all duration-300 ${error
                                ? 'border-red-400 focus:ring-4 focus:ring-red-100 bg-red-50'
                                : `border-gray-200 focus:border-[${isBkash ? '#e2136e' : '#ed1c24'}] focus:ring-4 ${isBkash ? 'focus:ring-[#fce4ec]' : 'focus:ring-[#ffebee]'}`
                                }`}
                        />
                        {error && <p className="text-red-500 text-sm mt-2 text-center font-medium">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-2 py-4 rounded-xl text-white font-bold text-lg tracking-wide transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg disabled:opacity-75 relative overflow-hidden"
                        style={{ background: isBkash ? '#e2136e' : '#ed1c24' }}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                Confirm Payment <FaCheckCircle />
                            </span>
                        )}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                        <FaLock size={10} /> Secure 128-bit SSL Encryption
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
