"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-watercolor-coral/10 py-4 px-6 md:px-12 flex justify-between items-center">
            <Link href="/" className="relative h-12 w-32">
                <Image
                    src="/logo.jpeg"
                    alt="Vandna Logo"
                    fill
                    className="object-contain mix-blend-multiply"
                />
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                <Link href="#collection" className="text-deep-redwood/80 hover:text-vibrant-coral transition-colors">Collection</Link>
                <Link href="#about" className="text-deep-redwood/80 hover:text-vibrant-coral transition-colors">Heritage</Link>
                <Link href="#contact" className="text-deep-redwood/80 hover:text-vibrant-coral transition-colors">Contact</Link>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vibrant-coral text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-vibrant-coral/20 hover:animate-glow transition-all"
            >
                Shop Now
            </motion.button>
        </nav>
    );
};

export default Navbar;
