import macbookHero from "@/assets/macbook-hero.jpg";
import ipadHero from "@/assets/ipad-hero.jpg";
import watchHero from "@/assets/watch-hero.jpg";
import airpodsHero from "@/assets/airpods-hero.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      subtitle: "Mind-blowing. Head-turning.",
      price: "From $1,999",
      image: macbookHero,
      category: "mac",
    },
    {
      id: 2,
      name: "iPad Pro",
      subtitle: "Unbelievably thin. Incredibly powerful.",
      price: "From $1,099",
      image: ipadHero,
      category: "ipad",
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      subtitle: "Smarter. Brighter. Mightier.",
      price: "From $399",
      image: watchHero,
      category: "watch",
    },
    {
      id: 4,
      name: "AirPods Pro",
      subtitle: "Adaptive Audio. Now playing.",
      price: "From $249",
      image: airpodsHero,
      category: "airpods",
    },
  ];

  return (
  <section className="py-20 bg-[#181A20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us section moved to About.tsx */}
  <div className="h-12"></div>
  <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-text mb-4">
            Explore the lineup
          </h2>
          <p className="text-xl text-apple-text-muted max-w-3xl mx-auto">
            Take a closer look at every product and find the one that's perfect for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-white/10 backdrop-blur-lg border border-apple-border rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-xl bg-apple-bg group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-apple-text group-hover:text-apple-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-apple-text-muted text-sm">
                  {product.subtitle}
                </p>
                <p className="text-lg font-semibold text-apple-accent">
                  {product.price}
                </p>
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
        <div className="flex justify-center mt-10">
          <button
            className="bg-apple-accent hover:bg-apple-accent-hover text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-lg"
            onClick={() => window.location.href = '/product'}
          >
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;