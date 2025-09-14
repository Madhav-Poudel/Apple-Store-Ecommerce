import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import macbookHero from "@/assets/macbook-hero.jpg";
import ipadHero from "@/assets/ipad-hero.jpg";
import watchHero from "@/assets/watch-hero.jpg";
import airpodsHero from "@/assets/airpods-hero.jpg";
import iphoneHero from "@/assets/iphone-hero.jpg";

const allProducts = [
  // Example specs for each product
  { id: 1, name: "iPhone 17 Pro", subtitle: "All out Pro.", price: "NRs 210,000", image: iphoneHero, description: "The latest flagship iPhone with advanced camera and performance.", specs: { Display: "6.7-inch OLED, 120Hz ProMotion", Chip: "A19 Pro, 6-core CPU, 5-core GPU", Camera: "Triple 48MP (Wide, Ultra Wide, Telephoto), 8K video, LiDAR", Battery: "4500mAh, Fast Charging, Wireless Charging", Storage: "128GB/256GB/512GB/1TB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 19" } },
  { id: 2, name: "iPhone 17 Pro Max", subtitle: "Pro Max power.", price: "NRs 235,000", image: iphoneHero, description: "Bigger display and battery, top-tier features.", specs: { Display: "6.9-inch OLED, 120Hz ProMotion", Chip: "A19 Pro, 6-core CPU, 5-core GPU", Camera: "Triple 48MP (Wide, Ultra Wide, Telephoto), 8K video, LiDAR", Battery: "5000mAh, Fast Charging, Wireless Charging", Storage: "256GB/512GB/1TB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 19" } },
  { id: 3, name: "iPhone 17", subtitle: "Magichromatic.", price: "NRs 170,000", image: iphoneHero, description: "Colorful, powerful, and affordable.", specs: { Display: "6.1-inch OLED, 90Hz", Chip: "A19, 6-core CPU, 4-core GPU", Camera: "Dual 48MP (Wide, Ultra Wide), 4K video", Battery: "4000mAh, Fast Charging", Storage: "128GB/256GB/512GB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 19" } },
  { id: 4, name: "iPhone Air", subtitle: "The thinnest iPhone ever. With the power of pro inside.", price: "NRs 160,000", image: iphoneHero, description: "Ultra-thin design with pro-level performance.", specs: { Display: "6.3-inch OLED, 90Hz", Chip: "A19 Pro, 6-core CPU, 5-core GPU", Camera: "Dual 48MP (Wide, Ultra Wide), 4K video", Battery: "3800mAh, Fast Charging", Storage: "128GB/256GB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 19" } },
  { id: 5, name: "iPhone 16 Pro", subtitle: "Pro features, next level.", price: "NRs 190,000", image: iphoneHero, description: "Next-gen pro features and speed.", specs: { Display: "6.7-inch OLED, 120Hz ProMotion", Chip: "A18 Pro, 6-core CPU, 5-core GPU", Camera: "Triple 48MP (Wide, Ultra Wide, Telephoto), 8K video, LiDAR", Battery: "4400mAh, Fast Charging, Wireless Charging", Storage: "128GB/256GB/512GB/1TB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 18" } },
  { id: 6, name: "iPhone 16 Pro Max", subtitle: "Pro Max features, next level.", price: "NRs 210,000", image: iphoneHero, description: "Maximum performance and display size.", specs: { Display: "6.9-inch OLED, 120Hz ProMotion", Chip: "A18 Pro, 6-core CPU, 5-core GPU", Camera: "Triple 48MP (Wide, Ultra Wide, Telephoto), 8K video, LiDAR", Battery: "4900mAh, Fast Charging, Wireless Charging", Storage: "256GB/512GB/1TB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 18" } },
  { id: 7, name: "iPhone 16", subtitle: "Advanced dual-camera system.", price: "NRs 150,000", image: iphoneHero, description: "Dual cameras and fast chip.", specs: { Display: "6.1-inch OLED, 90Hz", Chip: "A18, 6-core CPU, 4-core GPU", Camera: "Dual 48MP (Wide, Ultra Wide), 4K video", Battery: "3900mAh, Fast Charging", Storage: "128GB/256GB/512GB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 18" } },
  { id: 8, name: "iPhone 16 Plus", subtitle: "Bigger display, more battery.", price: "NRs 165,000", image: iphoneHero, description: "Large display and battery life.", specs: { Display: "6.7-inch OLED, 90Hz", Chip: "A18, 6-core CPU, 4-core GPU", Camera: "Dual 48MP (Wide, Ultra Wide), 4K video", Battery: "4300mAh, Fast Charging", Storage: "128GB/256GB/512GB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", WaterResistance: "IP68", FaceID: "Yes", OS: "iOS 18" } },
  { id: 9, name: "iPhone 16e", subtitle: "Affordable performance.", price: "NRs 120,000", image: iphoneHero, description: "Budget-friendly iPhone with solid features.", specs: { Display: "6.1-inch LCD", Chip: "A17, 6-core CPU, 4-core GPU", Camera: "Single 12MP (Wide), 1080p video", Battery: "3500mAh, Fast Charging", Storage: "64GB/128GB", Connectivity: "4G LTE, Wi-Fi 6, Bluetooth 5.2", WaterResistance: "IP67", FaceID: "No", OS: "iOS 18" } },
  { id: 10, name: "iPad Pro", subtitle: "The ultimate iPad experience with M2 chip.", price: "NRs 180,000", image: ipadHero, description: "Powerful tablet for professionals and creatives.", specs: { Display: "12.9-inch Liquid Retina XDR, 120Hz", Chip: "M2, 8-core CPU, 10-core GPU", Camera: "Dual 12MP (Wide, Ultra Wide), 4K video", Battery: "10758mAh, USB-C Fast Charging", Storage: "128GB/256GB/512GB/1TB/2TB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", OS: "iPadOS 19", ApplePencil: "2nd Gen support" } },
  { id: 11, name: "iPad Air", subtitle: "Serious performance in a thin and light design.", price: "NRs 120,000", image: ipadHero, description: "Lightweight and powerful for everyday use.", specs: { Display: "10.9-inch Liquid Retina, 60Hz", Chip: "M2, 8-core CPU, 9-core GPU", Camera: "Single 12MP (Wide), 4K video", Battery: "7606mAh, USB-C Fast Charging", Storage: "64GB/256GB", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", OS: "iPadOS 19", ApplePencil: "2nd Gen support" } },
  { id: 12, name: "iPad", subtitle: "Versatile, powerful, and ready for anything.", price: "NRs 90,000", image: ipadHero, description: "Affordable and versatile tablet for all.", specs: { Display: "10.2-inch Retina, 60Hz", Chip: "A14, 6-core CPU, 4-core GPU", Camera: "Single 8MP (Wide), 1080p video", Battery: "8827mAh, USB-C Charging", Storage: "64GB/256GB", Connectivity: "4G LTE, Wi-Fi 6, Bluetooth 5.2", OS: "iPadOS 19", ApplePencil: "1st Gen support" } },
  { id: 13, name: "iPad mini", subtitle: "Small size, big performance.", price: "NRs 80,000", image: ipadHero, description: "Compact tablet with great performance.", specs: { Display: "8.3-inch Liquid Retina, 60Hz", Chip: "A15, 6-core CPU, 5-core GPU", Camera: "Single 12MP (Wide), 4K video", Battery: "5124mAh, USB-C Charging", Storage: "64GB/256GB", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.2", OS: "iPadOS 19", ApplePencil: "2nd Gen support" } },
  { id: 14, name: "MacBook Air", subtitle: "Strikingly thin and fast so you can work, play, or create anywhere.", price: "NRs 170,000", image: macbookHero, description: "Thin, light, and fast laptop for everyone.", specs: { Display: "13.6-inch Liquid Retina, 500 nits", Chip: "M2, 8-core CPU, 10-core GPU", RAM: "8GB/16GB/24GB", Storage: "256GB/512GB/1TB/2TB", Battery: "18 hours", Ports: "2x Thunderbolt/USB 4, MagSafe 3, Headphone", Camera: "1080p FaceTime HD", OS: "macOS 15" } },
  { id: 15, name: "MacBook Pro", subtitle: "Mind-blowing performance for the most demanding tasks.", price: "NRs 250,000", image: macbookHero, description: "High-performance laptop for professionals.", specs: { Display: "14-inch/16-inch Liquid Retina XDR, 120Hz, 1600 nits", Chip: "M3 Pro/Max, up to 16-core CPU, 40-core GPU", RAM: "18GB/36GB/48GB", Storage: "512GB/1TB/2TB/4TB/8TB", Battery: "22 hours", Ports: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, Headphone", Camera: "1080p FaceTime HD", OS: "macOS 15" } },
  { id: 16, name: "iMac", subtitle: "All-in-one. All amazing.", price: "NRs 220,000", image: macbookHero, description: "All-in-one desktop with stunning display.", specs: { Display: "24-inch 4.5K Retina, 500 nits", Chip: "M3, 8-core CPU, 8-core GPU", RAM: "8GB/16GB/24GB", Storage: "256GB/512GB/1TB/2TB", Camera: "1080p FaceTime HD", Ports: "2x Thunderbolt/USB 4, 2x USB 3, Ethernet", OS: "macOS 15" } },
  { id: 17, name: "Mac mini", subtitle: "Compact power for any setup.", price: "NRs 110,000", image: macbookHero, description: "Small desktop with big power.", specs: { Chip: "M2/M2 Pro, up to 12-core CPU, 19-core GPU", RAM: "8GB/16GB/32GB", Storage: "256GB/512GB/1TB/2TB", Ports: "2x Thunderbolt/USB 4, 2x USB-A, HDMI, Ethernet", OS: "macOS 15" } },
  { id: 18, name: "Mac Studio", subtitle: "Studio power, pro workflow.", price: "NRs 350,000", image: macbookHero, description: "Desktop for creative professionals.", specs: { Chip: "M2 Max/Ultra, up to 24-core CPU, 76-core GPU", RAM: "32GB/64GB/128GB", Storage: "512GB/1TB/2TB/4TB/8TB", Ports: "4x Thunderbolt 4, 2x USB-A, HDMI, Ethernet, SDXC", OS: "macOS 15" } },
  { id: 19, name: "Mac Pro", subtitle: "Ultimate performance for professionals.", price: "NRs 600,000", image: macbookHero, description: "Top-tier desktop for demanding workflows.", specs: { Chip: "M2 Ultra, 24-core CPU, 76-core GPU", RAM: "64GB/128GB/192GB", Storage: "1TB/2TB/4TB/8TB", Ports: "8x Thunderbolt 4, 3x USB-A, 2x HDMI, 2x Ethernet, SDXC", OS: "macOS 15" } },
  { id: 20, name: "Apple Watch Series 11", subtitle: "The ultimate way to watch your health.", price: "NRs 80,000", image: watchHero, description: "Advanced health and fitness tracking.", specs: { Display: "45mm/41mm Always-On Retina, 2000 nits", Chip: "S9 SiP, 64-bit dual-core", Battery: "18 hours, Fast Charging", Features: "ECG, Blood Oxygen, Heart Rate, GPS, Fall Detection, Sleep Tracking", WaterResistance: "50m", OS: "watchOS 11" } },
  { id: 21, name: "Apple Watch SE 3", subtitle: "Walk it. Talk it. Track it. Love it.", price: "NRs 45,000", image: watchHero, description: "Affordable smartwatch with essential features.", specs: { Display: "44mm/40mm Retina, 1000 nits", Chip: "S8 SiP, 64-bit dual-core", Battery: "18 hours", Features: "Heart Rate, GPS, Fall Detection, Sleep Tracking", WaterResistance: "50m", OS: "watchOS 11" } },
  { id: 22, name: "Apple Watch Ultra 3", subtitle: "Personal beast.", price: "NRs 120,000", image: watchHero, description: "Rugged and capable for extreme activities.", specs: { Display: "49mm Always-On Retina, 3000 nits", Chip: "S9 SiP, 64-bit dual-core", Battery: "36 hours, Fast Charging", Features: "Depth Gauge, Dual-Frequency GPS, ECG, Blood Oxygen, Heart Rate, Fall Detection, Sleep Tracking", WaterResistance: "100m", OS: "watchOS 11" } },
  { id: 23, name: "AirPods Pro 3", subtitle: "The world’s best in-ear Active Noise Cancellation.", price: "NRs 38,000", image: airpodsHero, description: "Best-in-class noise cancellation and sound.", specs: { Chip: "H2, Custom high-excursion drivers", Battery: "6 hours (earbuds), 30 hours (case)", Features: "ANC, Transparency, Spatial Audio, Adaptive EQ, Touch Controls", WaterResistance: "IPX4", Connectivity: "Bluetooth 5.3" } },
  { id: 24, name: "AirPods Max", subtitle: "Computational audio. Listen, it's powerful.", price: "NRs 85,000", image: airpodsHero, description: "Premium over-ear headphones with great sound.", specs: { Chip: "H1, Custom acoustic design", Battery: "20 hours", Features: "ANC, Transparency, Spatial Audio, Adaptive EQ, Digital Crown", WaterResistance: "None", Connectivity: "Bluetooth 5.0" } },
  { id: 25, name: "AirPods", subtitle: "Personalized Spatial Audio for everyone.", price: "NRs 28,000", image: airpodsHero, description: "Wireless earbuds for everyday use.", specs: { Chip: "H1, Custom high-excursion drivers", Battery: "5 hours (earbuds), 24 hours (case)", Features: "Spatial Audio, Adaptive EQ, Touch Controls", WaterResistance: "IPX4", Connectivity: "Bluetooth 5.0" } },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-apple-bg">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-apple-text mb-4">Product not found</h1>
            <p className="text-apple-text-muted">The requested product does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-bg">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-3xl shadow-xl p-8 text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-6 w-64 h-64 object-contain rounded-xl bg-apple-bg" />
          <h2 className="text-3xl font-bold text-apple-accent mb-2">{product.name}</h2>
          <h3 className="text-xl text-apple-text mb-2">{product.subtitle}</h3>
          <p className="text-lg text-apple-text-muted mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-apple-accent mb-6">{product.price}</p>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-apple-text mb-2">Specifications</h4>
            <table className="mx-auto text-left text-apple-text-muted w-full border-separate border-spacing-y-2">
              <tbody>
                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key} className="align-top">
                    <td className="pr-6 font-semibold text-apple-text py-3 w-1/3 whitespace-nowrap align-top border-b border-apple-border text-lg">{key}</td>
                    <td className="py-3 border-b border-apple-border text-base align-top w-2/3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-apple-accent hover:bg-apple-accent-hover text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-lg">Buy Now</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
