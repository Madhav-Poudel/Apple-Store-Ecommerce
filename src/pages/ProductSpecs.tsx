import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ProductSpecs = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Try to get product from location state (preferred for SPA)
  const product = location.state?.product;

  // Fallback: If product not in state, show message
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-apple-bg">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-apple-accent">Product Not Found</h2>
          <button className="btn-apple-primary mt-4" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  // Default example specs if product.specs is missing or not an array of objects
  const defaultSpecs = [
    { label: "Display", value: "12.9-inch Liquid Retina XDR, 120Hz" },
    { label: "Chip", value: "M2, 8-core CPU, 10-core GPU" },
    { label: "Camera", value: "Dual 12MP (Wide, Ultra Wide), 4K video" },
    { label: "Battery", value: "10758mAh, USB-C Fast Charging" },
    { label: "Storage", value: "128GB/256GB/512GB/1TB/2TB" },
    { label: "Connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.3" },
    { label: "OS", value: "iPadOS 19" },
    { label: "ApplePencil", value: "2nd Gen support" },
    { label: "Colors", value: "Silver, Space Gray, Gold, Midnight" },
    { label: "Security", value: "Face ID / Touch ID / Secure Enclave" },
    { label: "Water Resistance", value: "IP68 / WR50" },
    { label: "Warranty", value: "1 Year Limited" },
  ];

  // Use product.specs if available and is an array of objects, else use defaultSpecs
  const specs = Array.isArray(product.specs) && product.specs.length > 0 && product.specs[0].label ? product.specs : defaultSpecs;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="bg-card text-card-foreground rounded-3xl shadow-2xl max-w-md w-full mx-auto p-8 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="mb-6 w-40 h-40 object-contain rounded-xl bg-background" />
        <h2 className="text-2xl font-extrabold mb-2 text-apple-accent text-center">{product.name}</h2>
        <h3 className="text-base text-apple-text-muted mb-2 text-center">{product.subtitle}</h3>
        <p className="text-sm text-apple-text-muted mb-4 text-center">{product.description}</p>
        <p className="text-xl font-bold text-apple-accent mb-6 text-center">{product.price}</p>
        <h4 className="text-lg font-semibold text-apple-text mb-4 text-center">Specifications</h4>
        <div className="w-full mb-6">
          <table className="w-full text-left text-apple-text-muted text-sm border-separate border-spacing-y-2">
            <tbody>
              {specs.map((spec) => (
                <tr key={spec.label}>
                  <td className="font-semibold text-apple-text w-1/3">{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="bg-apple-accent hover:bg-apple-accent-hover text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-lg transition-all duration-300 mt-2 w-full">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductSpecs;
