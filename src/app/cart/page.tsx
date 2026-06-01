'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useCurrencyStore } from '../../store/currencyStore';
import { formatPrice } from '../../utils/currencyFormatter';

export default function CartPage() {
    const { items, removeItem, updateQuantity, getSubtotalINR } = useCartStore();
    const { currency, rates } = useCurrencyStore();

    const subtotalINR = getSubtotalINR();
    const gstINR = subtotalINR * 0.18; // 18% GST
    const deliveryINR = subtotalINR > 0 ? 500 : 0; // Flat delivery 500 INR
    const totalINR = subtotalINR + gstINR + deliveryINR;

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <h1 className="text-4xl font-bold font-heading mb-10 text-white flex items-center gap-4">
                    <ShoppingBag size={36} className="text-blue-500" />
                    Shopping Cart
                </h1>

                {items.length === 0 ? (
                    <div className="glass-dark rounded-3xl p-16 text-center border border-slate-700/50">
                        <h2 className="text-2xl font-bold mb-4 text-white">Your cart is empty</h2>
                        <p className="text-slate-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
                        <Link href="/products" className="inline-flex glass border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-colors items-center gap-2 group mx-auto">
                            Start Shopping
                            <ArrowRight size={20} className="group-hover:translate-x-1" />
                        </Link>
                    </div>
                ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div 
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-dark rounded-2xl p-4 flex gap-4 md:gap-6 items-center border border-slate-700/50"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-xl overflow-hidden shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  
                  <div className="grow flex flex-col justify-center h-full">
                    <Link href={`/products/${item.product.id}`}>
                      <h3 className="font-bold text-lg md:text-xl text-white hover:text-blue-400 transition-colors line-clamp-1">{item.product.name}</h3>
                    </Link>
                    <div className="text-slate-400 text-sm mb-2">{item.product.brand}</div>
                    <div className="text-blue-400 font-bold mb-2">
                      {formatPrice(item.product.priceINR, currency, rates)}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between h-full py-2 gap-4">
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-slate-500 hover:text-red-500 transition-colors p-2"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>
                    
                    <div className="flex items-center gap-3 bg-slate-800 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 rounded transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 rounded transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="glass-dark rounded-3xl p-8 border border-slate-700/50 sticky top-28">
                <h3 className="text-xl font-bold font-heading mb-6 border-b border-slate-700 pb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">{formatPrice(subtotalINR, currency, rates)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>GST (18%)</span>
                    <span className="font-semibold text-white">{formatPrice(gstINR, currency, rates)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Delivery</span>
                    <span className="font-semibold text-white">{formatPrice(deliveryINR, currency, rates)}</span>
                  </div>
                </div>
                
                <div className="border-t border-slate-700 pt-6 mb-8">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-blue-400">{formatPrice(totalINR, currency, rates)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20 group">
                  Proceed to Checkout
                  <ArrowRight size={20} className="group-hover:translate-x-1" />
                </Link>
                
                <div className="mt-4 text-center">
                  <Link href="/products" className="text-sm text-slate-400 hover:text-white transition-colors">
                    or Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
    </div >
  );
}
