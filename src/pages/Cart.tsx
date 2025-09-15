import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity } = useCart();
  // Helper to parse price string and sum
  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const priceNum = Number(item.price.replace(/[^\d.]/g, ""));
      return sum + priceNum * item.quantity;
    }, 0);
  };
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-apple-text-muted">
          Your cart is empty.<br />
          <Link to="/" className="text-apple-accent underline">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li key={item.id || item.name} className="flex items-center justify-between p-4 rounded-lg bg-apple-surface">
                <span className="font-semibold text-apple-text">{item.name}</span>
                <span className="text-apple-text-muted">{item.price}</span>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-apple-accent text-white rounded"
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="text-xs text-apple-accent">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-apple-accent text-white rounded"
                    onClick={() => updateQuantity(item.id, 1)}
                  >+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-end">
            <div className="text-lg font-bold mb-4">Total: NRs {getTotal().toLocaleString()}</div>
            <button className="bg-apple-accent hover:bg-apple-accent-hover text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 text-lg">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
