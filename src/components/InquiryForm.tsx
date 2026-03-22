"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 watercolor-gradient">
            <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-vibrant-coral/10 shadow-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold primary-text mb-4">Bulk Inquiry</h2>
                    <p className="text-deep-redwood/60">Interested in wholesale or custom orders? Reach out to us.</p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-vibrant-coral text-6xl mb-6">✓</div>
                        <h3 className="text-2xl font-serif font-bold text-deep-redwood mb-2">Message Received</h3>
                        <p className="text-deep-redwood/60">We will get back to you within 24 hours.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-8 text-vibrant-coral hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status === 'error' && (
                            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-deep-redwood text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full bg-white/50 border border-vibrant-coral/10 rounded-xl px-4 py-3 text-deep-redwood focus:border-vibrant-coral outline-none transition-all placeholder:text-deep-redwood/30"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-deep-redwood text-sm font-bold mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full bg-white/50 border border-vibrant-coral/10 rounded-xl px-4 py-3 text-deep-redwood focus:border-vibrant-coral outline-none transition-all placeholder:text-deep-redwood/30"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-deep-redwood text-sm font-bold mb-2 uppercase tracking-wider">Message</label>
                            <textarea
                                required
                                rows={4}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="w-full bg-white/50 border border-vibrant-coral/10 rounded-xl px-4 py-3 text-deep-redwood focus:border-vibrant-coral outline-none transition-all resize-none placeholder:text-deep-redwood/30"
                                placeholder="Tell us about your requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-vibrant-coral text-white py-4 rounded-xl font-bold text-lg hover:animate-glow transition-all disabled:opacity-50"
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
