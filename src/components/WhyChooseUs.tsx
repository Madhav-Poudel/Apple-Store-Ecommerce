import React from "react";
import { ShieldCheckIcon, BanknotesIcon, GiftIcon } from "@heroicons/react/24/outline";

const WhyChooseUs: React.FC = () => {
  return (
  <section className="mb-12 pt-8 fade-in bg-apple-surface/80 backdrop-blur-lg border-t border-apple-border">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-apple-accent mb-4">Why Choose Us?</h2>
      <p className="text-center text-lg text-apple-text-muted max-w-2xl mx-auto mb-8">
        We make your Apple shopping experience easy, secure, and rewarding. Here’s why you should choose us for your next Apple device in Nepal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <ShieldCheckIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Official Warranty</h3>
          <p className="text-apple-text-muted">All products come with official Apple warranty and after-sales service in Nepal.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <BanknotesIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Local Payment Options</h3>
          <p className="text-apple-text-muted">Pay easily with eSewa, Khalti, bank transfer, or cash on delivery.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <GiftIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Exclusive Offers</h3>
          <p className="text-apple-text-muted">Enjoy special discounts, EMI plans, and festival deals on Apple products.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
