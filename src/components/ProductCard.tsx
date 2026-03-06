"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
        flipkart_url: string;
        is_available: boolean;
    };
}

const ProductCard = ({ product }: ProductProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="group relative bg-dark-brown p-4 rounded-2xl border border-antique-gold/10 hover:border-antique-gold/50 transition-all shadow-2xl"
        >
            <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {!product.is_available && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-antique-gold px-3 py-1 rounded-full text-sm font-bold border border-antique-gold/30">
                        Coming Soon
                    </div>
                )}
            </div>

            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-bold text-soft-cream group-hover:text-antique-gold transition-colors">
                    {product.name}
                </h3>
                <span className="text-antique-gold font-bold">₹{product.price.toLocaleString()}</span>
            </div>

            <p className="text-soft-cream/60 text-sm mb-6 line-clamp-2">
                {product.description}
            </p>

            {product.is_available ? (
                <a
                    href={product.flipkart_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-antique-gold text-dark-brown py-3 rounded-xl font-bold hover:animate-glow transition-all"
                >
                    Buy Now on Flipkart
                </a>
            ) : (
                <button
                    disabled
                    className="w-full bg-soft-cream/10 text-soft-cream/30 py-3 rounded-xl font-bold cursor-not-allowed border border-soft-cream/5"
                >
                    Out of Stock
                </button>
            )}
        </motion.div>
    );
};

export default ProductCard;
