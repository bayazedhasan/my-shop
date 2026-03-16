import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { FaArrowLeft, FaChevronRight, FaShieldAlt } from 'react-icons/fa';

const BKASH_COLOR = '#E2136E';
const NAGAD_ORANGE = '#F7941D';

const methods = [
    {
        id: 'bkash',
        label: 'bKash',
        color: BKASH_COLOR,
        lightBg: '#FFF0F6',
        border: '#FBCFE8',
        logo: 'https://scripts.sandbox.bka.sh/resources/img/bkash_logo.png',
        logoClass: 'h-10 object-contain',
        tagline: 'Fast & Secure Mobile Banking',
        emoji: '📱',
    },
    {
        id: 'nagad',
        label: 'Nagad',
        color: NAGAD_ORANGE,
        lightBg: '#FFF8EE',
        border: '#FDE68A',
        logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
        logoClass: 'h-12 object-contain -ml-2',
        tagline: 'Digital Financial Service',
        emoji: '💳',
    },
];

const PaymentMethodSelection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Carry forward any state (total, buyNowItem, etc.) from previous page
    const prevState = location.state || {};

    const handleSelect = (method) => {
        navigate('/payment', {
            state: {
                ...prevState,
                method: method.id,
            },
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-4 py-12">
            {/* Card Container */}
            <div className="w-full max-w-sm">
                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition mb-6 text-sm"
                >
                    <FaArrowLeft size={13} />
                    Back
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md mb-4 text-2xl">
                        💸
                    </span>
                    <h1 className="text-2xl font-extrabold text-gray-800 leading-tight">
                        Choose Payment Method
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Select your preferred mobile banking option
                    </p>
                    {prevState.total && (
                        <div className="mt-4 inline-block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold">
                            Total: ৳{Number(prevState.total).toFixed(2)}
                        </div>
                    )}
                </div>

                {/* Payment Method Cards */}
                <div className="flex flex-col gap-4">
                    {methods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => handleSelect(method)}
                            className="group w-full rounded-2xl border-2 p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 text-left"
                            style={{
                                borderColor: method.border,
                                background: method.lightBg,
                            }}
                        >
                            {/* Logo area */}
                            <div
                                className="w-20 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner"
                                style={{ background: '#fff' }}
                            >
                                <img
                                    src={method.logo}
                                    alt={method.label}
                                    className={method.logoClass}
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <p
                                    className="text-lg font-bold"
                                    style={{ color: method.color }}
                                >
                                    {method.label}
                                </p>
                                <p className="text-gray-500 text-xs mt-0.5">
                                    {method.tagline}
                                </p>
                            </div>

                            {/* Arrow */}
                            <FaChevronRight
                                size={16}
                                className="text-gray-300 group-hover:translate-x-1 transition-transform"
                                style={{ color: method.color }}
                            />
                        </button>
                    ))}
                </div>

                {/* Security note */}
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs">
                    <FaShieldAlt size={11} />
                    <span>256-bit SSL encrypted &amp; 100% secure</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodSelection;
