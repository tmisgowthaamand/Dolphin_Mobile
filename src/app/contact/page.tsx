'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, FileText, User } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <section className="container mx-auto px-6 max-w-7xl mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
                >
                    Get in Touch With <span className="text-gradient">Dolphin Mobile</span>
                </motion.h1>
            </section>

            <section className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="glass-dark rounded-3xl p-8 border border-slate-700/50">
                            <h3 className="text-2xl font-bold font-heading mb-8 text-white">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-slate-300">
                                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl"><User size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Owner</h4>
                                        <p>M Prapakar</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300">
                                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl"><Phone size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Phone / WhatsApp</h4>
                                        <p>+91 8870551513</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300">
                                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl"><Mail size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Email Address</h4>
                                        <p>dolphinmobiles90@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300">
                                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl"><MapPin size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Store Address</h4>
                                        <p>5/208 A, Kollampattarai Street,<br />Paramakudi Taluka,<br />Paramakudi, Ramanathapuram,<br />Tamil Nadu – 623707</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300">
                                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl"><FileText size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">GST Number</h4>
                                        <p>33GOZPP2643D1ZK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-8 border border-slate-700/50 space-y-6">
                            <h3 className="text-2xl font-bold font-heading mb-2 text-white">Send us a Message</h3>
                            <p className="text-slate-400 mb-6 text-sm">Fill out the form below and we will get back to you soon.</p>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Your Name</label>
                                <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input required type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                    <input required type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Your Message</label>
                                <textarea required rows={5} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {isSuccess && (
                                <p className="text-green-400 text-center text-sm font-semibold mt-4">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </section>

            {/* Map Section */}
            <section className="container mx-auto px-6 max-w-7xl mt-16">
                <div className="glass-dark p-2 rounded-3xl border border-slate-700/50 overflow-hidden h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d3935.8679092892913!2d78.5855018!3d9.5447195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b013cf8e8f85f57%3A0x7d97bfa00c71a3cc!2sParamakudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700123456789!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '1.25rem' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
