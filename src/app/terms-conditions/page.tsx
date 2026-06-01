'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditionsPage() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="glass-dark rounded-3xl p-8 md:p-12 border border-slate-700/50">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold mb-6 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold font-heading mb-2 text-white">Terms &amp; Conditions</h1>
                    <p className="text-sm text-slate-400 mb-8">Last updated: January 2026</p>

                    <div className="prose prose-invert max-w-none text-slate-300">
                        <p>Welcome to Dolphin Mobile. By accessing and using our website or purchasing our products, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.</p>

                        <h3 className="text-white mt-8 mb-4">Acceptance of Terms</h3>
                        <p>By accessing our website, browsing our products, or placing an order, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and other referenced policies. If you do not agree with any part of these terms, please do not use our website or services.</p>

                        <h3 className="text-white mt-8 mb-4">Use of Website</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>You must be at least 18 years old to make purchases on our website</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                            <li>You must provide accurate, current, and complete information when placing orders</li>
                            <li>You may not use our website for any fraudulent, illegal, or unauthorized purpose</li>
                            <li>You may not attempt to gain unauthorized access to our systems or networks</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Product Information and Availability</h3>
                        <p>We strive to provide accurate product descriptions, images, and specifications. However:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Product colours may vary slightly due to monitor settings and photography lighting</li>
                            <li>Specifications are approximate and may have minor variations between models</li>
                            <li>We reserve the right to discontinue products or change specifications without prior notice</li>
                            <li>Product availability is subject to change, and we cannot guarantee stock levels</li>
                            <li>In case of unavailability, we will notify you and offer alternatives or a full refund</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Pricing and Payments</h3>
                        <p>All prices displayed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Prices are subject to change without prior notice</li>
                            <li>The price applicable at the time of order placement will be honoured</li>
                            <li>We reserve the right to correct pricing errors, even after an order has been placed</li>
                            <li>Payment must be received in full before order dispatch, except for Cash on Delivery orders</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Orders and Order Acceptance</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Order confirmation messages do not constitute acceptance of your order</li>
                            <li>We reserve the right to accept or decline any order at our discretion</li>
                            <li>We may refuse orders that appear fraudulent, suspicious, or violate our policies</li>
                            <li>Acceptance occurs when we dispatch your order and send shipping confirmation</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Shipping and Delivery</h3>
                        <p>Please refer to our Shipping Policy for detailed information. Delivery timelines are estimates and not guaranteed, and we are not liable for delays caused by courier partners, weather, or force majeure events. You must inspect packages upon delivery and report damage within 48 hours.</p>

                        <h3 className="text-white mt-8 mb-4">Returns, Refunds, and Cancellations</h3>
                        <p>Please refer to our Cancellation &amp; Refund Policy for complete details. We reserve the right to refuse returns that do not meet our policy requirements and to process refunds only after inspection of returned items.</p>

                        <h3 className="text-white mt-8 mb-4">Intellectual Property Rights</h3>
                        <p>Website content, design, logos, and trademarks are owned by Dolphin Mobile or used with permission. You may not copy, reproduce, distribute, or create derivative works without written permission.</p>

                        <h3 className="text-white mt-8 mb-4">Limitation of Liability</h3>
                        <p>To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages, and our maximum liability is limited to the amount you paid for the specific products. Brand-new products are covered by their respective manufacturer warranties, where applicable.</p>

                        <h3 className="text-white mt-8 mb-4">Force Majeure</h3>
                        <p>We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, public health emergencies, government actions, transportation disruptions, or technical infrastructure problems.</p>

                        <h3 className="text-white mt-8 mb-4">Governing Law and Jurisdiction</h3>
                        <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ramanathapuram, Tamil Nadu.</p>

                        <h3 className="text-white mt-8 mb-4">Modifications to Terms</h3>
                        <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website, and your continued use after changes constitutes acceptance of the modified terms.</p>

                        <h3 className="text-white mt-8 mb-4">Contact Information</h3>
                        <p>For questions about these Terms and Conditions, please contact us:</p>
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
