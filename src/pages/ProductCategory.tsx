import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { allProducts } from "./Products";

const ProductCategory = () => {
  let { category } = useParams<{ category?: string }>();
  // Support direct routes like /mac, /ipad, etc.
  if (!category) {
    // Get the current path from window.location.pathname
    const path = window.location.pathname.replace(/^\//, "");
    if (["mac", "ipad", "iphone", "watch", "airpods"].includes(path)) {
      category = path;
    }
  }

  const categoryData = {
    mac: {
      title: "Mac",
      subtitle: "If you can dream it, Mac can do it.",
      description: "Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro.",
      products: [
        ...allProducts.filter(p => p.name === "MacBook Air"),
        ...allProducts.filter(p => p.name === "MacBook Pro"),
        ...allProducts.filter(p => p.name === "iMac"),
        ...allProducts.filter(p => p.name === "Mac mini"),
        ...allProducts.filter(p => p.name === "Mac Studio"),
        ...allProducts.filter(p => p.name === "Mac Pro"),
      ],
    },
    ipad: {
      title: "iPad",
      subtitle: "Touch, draw, and type on one magical device.",
      description: "iPad Pro, iPad Air, iPad, and iPad mini. Versatile, powerful, and ready for anything.",
      products: [
        ...allProducts.filter(p => p.name === "iPad Pro"),
        ...allProducts.filter(p => p.name === "iPad Air"),
        ...allProducts.filter(p => p.name === "iPad"),
        ...allProducts.filter(p => p.name === "iPad mini"),
      ],
    },
    iphone: {
      title: "iPhone",
      subtitle: "Our most advanced iPhone systems.",
      description: "iPhone 17 Pro, iPhone 17, iPhone Air, iPhone 16 Pro, and more. Find the iPhone that's right for you.",
      products: [
        ...allProducts.filter(p => p.name === "iPhone 17 Pro"),
        ...allProducts.filter(p => p.name === "iPhone 17 Pro Max"),
        ...allProducts.filter(p => p.name === "iPhone 17"),
        ...allProducts.filter(p => p.name === "iPhone Air"),
        ...allProducts.filter(p => p.name === "iPhone 16 Pro"),
        ...allProducts.filter(p => p.name === "iPhone 16 Pro Max"),
        ...allProducts.filter(p => p.name === "iPhone 16"),
        ...allProducts.filter(p => p.name === "iPhone 16 Plus"),
        ...allProducts.filter(p => p.name === "iPhone 16e"),
      ],
    },
    watch: {
      title: "Apple Watch",
      subtitle: "A healthy leap ahead.",
      description: "Apple Watch Series 11, Apple Watch SE 3, and Apple Watch Ultra 3.",
      products: [
        ...allProducts.filter(p => p.name === "Apple Watch Series 11"),
        ...allProducts.filter(p => p.name === "Apple Watch SE 3"),
        ...allProducts.filter(p => p.name === "Apple Watch Ultra 3"),
      ],
    },
    airpods: {
      title: "AirPods",
      subtitle: "Personalized Spatial Audio for everyone.",
      description: "AirPods Pro 3, AirPods, and AirPods Max. Magic like you've never heard.",
      products: [
        ...allProducts.filter(p => p.name === "AirPods Pro 3"),
        ...allProducts.filter(p => p.name === "AirPods Max"),
        ...allProducts.filter(p => p.name === "AirPods"),
      ],
    }
  };

  const allowedCategories = ["mac", "ipad", "iphone", "watch", "airpods"];
  const data = allowedCategories.includes(category || "") ? categoryData[category as keyof typeof categoryData] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-apple-bg">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-apple-text mb-4">Category not found</h1>
            <p className="text-apple-text-muted">The requested product category does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-bg">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-apple-text">
                {data.title}
              </h1>
              <p className="text-2xl lg:text-3xl text-apple-accent font-medium">
                {data.subtitle}
              </p>
              <p className="text-lg text-apple-text-muted max-w-4xl mx-auto">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.products.map((product, index) => (
                <div
                  key={product.id}
                  className="product-card group cursor-pointer scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-image group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-3xl font-bold text-apple-text group-hover:text-apple-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-apple-text-muted">
                      {product.subtitle}
                    </p>
                    <p className="text-xl font-semibold text-apple-accent">
                      {product.price}
                    </p>
                    
                    <div className="pt-6 space-y-3">
                      <Button className="btn-apple-primary w-full text-lg py-3">
                        Buy Now
                      </Button>
                      <Button variant="outline" className="btn-apple-secondary w-full text-lg py-3">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCategory;