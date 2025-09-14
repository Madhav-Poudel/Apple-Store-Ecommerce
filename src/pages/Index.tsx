import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-bg">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <ProductGrid />
      </main>
  <WhyChooseUs />
  <ContactUs />
  <Footer />
    </div>
  );
};

export default Index;
