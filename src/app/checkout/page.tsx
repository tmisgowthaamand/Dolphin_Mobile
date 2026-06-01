'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Smartphone, CreditCard, Banknote, Loader2 } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useCurrencyStore } from '../../store/currencyStore';
import { formatPrice } from '../../utils/currencyFormatter';
import Link from 'next/link';
import Image from 'next/image';

const paymentMethods = [
    { id: 'UPI', label: 'UPI', desc: 'GPay, PhonePe, Paytm', icon: <Smartphone size={20} /> },
    { id: 'Credit/Debit Card', label: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay', icon: <CreditCard size={20} /> },
    { id: 'Cash on Delivery', label: 'Cash on Delivery', desc: 'Pay when delivered', icon: <Banknote size={20} /> },
];

export default function CheckoutPage() {
    const { items, getSubtotalINR, clearCart } = useCartStore();
    const { currency, rates } = useCurrencyStore();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPlacing, setIsPlacing] = useState(false);
    const [orderId, setOrderId] = useState<number | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('UPI');

    // Guard against the persisted (localStorage) cart not being available during SSR.
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const subtotalINR = getSubtotalINR();
    const gstINR = subtotalINR * 0.18;
    const deliveryINR = subtotalINR > 0 ? 500 : 0;
    const totalINR = subtotalINR + gstINR + deliveryINR;

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        if (isPlacing) return;
        setIsPlacing(true);
        setOrderId(Math.floor(100000 + Math.random() * 900000));
        // Small delay for feedback, then confirm and clear the cart.
        setTimeout(() => {
            setIsSuccess(true);
            clearCart();
        }, 600);
    };

    // While the client store is hydrating, show a lightweight loader to avoid a false "empty cart" flash.
    if (!mounted) {
        return (
            <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
                <Loader2 size={40} className="text-blue-500 animate-spin" />
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-dark rounded-3xl p-10 max-w-lg w-full text-center border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                        className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle2 size={48} />
                    </motion.div>
                    <h1 className="text-3xl font-bold font-heading mb-4 text-white">Order Confirmed!</h1>
                    <p className="text-slate-300 mb-2">
                        Thank you for shopping with Dolphin Mobile. Your order <strong className="text-white">#{orderId}</strong> has been placed successfully and will be delivered shortly.
                    </p>
                    <p className="text-slate-400 text-sm mb-8">Payment method: <span className="text-blue-400 font-semibold">{paymentMethod}</span></p>
                    <Link href="/products" className="inline-flex bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors items-center justify-center w-full shadow-lg">
                        Continue Shopping
                    </Link>
                </motion.div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-heading mb-4 text-white">Your cart is empty</h1>
                    <p className="text-slate-400 mb-6">Add some products before checking out.</p>
                    <Link href="/products" className="inline-flex bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors">Go back to products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <h1 className="text-4xl font-bold font-heading mb-10 text-white">Checkout</h1>

                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 space-y-8">
                        {/* Billing Details */}
                        <div className="glass-dark rounded-3xl p-8 border border-slate-700/50">
                            <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Billing &amp; Shipping Details</h2>
                            <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">First Name</label>
                                        <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input required type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                    <input required type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Full Shipping Address</label>
                                    <textarea required rows={3} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                                </div>

                                <h3 className="text-lg font-bold mt-8 mb-4">Payment Method</h3>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {paymentMethods.map((method) => {
                                        const isActive = paymentMethod === method.id;
                                        return (
                                            <button
                                                type="button"
                                                key={method.id}
                                                onClick={() => setPaymentMethod(method.id)}
                                                aria-pressed={isActive}
                                                className={`rounded-xl border p-4 text-left transition-all ${
                                                    isActive
                                                        ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-600/10'
                                                        : 'border-slate-700 bg-slate-800/50 hover:border-blue-400/60'
                                                }`}
                                            >
                                                <div className={`flex items-center justify-between mb-2 ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>
                                                    {method.icon}
                                                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-blue-500' : 'border-slate-600'}`}>
                                                        {isActive && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                                                    </span>
                                                </div>
                                                <div className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-200'}`}>{method.label}</div>
                                                <div className="text-xs text-slate-400 mt-0.5">{method.desc}</div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="glass-dark rounded-3xl p-8 border border-slate-700/50 sticky top-28">
                            <h3 className="text-xl font-bold font-heading mb-6 border-b border-slate-700 pb-4">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map(item => (
                                    <div key={item.product.id} className="flex justify-between items-center gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-12 h-12 bg-slate-800 rounded-lg overflow-hidden shrink-0 hidden sm:block">
                                                <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm line-clamp-1">{item.product.name}</p>
                                                <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-white whitespace-nowrap">
                                            {formatPrice(item.product.priceINR * item.quantity, currency, rates)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6 pt-4 border-t border-slate-700 text-sm">
                                <div className="flex justify-between text-slate-300">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-white">{formatPrice(subtotalINR, currency, rates)}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>GST (18%)</span>
                                    <span className="font-semibold text-white">{formatPrice(gstINR, currency, rates)}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Delivery Charges</span>
                                    <span className="font-semibold text-white">{formatPrice(deliveryINR, currency, rates)}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Payment Method</span>
                                    <span className="font-semibold text-blue-400">{paymentMethod}</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-700 pt-6 mb-8 mt-6">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-bold text-white">Grand Total</span>
                                    <span className="text-2xl font-bold text-blue-400">{formatPrice(totalINR, currency, rates)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={isPlacing}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20 group"
                            >
                                {isPlacing ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Placing Order...
                                    </>
                                ) : (
                                    <>
                                        Place Order
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
