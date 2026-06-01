'use client';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Star, ShieldCheck, Truck, Headphones, BadgeCheck, Quote, Smartphone, Monitor, Cpu, Speaker } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  const categories = [
    { title: 'Smartphones', desc: 'Latest flagship & budget phones', icon: <Smartphone size={22} />, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' },
    { title: 'Monitors & Displays', desc: '4K, gaming & professional', icon: <Monitor size={22} />, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80' },
    { title: 'CPUs & Components', desc: 'Build your dream rig', icon: <Cpu size={22} />, image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80' },
    { title: 'Audio & Home', desc: 'Home theatre & speakers', icon: <Speaker size={22} />, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80' },
  ];

  const stats = [
    { value: '14+', label: 'Years of Trust' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '500+', label: 'Products' },
    { value: '4.8★', label: 'Avg. Rating' },
  ];

  const testimonials = [
    { name: 'Karthik R.', role: 'Paramakudi', text: 'Bought my phone here and the service was excellent. Genuine product at the best price in town.' },
    { name: 'Priya S.', role: 'Ramanathapuram', text: 'Great collection of accessories and very helpful staff. They guided me to the right monitor for my work setup.' },
    { name: 'Mohammed A.', role: 'Madurai', text: 'Trusted shop since years. Quick delivery across Tamil Nadu and honest pricing. Highly recommended.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/mesh.svg')] bg-cover opacity-10" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-sm font-medium text-blue-300 mb-6 border border-blue-500/20">
                <BadgeCheck size={16} />
                Trusted Electronics Store Since 2011
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                Premium Mobiles & <br />
                <span className="text-gradient">Electronics</span> at Best Prices
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Explore the latest smartphones, accessories, monitors, CPUs, and home electronics with trusted quality and affordable pricing, delivered across Tamil Nadu from our Paramakudi showroom.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/products" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-2 group">
                  Shop Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="glass-dark hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-2">
                  <PhoneCall size={20} />
                  Contact Us
                </Link>
              </div>

              {/* Hero quick stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {stats.slice(0, 3).map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-3xl font-bold font-heading text-white">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[460px] sm:h-[560px] w-full"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Main hero image frame */}
                <div className="relative w-full max-w-md h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/40">
                  <Image
                    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80"
                    alt="Premium smartphone showcase"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dolphin-900 via-dolphin-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                    <h3 className="font-bold text-xl font-heading text-white mb-1">New Arrivals 2026</h3>
                    <p className="text-sm text-slate-200">Flagship phones & smart electronics in stock now.</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating accent card - top right */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 -right-2 sm:right-0 glass-dark rounded-2xl p-4 border border-white/10 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100% Genuine</div>
                  <div className="text-xs text-slate-400">Authentic Products</div>
                </div>
              </motion.div>

              {/* Floating accent card - bottom left */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 -left-2 sm:left-0 glass-dark rounded-2xl p-4 border border-white/10 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Fast Delivery</div>
                  <div className="text-xs text-slate-400">Across Tamil Nadu</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust / Benefits Strip */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={22} />, title: 'Genuine Products', desc: 'Authentic & quality checked' },
              { icon: <Truck size={22} />, title: 'Fast Delivery', desc: 'Across Tamil Nadu' },
              { icon: <Headphones size={22} />, title: 'Expert Support', desc: 'Friendly local service' },
              { icon: <BadgeCheck size={22} />, title: 'Best Pricing', desc: 'Unbeatable in the region' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Shop by Category</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From the newest smartphones to complete home setups, find exactly what you need.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/products" className="group block rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-colors relative h-64">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dolphin-900 via-dolphin-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/80 backdrop-blur text-white flex items-center justify-center mb-3">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">{cat.title}</h3>
                    <p className="text-sm text-slate-300">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-900/50 relative px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Featured Products</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Discover our most premium and top-selling devices curated just for you.</p>
          </div>

          <FeaturedCarousel products={featuredProducts} />

          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold group">
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="glass-dark rounded-3xl border border-slate-700/50 p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold font-heading text-gradient mb-2">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Why Choose Dolphin Mobile</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A decade of trust, quality, and customer-first service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Genuine Products', desc: '100% authentic, quality-checked devices', icon: <ShieldCheck size={28} /> },
              { title: 'Best Pricing', desc: 'Unbeatable prices in Ramanathapuram and beyond', icon: <BadgeCheck size={28} /> },
              { title: 'Fast Support', desc: 'Quick and reliable customer service every day', icon: <Headphones size={28} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-dark p-8 rounded-2xl text-center border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-blue-900/40 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">What Our Customers Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Real feedback from shoppers across Tamil Nadu.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-dark p-8 rounded-2xl border border-slate-700/50 flex flex-col"
              >
                <Quote size={32} className="text-blue-500/60 mb-4" />
                <p className="text-slate-300 mb-6 grow leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-cyan-400/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to upgrade your tech?</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">Visit our showroom or browse online. Our team is ready to help you find the perfect device at the best price.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/products" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-2 group">
                  Browse Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="glass-dark hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-2">
                  <PhoneCall size={20} />
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
