'use client';
import { useCurrencyStore, CurrencyCode } from '../store/currencyStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
];

export default function CurrencySwitcher() {
    const { currency, setCurrency } = useCurrencyStore();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selected = currencies.find(c => c.code === currency) || currencies[0];

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={"flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 transition-colors"}
            >
                <span className="font-semibold text-blue-400">{selected.symbol}</span>
                <span className="text-sm font-medium">{selected.code}</span>
                <ChevronDown size={14} className={"transition-transform " + (isOpen ? 'rotate-180' : '')} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50"
                    >
                        {currencies.map(curr => (
                            <button
                                key={curr.code}
                                onClick={() => { setCurrency(curr.code as CurrencyCode); setIsOpen(false); }}
                                className={"w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-slate-700 " + (currency === curr.code ? 'bg-slate-700 text-blue-400' : 'text-slate-200')}
                            >
                                <span className="font-bold">{curr.symbol}</span>
                                <span>{curr.code}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
