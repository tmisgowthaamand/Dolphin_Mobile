'use client';
import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Truck, ShoppingCart, MessageCircle, X, ChevronRight, CheckCircle2, ShieldCheck, Headphones, BadgeCheck, Tag } from 'lucide-react';
import { products } from '../../../data/products';
import { useCurrencyStore } from '../../../store/currencyStore';
import { useCartStore } from '../../../store/cartStore';
import { formatPrice } from '../../../utils/currencyFormatter';
import { useRouter } from 'next/navigation';
import ProductCard from '../../../components/ProductCard';

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const product = products.find(p => p.id === resolvedParams.id);
    const { currency, rates } = useCurrencyStore();
    const addItem = useCartStore(state => state.addItem);
    const [activeTab, setActiveTab] = useState('description');
    const [isZoomed, setIsZoomed] = useState(false);
    const [added, setAdded] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center pt-20"><h1 className="text-2xl font-bold">Product not found</h1></div>;
    }

    // Build the image gallery: use the product's gallery if present, otherwise just the main image.
    const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    const currentImage = galleryImages[activeImage] ?? product.image;

    const handleAddToCart = () => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const handleBuyNow = () => {
        addItem(product);
        router.push('/checkout');
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Hello Dolphin Mobile, I am interested in buying ${product.name}.`);
        window.open(`https://wa.me/918870551513?text=${message}`, '_blank');
    };

    // Quick highlights: first four specifications
    const highlights = product.specifications.slice(0, 4);

    // Related products: same brand first, then fill from others, excluding current
    const sameBrand = products.filter(p => p.id !== product.id && p.brand === product.brand);
    const others = products.filter(p => p.id !== product.id && p.brand !== product.brand);
    const relatedProducts = [...sameBrand, ...others].slice(0, 4);

    const trustItems = [
        { icon: <ShieldCheck size={20} />, title: 'Genuine Product', desc: 'Quality checked' },
        { icon: <Truck size={20} />, title: 'Fast Delivery', desc: 'Across Tamil Nadu' },
        { icon: <Headphones size={20} />, title: 'Expert Support', desc: 'Friendly help' },
        { icon: <BadgeCheck size={20} />, title: 'Best Price', desc: 'Trusted since 2011' },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 flex-wrap">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
                    <ChevronRight size={14} />
                    <span className="text-slate-200">{product.name}</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div
                            className="glass-dark rounded-3xl overflow-hidden aspect-square cursor-zoom-in group border border-slate-700/50 relative"
                            onClick={() => setIsZoomed(true)}
                        >
                            <Image
                                src={currentImage}
                                alt={product.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 600px"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30 backdrop-blur">
                                <CheckCircle2 size={14} />
                                {product.stock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Thumbnail gallery */}
                        {galleryImages.length > 1 && (
                            <div className="grid grid-cols-4 gap-3 mt-4">
                                {galleryImages.map((img, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setActiveImage(i)}
                                        aria-label={`View image ${i + 1}`}
                                        className={`relative aspect-square rounded-xl overflow-hidden border transition-colors ${
                                            activeImage === i ? 'border-blue-500 ring-2 ring-blue-500/40' : 'border-slate-700/50 hover:border-blue-400/60'
                                        }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} thumbnail ${i + 1}`}
                                            fill
                                            sizes="120px"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <div className="inline-block bg-blue-900/40 text-blue-400 font-bold px-3 py-1 rounded-full text-sm w-max mb-4">
                            {product.brand}
                        </div>
                        <h1 className="text-4xl font-bold font-heading mb-4 text-white">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-sm font-bold">
                                <Star size={16} className="fill-amber-400" />
                                <span>{product.rating.toFixed(1)}</span>
                            </div>
                            <span className="text-slate-400 text-sm">({product.reviews} customer reviews)</span>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl font-bold text-white">
                                {formatPrice(product.priceINR, currency, rates)}
                            </span>
                            <span className="inline-flex items-center gap-1 text-green-400 text-sm font-semibold">
                                <Tag size={14} /> Best price guaranteed
                            </span>
                        </div>

                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {highlights.map((spec, i) => (
                                <div key={i} className="flex flex-col p-3 glass-dark rounded-xl border border-slate-700/50">
                                    <span className="text-xs text-slate-400 mb-0.5">{spec.name}</span>
                                    <span className="text-sm text-white font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 p-4 glass-dark rounded-2xl border border-slate-700/50">
                                <Truck className="text-blue-400" />
                                <div>
                                    <h4 className="font-bold text-sm">Fast Delivery</h4>
                                    <p className="text-xs text-slate-400">Available across Tamil Nadu</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                onClick={handleAddToCart}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-colors shadow-lg ${
                                    added ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'
                                }`}
                            >
                                {added ? <CheckCircle2 size={20} /> : <ShoppingCart size={20} />}
                                {added ? 'Added to Cart' : 'Add to Cart'}
                            </motion.button>
                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                onClick={handleBuyNow}
                                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Buy Now
                            </motion.button>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={handleWhatsApp}
                            className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-colors shadow-lg"
                        >
                            <MessageCircle size={20} />
                            WhatsApp Inquiry
                        </motion.button>

                        {/* Trust strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-slate-700/50">
                            {trustItems.map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center mb-1">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-bold text-white">{item.title}</span>
                                    <span className="text-[11px] text-slate-400">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>

                {/* Tabs Section */}
                <div className="glass-dark rounded-3xl p-8 border border-slate-700/50">
                    <div className="flex gap-8 border-b border-slate-700 mb-8 overflow-x-auto">
                        {['description', 'specifications', 'features'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 font-bold text-lg capitalize whitespace-nowrap transition-colors ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[200px]">
                        {activeTab === 'description' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-300 leading-relaxed max-w-3xl">
                                {product.description}
                                <br /><br />
                                All Dolphin Mobile products are thoroughly checked for quality before they reach you. Buy with confidence from our Paramakudi showroom or order online for fast home delivery across Tamil Nadu. Need help choosing? Reach out on WhatsApp and our team will guide you to the right device.
                            </motion.div>
                        )}

                        {activeTab === 'specifications' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-4 max-w-4xl">
                                {product.specifications.map((spec, i) => (
                                    <div key={i} className="flex flex-col p-4 bg-slate-800/50 rounded-xl">
                                        <span className="text-slate-400 text-sm mb-1">{spec.name}</span>
                                        <span className="text-white font-semibold">{spec.value}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'features' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3 max-w-3xl">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">You May Also Like</h2>
                            <Link href="/products" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1">
                                View All <ChevronRight size={16} />
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(rp => (
                                <ProductCard key={rp.id} product={rp} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setIsZoomed(false)}
                    >
                        <button className="absolute top-8 right-8 text-white p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 transition">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative w-full max-w-5xl aspect-square md:aspect-video"
                        >
                            <Image
                                src={currentImage}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
