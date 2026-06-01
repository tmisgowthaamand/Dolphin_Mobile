'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ShippingPolicyPage() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="glass-dark rounded-3xl p-8 md:p-12 border border-slate-700/50">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold mb-6 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold font-heading mb-2 text-white">Shipping Policy</h1>
                    <p className="text-sm text-slate-400 mb-8">Last updated: January 2026</p>

                    <div className="prose prose-invert max-w-none text-slate-300">
                        <p>At Dolphin Mobile, we are committed to delivering your mobiles, laptops, and electronics safely and on time. This policy outlines our shipping procedures, timelines, and charges.</p>

                        <h3 className="text-white mt-8 mb-4">Order Processing Time</h3>
                        <p>All orders are processed within 1-2 business days (Monday to Saturday, excluding public holidays) after your order is confirmed. You will receive a notification with tracking information once your order has been dispatched from our Paramakudi showroom.</p>

                        <h3 className="text-white mt-8 mb-4">Delivery Timeline</h3>
                        <p>Standard delivery within India typically takes 3-5 business days from the date of dispatch. Delivery times may vary based on your location:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Within Tamil Nadu: 2-3 business days</li>
                            <li>Metro &amp; Tier 2 Cities: 3-5 business days</li>
                            <li>Remote Areas: 5-7 business days</li>
                        </ul>
                        <p>These are estimated delivery times and may be affected by factors beyond our control, such as weather conditions, courier delays, or local holidays.</p>

                        <h3 className="text-white mt-8 mb-4">Shipping Charges</h3>
                        <p>Shipping charges are calculated at checkout based on the weight of your order and delivery location. Our rates are competitive and transparent:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Orders above ₹2,000 qualify for FREE shipping across India</li>
                            <li>Orders below ₹2,000 incur a flat shipping fee shown at checkout</li>
                            <li>Bulk or institutional orders may have special shipping arrangements - please contact us for details</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Order Tracking</h3>
                        <p>Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this number to monitor your shipment on the courier partner&apos;s website. If you have any questions about your shipment, please contact our customer support team.</p>

                        <h3 className="text-white mt-8 mb-4">Delivery Partners</h3>
                        <p>We work with reliable courier partners including Blue Dart, DTDC, and India Post to ensure safe and timely delivery. The courier partner is selected based on your location and order specifications.</p>

                        <h3 className="text-white mt-8 mb-4">Delivery Attempts</h3>
                        <p>Our courier partners typically make 2-3 delivery attempts. If delivery is unsuccessful after multiple attempts, the package will be returned to our facility. In such cases, we will contact you to arrange redelivery, which may incur additional shipping charges.</p>

                        <h3 className="text-white mt-8 mb-4">Damaged or Lost Shipments</h3>
                        <p>While we take utmost care in packaging your orders, if your shipment arrives damaged or goes missing during transit, please contact us within 48 hours of the expected delivery date. We will work with our courier partners to resolve the issue and arrange a replacement or refund as appropriate. Please save all packaging materials before filing a claim.</p>

                        <h3 className="text-white mt-8 mb-4">Address Changes</h3>
                        <p>If you need to change your delivery address after placing an order, please contact us immediately. We can modify the address only if the order has not yet been dispatched. Once dispatched, address changes must be coordinated directly with the courier partner using your tracking number.</p>

                        <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                        <p>For any shipping-related queries, please reach out to us:</p>
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
