"use client";
import Link from 'next/link';
import Image from 'next/image';
import socials from '../data/socials.json';

const Footer = () => {
    return (
        <footer className="bg-white/30 border-t border-vibrant-coral/10 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                    <Link href="/" className="relative h-16 w-40 block mx-auto md:mx-0">
                        <Image
                            src="/logo.jpeg"
                            alt="Vandna Logo"
                            fill
                            className="object-contain mix-blend-multiply"
                        />
                    </Link>
                    <p className="mt-4 text-deep-redwood/60 max-w-xs">
                        Handcrafting elegance since generations. Rooted in Indian heritage, designed for the modern home.
                    </p>
                </div>

                <div className="flex gap-8 text-deep-redwood/70">
                    <a href={socials.instagram} target="_blank" className="hover:text-vibrant-coral transition-colors">Instagram</a>
                    <a href={socials.facebook} target="_blank" className="hover:text-vibrant-coral transition-colors">Facebook</a>
                    <a href={socials.whatsapp} target="_blank" className="hover:text-vibrant-coral transition-colors">WhatsApp</a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-deep-redwood/40 text-sm">
                        © 2024 Vandana Brass Showpieces. <br /> All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
