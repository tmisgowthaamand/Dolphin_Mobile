'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Eye, Check } from 'lucide-react';
import { Product } from '../data/products';
import { useCurrencyStore } from '../store/currencyStore';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../utils/currencyFormatter';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { currency, rates } = useCurrencyStore();
  const addItem = useCartStore(state => state.addItem);
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-dark rounded-2xl overflow-hidden group hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-shadow border border-slate-700/50 hover:border-blue-500/50 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-slate-800">
        <Link href={`/products/${product.id}`} className="absolute inset-0 block">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-blue-400 border border-blue-900/50">
          {product.brand}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="text-lg font-bold font-heading line-clamp-1 group-hover:text-blue-400 transition-colors">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-bold shrink-0">
            <Star size={12} className="fill-amber-400" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm line-clamp-2 mb-4 grow">{product.description}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
          <div className="font-bold text-xl text-white">
            {formatPrice(product.priceINR, currency, rates)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-colors ${
              added ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {added ? <Check size={16} /> : <ShoppingCart size={16} />}
            {added ? 'Added' : 'Add'}
          </motion.button>
          <Link
            href={`/products/${product.id}`}
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            <Eye size={16} />
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
