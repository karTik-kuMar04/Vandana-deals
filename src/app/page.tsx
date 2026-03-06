import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-brown selection:bg-antique-gold selection:text-dark-brown">
      <Navbar />
      <Hero />
      <ProductGrid />
      <InquiryForm />
      <Footer />
    </main>
  );
}
