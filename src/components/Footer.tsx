import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Users, Hash } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dolphin-900 pt-16 border-t border-slate-800 text-slate-400 font-sans">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-heading text-white tracking-tight mb-4 inline-block">
                            Dolphin<span className="text-blue-500">Mobile</span>
                        </Link>
                        <p className="mt-2 text-sm leading-relaxed">
                            Premium electronics store providing quality products and best prices since 2011. Your trusted local electronics business.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Globe size={20} /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Users size={20} /></a>
                            <a href="#" className="hover:text-blue-300 transition-colors"><Hash size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Store Categories</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products" className="hover:text-white transition-colors">Smartphones</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Computers & Monitors</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Audio & Home</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                <span>5/208 A, Kollampattarai Street, Paramakudi, Ramanathapuram, TN - 623707</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <span>+91 8870551513</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <span>dolphinmobiles90@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="bg-dolphin-800 py-6 border-t border-slate-800 text-sm">
                <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 Dolphin Mobile. All Rights Reserved.</p>
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        <Link href="/shipping-policy" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500">Shipping Policy</Link>
                        <Link href="/cancellation-refund" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500">Cancellation & Refund</Link>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
