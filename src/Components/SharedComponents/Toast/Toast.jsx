import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearToast } from '../../../redux/features/cart/cartSlice';
import { FaCheckCircle, FaTimes, FaExclamationCircle } from 'react-icons/fa';

const Toast = () => {
    const dispatch = useDispatch();
    const { visible, message } = useSelector((state) => state.cart.toast);

    // Detect if it's an "already in cart" message
    const isAlready = message.includes('already');

    // Auto-dismiss after 3 seconds
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                dispatch(clearToast());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, message, dispatch]);

    const iconBg = isAlready
        ? 'linear-gradient(135deg, #f59e0b, #d97706)'
        : 'linear-gradient(135deg, #29A56C, #1e7d52)';

    const labelColor = isAlready ? '#d97706' : '#29A56C';
    const borderColor = isAlready ? '#fde68a' : '#dcfce7';
    const shadowColor = isAlready
        ? '0 8px 32px rgba(245,158,11,0.18), 0 2px 8px rgba(0,0,0,0.08)'
        : '0 8px 32px rgba(41,165,108,0.18), 0 2px 8px rgba(0,0,0,0.08)';

    return (
        <div
            className="fixed top-5 right-5 z-[9999] pointer-events-none"
            aria-live="polite"
        >
            <div
                className={`pointer-events-auto flex items-center gap-3 bg-white shadow-xl rounded-2xl px-5 py-4 min-w-[280px] max-w-[360px] transition-all duration-500 border ${visible
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                    }`}
                style={{
                    boxShadow: visible ? shadowColor : 'none',
                    borderColor: borderColor,
                }}
            >
                {/* Icon */}
                <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: iconBg }}
                >
                    {isAlready
                        ? <FaExclamationCircle size={18} color="white" />
                        : <FaCheckCircle size={18} color="white" />
                    }
                </div>

                {/* Message */}
                <div className="flex-1 min-w-0">
                    <p
                        className="text-xs font-bold uppercase tracking-wide mb-0.5"
                        style={{ color: labelColor }}
                    >
                        {isAlready ? 'Already in Cart' : 'Added to Cart'}
                    </p>
                    <p className="text-sm text-gray-700 font-medium leading-tight line-clamp-2">
                        {message}
                    </p>
                </div>

                {/* Close button */}
                <button
                    onClick={() => dispatch(clearToast())}
                    className="flex-shrink-0 text-gray-300 hover:text-gray-500 transition ml-1"
                    aria-label="Dismiss"
                >
                    <FaTimes size={13} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
