"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-dark-brown/90 backdrop-blur-md border-b border-antique-gold/20 py-4 px-6 md:px-12 flex justify-between items-center">
            <Link href="/" className="relative h-12 w-32">
                <Image
                    src="/logo.jpeg"
                    alt="Vandna Logo"
                    fill
                    className="object-contain"
                />
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                <Link href="#collection" className="text-soft-cream/80 hover:text-antique-gold transition-colors">Collection</Link>
                <Link href="#about" className="text-soft-cream/80 hover:text-antique-gold transition-colors">Heritage</Link>
                <Link href="#contact" className="text-soft-cream/80 hover:text-antique-gold transition-colors">Contact</Link>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-antique-gold text-dark-brown px-6 py-2 rounded-full font-bold shadow-lg shadow-antique-gold/20 hover:animate-glow transition-all"
            >
                Shop Now
            </motion.button>
        </nav>
    );
};

export default Navbar;
