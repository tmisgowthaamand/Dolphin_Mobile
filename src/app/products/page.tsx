'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Laptop, MonitorSmartphone, Printer, Speaker, Cpu, BatteryCharging, LayoutGrid } from 'lucide-react';
import { products, Product } from '../../data/products';
import ProductCard from '../../components/ProductCard';

type CategoryId =
    | 'all'
    | 'mobiles'
    | 'laptops'
    | 'computers'
    | 'tv'
    | 'audio'
    | 'printers'
    | 'power';

// Derive a category for a product from its name and brand.
function getCategory(product: Product): Exclude<CategoryId, 'all'> {
    const text = `${product.name} ${product.brand}`.toLowerCase();

    if (/(iphone|smartphone|poco|vivo|oppo|realme|redmi|samsung|galaxy|5g\b|phone)/.test(text)) {
        return 'mobiles';
    }
    if (/(laptop|thinkpad|vaio|notebook|macbook)/.test(text)) {
        return 'laptops';
    }
    if (/(printer|printing|xerox)/.test(text)) {
        return 'printers';
    }
    if (/(monitor|smart tv|\btv\b|display|led)/.test(text)) {
        return 'tv';
    }
    if (/(neckband|speaker|home theatre|home theater|earbud|headphone|audio|soundbar)/.test(text)) {
        return 'audio';
    }
    if (/(ups|inverter|charger|battery)/.test(text)) {
        return 'power';
    }
    if (/(cpu|desktop|motherboard|development board|cabinet|processor|computer)/.test(text)) {
        return 'computers';
    }
    return 'computers';
}

const categories: { id: CategoryId; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Products', icon: <LayoutGrid size={18} /> },
    { id: 'mobiles', label: 'Mobiles', icon: <Smartphone size={18} /> },
    { id: 'laptops', label: 'Laptops', icon: <Laptop size={18} /> },
    { id: 'computers', label: 'Computers', icon: <Cpu size={18} /> },
    { id: 'tv', label: 'TV & Monitors', icon: <MonitorSmartphone size={18} /> },
    { id: 'audio', label: 'Audio', icon: <Speaker size={18} /> },
    { id: 'printers', label: 'Printers', icon: <Printer size={18} /> },
    { id: 'power', label: 'Power & Accessories', icon: <BatteryCharging size={18} /> },
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

    // Precompute category for every product once.
    const categorized = useMemo(
        () => products.map((p) => ({ product: p, category: getCategory(p) })),
        []
    );

    // Count per category for the badges.
    const counts = useMemo(() => {
        const map: Record<string, number> = { all: products.length };
        categorized.forEach(({ category }) => {
            map[category] = (map[category] || 0) + 1;
        });
        return map;
    }, [categorized]);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'all') return categorized.map((c) => c.product);
        return categorized.filter((c) => c.category === activeCategory).map((c) => c.product);
    }, [activeCategory, categorized]);

    // Only show category tabs that actually have products.
    const visibleCategories = categories.filter((c) => c.id === 'all' || (counts[c.id] || 0) > 0);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
                    >
                        All <span className="text-gradient">Products</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Browse our complete collection of premium mobile devices, computers, components, and accessories.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {visibleCategories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                aria-pressed={isActive}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                                    isActive
                                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                                        : 'glass-dark border-slate-700/50 text-slate-300 hover:border-blue-500/50 hover:text-white'
                                }`}
                            >
                                {cat.icon}
                                {cat.label}
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-700/60 text-slate-300'}`}>
                                    {counts[cat.id] || 0}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Results count */}
                <div className="text-center text-sm text-slate-400 mb-8">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                    {activeCategory !== 'all' && (
                        <> in <span className="text-blue-400 font-semibold">{categories.find((c) => c.id === activeCategory)?.label}</span></>
                    )}
                </div>

                {/* Products Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
