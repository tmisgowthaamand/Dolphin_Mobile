'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="glass-dark rounded-3xl p-8 md:p-12 border border-slate-700/50">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold mb-6 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold font-heading mb-2 text-white">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 mb-8">Last updated: January 2026</p>

                    <div className="prose prose-invert max-w-none text-slate-300">
                        <p>At Dolphin Mobile, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or services.</p>

                        <h3 className="text-white mt-8 mb-4">Information We Collect</h3>
                        <p>We collect information that you provide directly to us and information that is automatically collected when you use our website:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong className="text-white">Account Information:</strong> Name, email address, and phone number when you contact us or place an order</li>
                            <li><strong className="text-white">Order Information:</strong> Shipping address, billing address, and payment details when you make a purchase</li>
                            <li><strong className="text-white">Communication Information:</strong> Details you provide when you reach out to us or submit enquiries</li>
                            <li><strong className="text-white">Automatically Collected:</strong> IP address, browser type, device information, pages visited, and general location</li>
                            <li><strong className="text-white">Cookies:</strong> Information collected through cookies and similar tracking technologies</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">How We Use Your Information</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To process and fulfill your orders and provide shipping updates</li>
                            <li>To respond to your enquiries and provide customer support</li>
                            <li>To send important updates about your orders and our services</li>
                            <li>To send promotional offers about new products and deals (you can opt out anytime)</li>
                            <li>To analyze usage patterns and improve our website and services</li>
                            <li>To detect and prevent fraud and unauthorized access</li>
                            <li>To comply with applicable laws and regulations</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">How We Share Your Information</h3>
                        <p>We do not sell, rent, or trade your personal information. We may share it only in these circumstances:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong className="text-white">Service Providers:</strong> With trusted partners who help us operate (shipping partners, payment processors, hosting providers), who are obligated to protect your information</li>
                            <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                            <li><strong className="text-white">With Your Consent:</strong> When you explicitly agree to share your information</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Data Security</h3>
                        <p>We implement appropriate technical and organizational measures to protect your information, including SSL encryption, restricted server access, and PCI-DSS compliant payment gateways. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                        <h3 className="text-white mt-8 mb-4">Cookies and Tracking Technologies</h3>
                        <p>We use essential, analytics, marketing, and preference cookies to improve your browsing experience. You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.</p>

                        <h3 className="text-white mt-8 mb-4">Data Retention</h3>
                        <p>We retain order information for the period required by tax and accounting regulations, and other data only as long as necessary for the purposes described in this policy or until you request deletion.</p>

                        <h3 className="text-white mt-8 mb-4">Your Rights and Choices</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Request a copy of the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete information</li>
                            <li>Request deletion of your personal information (subject to legal obligations)</li>
                            <li>Unsubscribe from marketing communications at any time</li>
                        </ul>
                        <p>To exercise these rights, please contact us at dolphinmobiles90@gmail.com.</p>

                        <h3 className="text-white mt-8 mb-4">Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before providing any personal information.</p>

                        <h3 className="text-white mt-8 mb-4">Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>

                        <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                        <ul className="list-none pl-0 space-y-1">
                            <li>Email: dolphinmobiles90@gmail.com</li>
                            <li>Phone: +91 8870551513</li>
                            <li>Address: 5/208 A, Kollampattarai Street, Paramakudi, Ramanathapuram, Tamil Nadu – 623707</li>
                            <li>Business Hours: Monday to Saturday, 10:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
