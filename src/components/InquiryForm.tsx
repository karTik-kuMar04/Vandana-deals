"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 brass-gradient">
            <div className="max-w-4xl mx-auto bg-dark-brown p-8 md:p-12 rounded-3xl border border-antique-gold/20 shadow-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold gold-text mb-4">Bulk Inquiry</h2>
                    <p className="text-soft-cream/60">Interested in wholesale or custom orders? Reach out to us.</p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-antique-gold text-6xl mb-6">✓</div>
                        <h3 className="text-2xl font-serif font-bold text-soft-cream mb-2">Message Received</h3>
                        <p className="text-soft-cream/60">We will get back to you within 24 hours.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-8 text-antique-gold hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-antique-gold text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-black-accent/50 border border-antique-gold/20 rounded-xl px-4 py-3 text-soft-cream focus:border-antique-gold outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-antique-gold text-sm font-bold mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-black-accent/50 border border-antique-gold/20 rounded-xl px-4 py-3 text-soft-cream focus:border-antique-gold outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-antique-gold text-sm font-bold mb-2 uppercase tracking-wider">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-black-accent/50 border border-antique-gold/20 rounded-xl px-4 py-3 text-soft-cream focus:border-antique-gold outline-none transition-all resize-none"
                                placeholder="Tell us about your requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-antique-gold text-dark-brown py-4 rounded-xl font-bold text-lg hover:animate-glow transition-all disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default InquiryForm;
