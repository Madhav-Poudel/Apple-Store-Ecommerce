import React, { createContext, useContext, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, notify?: (msg: string) => void) => void;
  getCartCount: () => number;
  updateQuantity: (id: number, delta: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load cart from localStorage on init
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addToCart = (item: Omit<CartItem, "quantity">, notify?: (msg: string) => void) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id);
      if (existing) {
        if (notify) notify("Item already added to cart");
        return prev;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Persist cart to localStorage whenever it changes
  React.useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const getCartCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartCount, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
