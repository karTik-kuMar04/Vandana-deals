"use client";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden watercolor-gradient px-6">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}></div>

            <div className="relative z-10 text-center max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-vibrant-coral uppercase tracking-[0.3em] font-semibold mb-4"
                >
                    Royal Handcrafted Legacy
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-serif font-bold primary-text mb-6 leading-tight"
                >
                    Timeless Brass.. <br /> Eternal Devotion.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-deep-redwood/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                >
                    Elevate your sacred spaces with our masterfully crafted brass showpieces, where every curve tells a story of Indian heritage and spiritual elegance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#collection" className="bg-vibrant-coral text-white px-10 py-4 rounded-xl font-bold text-lg hover:animate-glow transition-all text-center">
                        Explore Collection
                    </a>
                    <a href="#contact" className="border border-vibrant-coral/50 text-vibrant-coral px-10 py-4 rounded-xl font-bold text-lg hover:bg-vibrant-coral/10 transition-all text-center">
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-96 h-96 border border-vibrant-coral/10 rounded-full hidden md:block"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-64 h-64 border border-vibrant-coral/10 rounded-full hidden md:block"
            />
        </section>
    );
};

export default Hero;
