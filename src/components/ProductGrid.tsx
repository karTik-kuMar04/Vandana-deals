"use client";
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductGrid = () => {
    return (
        <section id="collection" className="py-24 px-6 md:px-12 bg-black-accent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold gold-text mb-4">
                        Our Masterpieces
                    </h2>
                    <div className="w-24 h-1 bg-antique-gold mx-auto rounded-full"></div>
                    <p className="mt-6 text-soft-cream/60 max-w-2xl mx-auto">
                        Discover a curated collection of handcrafted brass showpieces, each representing centuries of tradition and artistry.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
