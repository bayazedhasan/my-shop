import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import { FaTimes, FaShoppingCart, FaBolt } from 'react-icons/fa';

const COLOR_OPTIONS = [
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'White', hex: '#f5f5f5' },
    { name: 'Red', hex: '#e53e3e' },
    { name: 'Blue', hex: '#3182ce' },
    { name: 'Green', hex: '#29A56C' },
    { name: 'Yellow', hex: '#ecc94b' },
    { name: 'Pink', hex: '#ed64a6' },
    { name: 'Brown', hex: '#975A16' },
];

const ProductOptionsModal = ({ product, isOpen, onClose, mode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    // Reset options when product changes
    useEffect(() => {
        if (product) {
            setSelectedColor(COLOR_OPTIONS[0]);
            setSelectedSize(product.weightOptions?.[0] || '');
            setQuantity(1);
        }
    }, [product]);

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        if (isOpen) window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    if (!product) return null;

    const handleAddToCart = () => {
        dispatch(addToCart({
            ...product,
            selectedColor: selectedColor.name,
            selectedSize,
            quantity,
        }));
        onClose();
    };

    const handleBuyNow = () => {
        // Go directly to checkout WITHOUT adding to cart (no toast)
        onClose();
        navigate('/checkout', {
            state: {
                buyNowItem: {
                    ...product,
                    selectedColor: selectedColor.name,
                    selectedSize,
                    quantity,
                },
            },
        });
    };

    const savings = ((product.mrp - product.price) * quantity).toFixed(2);

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[998] transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            />

            {/* Modal Panel */}
            <div
                className={`fixed z-[999] bottom-0 left-0 right-0 md:inset-0 md:flex md:items-center md:justify-center transition-all duration-400 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-100 translate-y-full md:translate-y-0 md:opacity-0 pointer-events-none'
                    }`}
            >
                <div className="bg-white w-full md:max-w-lg md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden relative">

                    {/* Top bar with product info */}
                    <div className="flex items-center gap-4 p-5 border-b border-gray-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">{product.categoryName}</p>
                            <h3 className="text-gray-800 font-bold text-base leading-tight line-clamp-1">{product.name}</h3>
                            <div className="flex items-baseline gap-2 mt-0.5">
                                <span className="text-green-600 font-bold text-lg">${(product.price * quantity).toFixed(2)}</span>
                                <span className="line-through text-gray-400 text-sm">${(product.mrp * quantity).toFixed(2)}</span>
                                <span className="text-xs bg-red-50 text-red-500 font-semibold px-2 py-0.5 rounded-full">
                                    Save ${savings}
                                </span>
                            </div>
                        </div>
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                        >
                            <FaTimes size={13} />
                        </button>
                    </div>

                    <div className="p-5 flex flex-col gap-5 max-h-[60vh] overflow-y-auto">

                        {/* Color Selection */}
                        <div>
                            <p className="text-sm font-bold text-gray-700 mb-3">
                                Color Family ·{' '}
                                <span className="font-medium text-green-600">{selectedColor.name}</span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {COLOR_OPTIONS.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        title={color.name}
                                        className="relative w-9 h-9 rounded-full border-2 transition-all duration-200 hover:scale-110"
                                        style={{
                                            backgroundColor: color.hex,
                                            borderColor: selectedColor.name === color.name ? '#29A56C' : 'transparent',
                                            boxShadow: selectedColor.name === color.name
                                                ? '0 0 0 3px white, 0 0 0 5px #29A56C'
                                                : '0 1px 4px rgba(0,0,0,0.15)',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size / Family Selection */}
                        {product.weightOptions && product.weightOptions.length > 0 && (
                            <div>
                                <p className="text-sm font-bold text-gray-700 mb-3">
                                    Size ·{' '}
                                    <span className="font-medium text-green-600">{selectedSize}</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {product.weightOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setSelectedSize(opt)}
                                            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${selectedSize === opt
                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <p className="text-sm font-bold text-gray-700 mb-3">Quantity</p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="w-10 h-10 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition font-bold text-xl flex items-center justify-center"
                                    >
                                        −
                                    </button>
                                    <span className="w-12 text-center text-gray-800 font-bold text-base">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                                        className="w-10 h-10 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition font-bold text-xl flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="text-sm text-gray-400">Max 10 per order</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-5 border-t border-gray-100 flex gap-3">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-200"
                        >
                            <FaShoppingCart size={15} />
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 shadow-md"
                            style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}
                        >
                            <FaBolt size={14} />
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductOptionsModal;
