'use client';
import { useState } from "react";
import confetti from 'canvas-confetti';
import Link from "next/link";
// import { Link } from "react-router-dom";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        paymentMethod: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [orderCompleted, setOrderCompleted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        if (
            formData.paymentMethod === "card" &&
            (!formData.cardNumber || !formData.expiry || !formData.cvv)
        ) {
            alert("Please fill out all card details.");
            return;
        }

        setIsProcessing(true);
        setProgress(0);

        // Simulate circle progress
        startProcessing();

        // Simulate order completion after 5 seconds
        setTimeout(() => {
            setIsProcessing(false);
            setOrderCompleted(true);
            fireConfetti();
        }, 5000);
    };

    const startProcessing = () => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 50);
    };

    const fireConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#FFD700", "#000"],
        });
    };

    return (
        <div className="container  mx-auto p-6 text-center relative">
            {!orderCompleted ? (
                <>
                    <h1 className="text-5xl font-bold mb-6 text-gray-900">
                        Checkout
                    </h1>
                    {isProcessing ? (
                        <div className="fixed inset-0 top-[4rem] flex items-center justify-center bg-white bg-opacity-90 z-50">
                            <div className="relative">
                                {/* SVG Full Circle Progress */}
                                <svg className="w-32 h-32" viewBox="0 0 36 36">
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#e5e5e5"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#FFD700"
                                        strokeWidth="4"
                                        strokeDasharray="100"
                                        strokeDashoffset={`${100 - progress}`}
                                        strokeLinecap="round"
                                        transform="rotate(-90 18 18)"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-700">
                                    {progress}%
                                </div>
                            </div>
                            <p className="text-lg font-semibold text-gray-700 mt-4">
                                Processing...
                            </p>
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                                Complete Your <span className="text-yellow-500">Order</span>
                            </h2>
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* User Information Section */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-gray-700">User Information</h3>

                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-lg font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                            onChange={handleChange}
                                            required
                                            disabled={isProcessing}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-lg font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                            onChange={handleChange}
                                            required
                                            disabled={isProcessing}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="address" className="text-lg font-medium text-gray-700">
                                            Delivery Address
                                        </label>
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            placeholder="Enter your delivery address"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                            onChange={handleChange}
                                            required
                                            disabled={isProcessing}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-lg font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                            onChange={handleChange}
                                            required
                                            disabled={isProcessing}
                                        />
                                    </div>
                                </div>

                                {/* Payment Details Section */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-gray-700">Payment Gateway</h3>

                                    <div className="space-y-2">
                                        <label htmlFor="paymentMethod" className="text-lg font-medium text-gray-700">
                                            Payment Method
                                        </label>
                                        <select
                                            id="paymentMethod"
                                            name="paymentMethod"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                            onChange={handleChange}
                                            required
                                            disabled={isProcessing}
                                        >
                                            <option value="">Select Payment Method</option>
                                            <option value="cod">Cash on Delivery</option>
                                            <option value="card">Credit/Debit Card</option>
                                        </select>
                                    </div>

                                    {formData.paymentMethod === "card" && (
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                placeholder="Card Number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                                onChange={handleChange}
                                                required
                                                disabled={isProcessing}
                                            />
                                            <input
                                                type="text"
                                                name="expiry"
                                                placeholder="Expiry Date (MM/YY)"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                                onChange={handleChange}
                                                required
                                                disabled={isProcessing}
                                            />
                                            <input
                                                type="text"
                                                name="cvv"
                                                placeholder="CVV"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition"
                                                onChange={handleChange}
                                                required
                                                disabled={isProcessing}
                                            />
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-500 transition"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </form>
                        </div>

                    )}
                </>
            ) : (
                <div className=" inset-0 flex items-center justify-center bg-white">
                    <div className="space-y-8 max-w-lg text-center p-6 rounded-lg shadow-lg">
                        <h1 className="text-5xl font-bold text-green-500 animate-pulse">
                            🎉 Order Successful 🎉
                        </h1>
                        <p className="text-xl text-gray-700">
                            Thank you for your purchase, <span className="font-semibold">{formData.name}</span>!
                        </p>
                        <p className="text-lg text-gray-600">
                            Your order will be delivered to <strong>{formData.address}</strong>.
                        </p>
                        <p className="text-lg text-gray-600">
                            Celebrate with us! A special discount is waiting for your next purchase.
                        </p>
                        <div className="mt-8">
                            <Link href="/">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-500 transition"
                                >
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Checkout;