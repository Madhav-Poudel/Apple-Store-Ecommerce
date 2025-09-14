import { Apple } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Shop and Learn": [
      "Store",
      "Mac",
      "iPad", 
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "Accessories",
    ],
    "Apple Store": [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Financing",
      "Carrier Deals at Apple",
    ],
    "For Business": [
      "Apple and Business",
      "Shop for Business",
    ],
    "Account": [
      "Manage Your Apple ID",
      "Apple Store Account",
      "iCloud.com",
    ],
    "Apple Values": [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Supplier Responsibility",
    ],
  };

  return (
    <footer className="bg-apple-surface border-t border-apple-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-apple-text font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-apple-text-muted hover:text-apple-text transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-apple-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Apple className="h-5 w-5 text-apple-text" />
              <span className="text-apple-text-muted text-sm">
                Copyright © 2024 Apple Inc. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-apple-text-muted hover:text-apple-text transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-apple-text-muted hover:text-apple-text transition-colors duration-300">
                Terms of Use
              </a>
              <a href="#" className="text-apple-text-muted hover:text-apple-text transition-colors duration-300">
                Sales and Refunds
              </a>
              <a href="#" className="text-apple-text-muted hover:text-apple-text transition-colors duration-300">
                Legal
              </a>
              <a href="#" className="text-apple-text-muted hover:text-apple-text transition-colors duration-300">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;