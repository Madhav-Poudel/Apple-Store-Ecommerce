import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import macbookHero from "@/assets/macbook-hero.jpg";
import ipadHero from "@/assets/ipad-hero.jpg";
import watchHero from "@/assets/watch-hero.jpg";
import airpodsHero from "@/assets/airpods-hero.jpg";
import iphoneHero from "@/assets/iphone-hero.jpg";

export const allProducts = [
  // iPhone
  { id: 1, name: "iPhone 17 Pro", subtitle: "All out Pro.", price: "NRs 210,000", image: iphoneHero },
  { id: 2, name: "iPhone 17 Pro Max", subtitle: "Pro Max power.", price: "NRs 235,000", image: iphoneHero },
  { id: 3, name: "iPhone 17", subtitle: "Magichromatic.", price: "NRs 170,000", image: iphoneHero },
  { id: 4, name: "iPhone Air", subtitle: "The thinnest iPhone ever. With the power of pro inside.", price: "NRs 160,000", image: iphoneHero },
  { id: 5, name: "iPhone 16 Pro", subtitle: "Pro features, next level.", price: "NRs 190,000", image: iphoneHero },
  { id: 6, name: "iPhone 16 Pro Max", subtitle: "Pro Max features, next level.", price: "NRs 210,000", image: iphoneHero },
  { id: 7, name: "iPhone 16", subtitle: "Advanced dual-camera system.", price: "NRs 150,000", image: iphoneHero },
  { id: 8, name: "iPhone 16 Plus", subtitle: "Bigger display, more battery.", price: "NRs 165,000", image: iphoneHero },
  { id: 9, name: "iPhone 16e", subtitle: "Affordable performance.", price: "NRs 120,000", image: iphoneHero },

  // iPad
  { id: 10, name: "iPad Pro", subtitle: "The ultimate iPad experience with M2 chip.", price: "NRs 180,000", image: ipadHero },
  { id: 11, name: "iPad Air", subtitle: "Serious performance in a thin and light design.", price: "NRs 120,000", image: ipadHero },
  { id: 12, name: "iPad", subtitle: "Versatile, powerful, and ready for anything.", price: "NRs 90,000", image: ipadHero },
  { id: 13, name: "iPad mini", subtitle: "Small size, big performance.", price: "NRs 80,000", image: ipadHero },

  // Mac
  { id: 14, name: "MacBook Air", subtitle: "Strikingly thin and fast so you can work, play, or create anywhere.", price: "NRs 170,000", image: macbookHero },
  { id: 15, name: "MacBook Pro", subtitle: "Mind-blowing performance for the most demanding tasks.", price: "NRs 250,000", image: macbookHero },
  { id: 16, name: "iMac", subtitle: "All-in-one. All amazing.", price: "NRs 220,000", image: macbookHero },
  { id: 17, name: "Mac mini", subtitle: "Compact power for any setup.", price: "NRs 110,000", image: macbookHero },
  { id: 18, name: "Mac Studio", subtitle: "Studio power, pro workflow.", price: "NRs 350,000", image: macbookHero },
  { id: 19, name: "Mac Pro", subtitle: "Ultimate performance for professionals.", price: "NRs 600,000", image: macbookHero },

  // Watch
  { id: 20, name: "Apple Watch Series 11", subtitle: "The ultimate way to watch your health.", price: "NRs 80,000", image: watchHero },
  { id: 21, name: "Apple Watch SE 3", subtitle: "Walk it. Talk it. Track it. Love it.", price: "NRs 45,000", image: watchHero },
  { id: 22, name: "Apple Watch Ultra 3", subtitle: "Personal beast.", price: "NRs 120,000", image: watchHero },

  // AirPods
  { id: 23, name: "AirPods Pro 3", subtitle: "The world’s best in-ear Active Noise Cancellation.", price: "NRs 38,000", image: airpodsHero },
  { id: 24, name: "AirPods Max", subtitle: "Computational audio. Listen, it's powerful.", price: "NRs 85,000", image: airpodsHero },
  { id: 25, name: "AirPods", subtitle: "Personalized Spatial Audio for everyone.", price: "NRs 28,000", image: airpodsHero },
];

const categories = [
  { key: "iphone", label: "iPhone" },
  { key: "ipad", label: "iPad" },
  { key: "mac", label: "Mac" },
  { key: "watch", label: "Apple Watch" },
  { key: "airpods", label: "AirPods" },
];

const categorizedProducts = {
  iphone: allProducts.filter(p => p.name.toLowerCase().includes("iphone")),
  ipad: allProducts.filter(p => p.name.toLowerCase().includes("ipad")),
  mac: allProducts.filter(p => p.name.toLowerCase().includes("macbook") || p.name.toLowerCase().includes("imac") || p.name.toLowerCase().includes("mac mini") || p.name.toLowerCase().includes("mac studio") || p.name.toLowerCase().includes("mac pro")),
  watch: allProducts.filter(p => p.name.toLowerCase().includes("watch")),
  airpods: allProducts.filter(p => p.name.toLowerCase().includes("airpods")),
};

const Products = () => {
  return (
    <div className="min-h-screen bg-[#181A20]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-apple-accent mb-10 text-center">All Apple Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map(product => (
            <div key={product.id} className="group cursor-pointer bg-white/10 backdrop-blur-lg border border-apple-border rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-xl bg-apple-bg group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-apple-text group-hover:text-apple-accent transition-colors duration-300">{product.name}</h3>
                <p className="text-apple-text-muted text-sm">{product.subtitle}</p>
                <p className="text-lg font-semibold text-apple-accent">{product.price}</p>
                <div className="flex flex-col gap-2 pt-4">
                  <button className="bg-apple-accent hover:bg-apple-accent-hover text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg">Buy Now</button>
                  <button
                    className="bg-white/10 border border-apple-border text-apple-text font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:bg-white/20"
                    onClick={() => window.location.href = `/product/${product.id}`}
                  >
                    See Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
