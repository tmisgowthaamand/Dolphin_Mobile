'use client';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Award, HeartHandshake, HeadphonesIcon, Gift, Truck,
    Target, Eye, Smartphone, Laptop, Printer, Speaker, MapPin, Clock, Phone, Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const reasons = [
        { title: "Genuine Products", desc: "100% authentic, quality-checked devices", icon: <ShieldCheck size={32} /> },
        { title: "Best Pricing", desc: "Unbeatable prices in Ramanathapuram area", icon: <Award size={32} /> },
        { title: "Trusted Service", desc: "Serving happily since 2011", icon: <HeartHandshake size={32} /> },
        { title: "Fast Support", desc: "Dedicated customer service team", icon: <HeadphonesIcon size={32} /> },
        { title: "Secure Payments", desc: "100% safe & reliable transactions", icon: <Gift size={32} /> },
        { title: "Quick Delivery", desc: "Fastest delivery network in Tamil Nadu", icon: <Truck size={32} /> },
    ];

    const journey = [
        { year: "2011", title: "Business Started", desc: "Opened our doors in Paramakudi with a mission to bring quality electronics to our local community." },
        { year: "2013", title: "Expanded Mobile Sales", desc: "Became a premier destination for the latest smartphone releases in the region." },
        { year: "2016", title: "Electronics Accessories Added", desc: "Diversified our catalog with premium accessories, chargers, and PC parts." },
        { year: "2019", title: "Premium Smartphones Introduced", desc: "Stocked top-tier brands like Apple, Samsung, Vivo, OPPO, and Realme." },
        { year: "2022", title: "Expanded Product Categories", desc: "Added home theatre systems, monitors, professional printers, and computers." },
        { year: "2026", title: "Modern Ecommerce Platform", desc: "Launched our online store to serve customers across all of Tamil Nadu." },
    ];

    const offerings = [
        { title: "Smartphones", desc: "Latest 5G phones from Apple, Vivo, OPPO, Realme & POCO", icon: <Smartphone size={28} /> },
        { title: "Laptops & Computers", desc: "Lenovo, HP, Sony VAIO laptops and desktop builds", icon: <Laptop size={28} /> },
        { title: "Printers & Office", desc: "Canon, Epson and Xerox printing solutions", icon: <Printer size={28} /> },
        { title: "Audio & Home", desc: "Home theatre systems, speakers and neckbands", icon: <Speaker size={28} /> },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">

            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-7xl mb-24 text-center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="inline-block bg-blue-900/40 text-blue-400 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">About Dolphin Mobile</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
                        Trusted Electronics Store <br />
                        <span className="text-gradient">Since 2011</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Providing quality electronics, smartphones, and customer satisfaction for over a decade in Paramakudi. We believe in delivering technology that empowers everyday life.
                    </p>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-700/50"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80"
                            alt="Smartphones, laptops and electronics gadgets"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-dolphin-900/80 to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold font-heading mb-6 text-white">Our Story</h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                Dolphin Mobile began in 2011 as a small mobile shop in Paramakudi, Ramanathapuram, founded by <strong className="text-white">M Prapakar</strong> with a simple belief: people in our town deserve genuine products, honest prices, and friendly service close to home.
                            </p>
                            <p>
                                What started with a single counter selling phones has grown into a complete electronics destination. Today we offer smartphones, laptops, computers, monitors, printers, home theatre systems, and accessories, all hand-picked for quality and backed by real after-sales support.
                            </p>
                            <p>
                                Over the years, thousands of families, students, and businesses across Tamil Nadu have trusted us for their technology needs. As an MSME-registered and GST-compliant business, we take pride in being a reliable local name in a fast-changing industry.
                            </p>
                        </div>
                        <Link href="/products" className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                            Explore Our Products
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark p-8 rounded-3xl border border-slate-700/50"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-6">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-3 text-white">Our Mission</h3>
                        <p className="text-slate-300 leading-relaxed">
                            To make genuine, high-quality electronics accessible and affordable for everyone in Paramakudi and across Tamil Nadu, backed by honest advice and dependable after-sales service.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-dark p-8 rounded-3xl border border-slate-700/50"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-6">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-3 text-white">Our Vision</h3>
                        <p className="text-slate-300 leading-relaxed">
                            To be the most trusted electronics brand in the region, blending the personal touch of a local store with the convenience of modern online shopping and delivery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4 text-white">What We Offer</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">A complete range of electronics under one trusted roof.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-dark p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-colors text-center"
                        >
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-slate-900/50 py-24 mb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold font-heading text-center mb-16 text-white">Our Journey</h2>

                    <div className="relative border-l-2 border-slate-700 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
                        {journey.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="hidden md:block w-[45%]" />
                                <div className="absolute left-[-9px] md:relative md:left-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
                                <div className="md:w-[45%] glass-dark p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                                    <span className="text-blue-400 font-bold mb-2 block">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Center Line for Desktop */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-700 -translate-x-1/2 z-0" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4 text-white">Why Choose Us</h2>
                    <p className="text-slate-400">Discover what makes Dolphin Mobile the preferred choice.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-2"
                        >
                            <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Visit Our Store */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="glass-dark rounded-3xl p-10 border border-slate-700/50">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Visit Our Store</h4>
                                <p className="text-slate-400 text-sm">5/208 A, Kollampattarai Street, Paramakudi, Ramanathapuram, Tamil Nadu – 623707</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center">
                                <Clock size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Business Hours</h4>
                                <p className="text-slate-400 text-sm">Monday to Saturday<br />10:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Call / WhatsApp</h4>
                                <p className="text-slate-400 text-sm">+91 8870551513<br />dolphinmobiles90@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Owner / Team */}
            <section className="container mx-auto px-6 max-w-5xl mb-24">
                <div className="glass-dark rounded-3xl p-10 border border-slate-700/50 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center mb-6">
                        <Users size={36} />
                    </div>
                    <h2 className="text-2xl font-bold font-heading mb-3 text-white">Meet the Owner</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        <strong className="text-white">M Prapakar</strong> has personally led Dolphin Mobile since 2011. His hands-on approach, product knowledge, and commitment to fair dealing are the reason customers keep coming back, and bring their friends and family with them.
                    </p>
                </div>
            </section>

            {/* Documents */}
            <section className="container mx-auto px-6 max-w-5xl">
                <div className="glass-dark rounded-3xl p-10 border border-slate-700/50 text-center">
                    <h2 className="text-2xl font-bold font-heading mb-8 text-white">Our Certifications &amp; Business Details</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'GST Number', value: '33GOZPP2643D1ZK' },
                            { label: 'MSME Certified', value: 'Verified' },
                            { label: 'Aadhaar Verified', value: 'Verified' },
                            { label: 'Business Owner', value: 'M Prapakar' }
                        ].map((doc, idx) => (
                            <div key={idx} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                <div className="text-sm text-slate-400 mb-2">{doc.label}</div>
                                <div className="font-bold text-white leading-tight">{doc.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
