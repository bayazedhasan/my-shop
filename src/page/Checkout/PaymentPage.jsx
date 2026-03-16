import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/features/cart/cartSlice';
import {
    FaArrowLeft,
    FaCheckCircle,
    FaCopy,
    FaCheck,
    FaShieldAlt,
    FaUpload,
    FaTimesCircle,
} from 'react-icons/fa';

/* ─── Brand config ─────────────────────────────────────────── */
const BRANDS = {
    bkash: {
        label: 'bKash',
        color: '#E2136E',
        lightBg: '#FFF0F6',
        ringClass: 'focus:ring-pink-200',
        logo: 'https://scripts.sandbox.bka.sh/resources/img/bkash_logo.png',
        logoClass: 'h-10 object-contain',
        number: '01791971760',
    },
    nagad: {
        label: 'Nagad',
        color: '#F7941D',
        lightBg: '#FFF8EE',
        ringClass: 'focus:ring-orange-200',
        logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
        logoClass: 'h-14 object-contain -ml-2',
        number: '01791971760',
    },
};

/* ─── Helpers ──────────────────────────────────────────────── */
const MAX_FILE_MB = 5;

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const paymentData = location.state;
    if (!paymentData) {
        navigate('/cart');
        return null;
    }

    const { method, total, buyNowItem } = paymentData;
    const brand = BRANDS[method] ?? BRANDS.bkash;

    /* ── State ──────────────────────────────────────────────── */
    const [trxId, setTrxId] = useState('');
    const [screenshot, setScreenshot] = useState(null);      // { file, preview }
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [success, setSuccess] = useState(false);

    /* ── Copy number ────────────────────────────────────────── */
    const handleCopy = () => {
        navigator.clipboard.writeText(brand.number).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    /* ── Screenshot upload ──────────────────────────────────── */
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > MAX_FILE_MB * 1024 * 1024) {
            setErrors((prev) => ({ ...prev, screenshot: `File must be under ${MAX_FILE_MB}MB` }));
            return;
        }
        const preview = URL.createObjectURL(file);
        setScreenshot({ file, preview });
        setErrors((prev) => ({ ...prev, screenshot: '' }));
    };

    const removeScreenshot = () => {
        if (screenshot?.preview) URL.revokeObjectURL(screenshot.preview);
        setScreenshot(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    /* ── Validation ─────────────────────────────────────────── */
    const validate = () => {
        const errs = {};
        if (!trxId.trim()) {
            errs.trxId = 'Transaction ID is required';
        } else if (trxId.trim().length < 6) {
            errs.trxId = 'Transaction ID seems too short';
        }
        return errs;
    };

    /* ── Submit ─────────────────────────────────────────────── */
    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            // After showing success, clear cart and redirect
            setTimeout(() => {
                if (!buyNowItem) dispatch(clearCart());
                navigate('/order-success', { state: { paymentMethod: method } });
            }, 2500);
        }, 1800);
    };

    /* ── Success Screen ─────────────────────────────────────── */
    if (success) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
                <div className="text-center">
                    {/* Animated tick */}
                    <div
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: brand.color }}
                    >
                        <FaCheckCircle className="text-white" size={44} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                        Payment Submitted!
                    </h2>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                        Your Transaction ID has been recorded. We'll verify your{' '}
                        <span className="font-semibold" style={{ color: brand.color }}>
                            {brand.label}
                        </span>{' '}
                        payment shortly.
                    </p>
                    <p className="text-xs text-gray-400 mt-4 animate-pulse">
                        Redirecting to order confirmation…
                    </p>
                </div>
            </div>
        );
    }

    /* ── Main UI ────────────────────────────────────────────── */
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 px-4 flex justify-center items-start">
            <div className="w-full max-w-md">

                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition mb-5 text-sm"
                >
                    <FaArrowLeft size={13} /> Back
                </button>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Brand header banner */}
                    <div
                        className="relative px-6 pt-8 pb-10 text-center"
                        style={{ background: brand.lightBg }}
                    >
                        {/* Decorative blobs */}
                        <div
                            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                            style={{ background: brand.color }}
                        />
                        <div
                            className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-10 pointer-events-none"
                            style={{ background: brand.color }}
                        />

                        {/* Logo */}
                        <div className="relative z-10 w-24 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-3">
                            <img src={brand.logo} alt={brand.label} className={brand.logoClass} />
                        </div>

                        <h1
                            className="relative z-10 text-xl font-extrabold"
                            style={{ color: brand.color }}
                        >
                            Pay with {brand.label}
                        </h1>

                        {total && (
                            <p className="relative z-10 text-4xl font-black text-gray-800 mt-1 tracking-tight">
                                ৳{Number(total).toFixed(2)}
                            </p>
                        )}
                    </div>

                    {/* Body */}
                    <div className="px-6 pb-8 pt-6 flex flex-col gap-5">

                        {/* Send Money instruction card */}
                        <div
                            className="rounded-2xl border-2 p-4 text-center"
                            style={{ borderColor: brand.color + '40', background: brand.lightBg }}
                        >
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                                Send Money to
                            </p>
                            <div className="flex items-center justify-center gap-3 mt-1">
                                <span
                                    className="text-2xl font-black tracking-widest"
                                    style={{ color: brand.color }}
                                >
                                    {brand.number}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    title="Copy number"
                                    className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 active:scale-95"
                                    style={{
                                        background: copied ? '#22c55e' : brand.color,
                                        color: '#fff',
                                    }}
                                >
                                    {copied ? (
                                        <><FaCheck size={10} /> Copied!</>
                                    ) : (
                                        <><FaCopy size={10} /> Copy</>
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                Open your <strong>{brand.label}</strong> app → Send Money → paste this number
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                            {/* Transaction ID */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Transaction ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={trxId}
                                    onChange={(e) => {
                                        setTrxId(e.target.value);
                                        if (errors.trxId) setErrors((p) => ({ ...p, trxId: '' }));
                                    }}
                                    placeholder="e.g. 8FG92K1DXA"
                                    className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-4 transition-all ${errors.trxId
                                        ? 'border-red-400 focus:ring-red-100'
                                        : `border-gray-200 focus:border-[${brand.color}] ${brand.ringClass}`
                                        }`}
                                    style={
                                        !errors.trxId
                                            ? { borderColor: trxId ? brand.color : '' }
                                            : {}
                                    }
                                />
                                {errors.trxId && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <FaTimesCircle size={10} /> {errors.trxId}
                                    </p>
                                )}
                            </div>

                            {/* Screenshot upload (optional) */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Payment Screenshot{' '}
                                    <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>

                                {screenshot ? (
                                    <div className="relative rounded-xl overflow-hidden border border-gray-200 group">
                                        <img
                                            src={screenshot.preview}
                                            alt="Screenshot preview"
                                            className="w-full h-40 object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeScreenshot}
                                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow hover:bg-red-600 transition"
                                        >
                                            <FaTimesCircle size={14} />
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
                                            <p className="text-white text-xs truncate max-w-full">{screenshot.file.name}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-full border-2 border-dashed border-gray-200 rounded-xl py-6 flex flex-col items-center gap-2 text-gray-400 hover:border-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 active:scale-98"
                                    >
                                        <FaUpload size={20} />
                                        <span className="text-sm font-medium">Click to upload screenshot</span>
                                        <span className="text-xs">PNG, JPG up to {MAX_FILE_MB}MB</span>
                                    </button>
                                )}

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                {errors.screenshot && (
                                    <p className="text-red-500 text-xs mt-1">{errors.screenshot}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-2xl text-white font-bold text-base tracking-wide transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 mt-1"
                                style={{ background: brand.color }}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        Verifying…
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle size={16} />
                                        Confirm Payment
                                    </>
                                )}
                            </button>

                            {/* Security note */}
                            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5 mt-1">
                                <FaShieldAlt size={11} />
                                Your data is encrypted &amp; 100% secure
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
