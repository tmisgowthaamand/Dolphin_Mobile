'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Scroll to the top whenever the route changes.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

    // Show the button once the user scrolls down a bit.
    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 300);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollUp}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                    className="fixed bottom-24 right-6 z-50 p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_4px_30px_rgba(37,99,235,0.4)] transition-colors"
                >
                    <ArrowUp size={26} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
