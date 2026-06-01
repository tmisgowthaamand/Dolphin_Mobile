'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, ArrowLeft, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import CurrencySwitcher from './CurrencySwitcher';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const cartItemsCount = useCartStore((state) => state.getTotalItems());

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showBackButton = pathname.startsWith('/products/') || ['/cart', '/checkout'].includes(pathname) || pathname.includes('-policy');

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      {/* Top info bar: phone (left) + GST (right) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="hidden md:block overflow-hidden border-b border-white/10 mb-4"
          >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between text-xs text-slate-300 pb-3">
              <a href="tel:+918870551513" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={14} className="text-blue-400" />
                +91 8870551513
              </a>
              <span className="flex items-center gap-2">
                <FileText size={14} className="text-blue-400" />
                GST No: 33GOZPP2643D1ZK
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button onClick={() => router.back()} className="text-white hover:text-blue-400 transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <Link href="/" className="text-2xl font-bold font-heading text-white tracking-tight">
            Dolphin<span className="text-blue-500">Mobile</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-white hover:underline underline-offset-8 decoration-blue-500 decoration-2 transition-all">Home</Link>
          <Link href="/products" className="text-slate-300 hover:text-white hover:underline underline-offset-8 decoration-blue-500 decoration-2 transition-all">Products</Link>
          <Link href="/about" className="text-slate-300 hover:text-white hover:underline underline-offset-8 decoration-blue-500 decoration-2 transition-all">About Us</Link>
          <Link href="/contact" className="text-slate-300 hover:text-white hover:underline underline-offset-8 decoration-blue-500 decoration-2 transition-all">Contact Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition-colors hidden sm:block">
            <Search size={22} />
          </button>
          <CurrencySwitcher />
          
          <Link href="/cart" className="relative text-slate-300 hover:text-white transition-colors">
            <ShoppingCart size={22} />
            {mounted && cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>

          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900 border-l border-slate-800 z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium">
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-slate-300 hover:text-blue-400">Home</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/products" className="text-slate-300 hover:text-blue-400">Products</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="text-slate-300 hover:text-blue-400">About Us</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="text-slate-300 hover:text-blue-400">Contact Us</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
