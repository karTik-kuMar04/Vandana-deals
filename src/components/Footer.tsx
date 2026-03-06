"use client";
import Link from 'next/link';
import Image from 'next/image';
import socials from '../data/socials.json';

const Footer = () => {
    return (
        <footer className="bg-dark-brown border-t border-antique-gold/10 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                    <Link href="/" className="relative h-16 w-40 block mx-auto md:mx-0">
                        <Image
                            src="/logo.jpeg"
                            alt="Vandna Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <p className="mt-4 text-soft-cream/40 max-w-xs">
                        Handcrafting elegance since generations. Rooted in Indian heritage, designed for the modern home.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href={socials.instagram} target="_blank" className="text-soft-cream/60 hover:text-antique-gold transition-colors">Instagram</a>
                    <a href={socials.facebook} target="_blank" className="text-soft-cream/60 hover:text-antique-gold transition-colors">Facebook</a>
                    <a href={socials.whatsapp} target="_blank" className="text-soft-cream/60 hover:text-antique-gold transition-colors">WhatsApp</a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-soft-cream/40 text-sm">
                        © 2024 Vandana Brass Showpieces. <br /> All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
