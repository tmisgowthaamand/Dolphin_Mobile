'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CancellationRefundPage() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="glass-dark rounded-3xl p-8 md:p-12 border border-slate-700/50">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold mb-6 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold font-heading mb-2 text-white">Cancellation &amp; Refund Policy</h1>
                    <p className="text-sm text-slate-400 mb-8">Last updated: January 2026</p>

                    <div className="prose prose-invert max-w-none text-slate-300">
                        <p>At Dolphin Mobile, customer satisfaction is our priority. We understand that sometimes you may need to cancel an order or request a refund. This policy outlines the terms and conditions for cancellations and refunds.</p>

                        <h3 className="text-white mt-8 mb-4">Order Cancellation</h3>
                        <p>You can cancel your order under the following conditions:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong className="text-white">Before Dispatch:</strong> Orders can be cancelled free of charge within 12 hours of placing the order, provided they have not been dispatched.</li>
                            <li><strong className="text-white">After Dispatch:</strong> Once an order has been dispatched, it cannot be cancelled. However, you may refuse delivery and the order will be returned to us, subject to our return policy.</li>
                        </ul>
                        <p>To cancel an order, please contact us immediately at dolphinmobiles90@gmail.com or call +91 8870551513 with your order number.</p>

                        <h3 className="text-white mt-8 mb-4">Return Policy</h3>
                        <p>We accept returns under the following conditions:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Products must be unused and in their original sealed packaging with all accessories</li>
                            <li>Returns must be initiated within 7 days of delivery</li>
                            <li>Products must be in resalable condition with all original tags, labels, and seals intact</li>
                            <li>Activated software, opened SIM cards, and used consumables are non-returnable</li>
                            <li>Bulk or institutional orders may have different return terms - please contact us for details</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">How to Initiate a Return</h3>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Contact our customer support team within 7 days of receiving your order</li>
                            <li>Provide your order number and reason for return</li>
                            <li>Our team will review your request and provide return instructions if approved</li>
                            <li>Pack the items securely in their original packaging</li>
                            <li>Ship the items back to the address provided by our team</li>
                        </ol>
                        <p>Return shipping costs are the responsibility of the customer unless the return is due to a defect or error on our part.</p>

                        <h3 className="text-white mt-8 mb-4">Refund Process</h3>
                        <p>Once we receive and inspect your returned items, we will process your refund as follows:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Inspection and approval: 2-3 business days after receiving the returned items</li>
                            <li>Refund processing: 5-7 business days after approval</li>
                            <li>Bank credit: 3-5 business days depending on your bank or payment provider</li>
                        </ul>
                        <p>Refunds will be credited to your original payment method. If you paid via Cash on Delivery, we will process a bank transfer to your provided account details.</p>

                        <h3 className="text-white mt-8 mb-4">Damaged or Defective Products</h3>
                        <p>If you receive a damaged or defective product, please notify us within 48 hours of delivery:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Take clear photos of the damaged items and packaging</li>
                            <li>Email the photos to dolphinmobiles90@gmail.com with your order number</li>
                            <li>Our team will review your claim and arrange a free replacement or full refund</li>
                            <li>Return shipping for damaged/defective items will be covered by us</li>
                        </ul>

                        <h3 className="text-white mt-8 mb-4">Wrong Items Delivered</h3>
                        <p>If you receive incorrect items, please contact us immediately. We will arrange for the correct items to be shipped to you at no additional cost and provide instructions for returning the wrong items.</p>

                        <h3 className="text-white mt-8 mb-4">Exchanges</h3>
                        <p>We currently do not offer direct exchanges. If you need a different product, please return the original item for a refund and place a new order for the desired product.</p>

                        <h3 className="text-white mt-8 mb-4">Contact Us</h3>
                        <p>For any questions regarding cancellations, returns, or refunds, please contact us:</p>
                        <ul className="list-none pl-0 space-y-1">
                            <li>Email: dolphinmobiles90@gmail.com</li>
                            <li>Phone: +91 8870551513</li>
                            <li>Business Hours: Monday to Saturday, 10:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
