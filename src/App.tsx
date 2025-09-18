import { Toaster } from "@/components/ui/toaster";
// ...existing code...
import { CartProvider } from "./lib/CartContext";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductSpecs from "./pages/ProductSpecs";
import ProductCategory from "./pages/ProductCategory";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/:category" element={<ProductCategory />} />
            <Route path="/mac" element={<ProductCategory />} />
            <Route path="/ipad" element={<ProductCategory />} />
            <Route path="/iphone" element={<ProductCategory />} />
            <Route path="/watch" element={<ProductCategory />} />
            <Route path="/airpods" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/specs/:id" element={<ProductSpecs />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
