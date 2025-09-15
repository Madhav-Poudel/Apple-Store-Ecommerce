import { Apple } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Shop": ["Mac", "iPad", "iPhone", "Watch", "AirPods"],
    "Account": ["Manage Your Apple ID", "Apple Store Account"],
    "Support": ["Contact", "Help Center"]
  };

  return (
    <footer className="bg-apple-surface border-t border-apple-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col items-start justify-start md:w-1/3">
            <div className="mt-8">
              <div className="flex items-center mb-2">
                <Apple className="h-7 w-7 text-apple-accent mr-2" />
                <span className="text-2xl font-bold text-apple-text">Apple Store</span>
              </div>
              <p className="text-apple-text-muted text-sm max-w-xs">Discover the best of Apple. Shop the latest devices, experience innovation, and enjoy premium support—all in one place.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-apple-text font-semibold mb-4">{title}</h3>
                {title === "Shop" ? (
                  <div className="grid grid-cols-2 gap-2">
                    {[0, 1].map((rowIdx) => (
                      <div key={"shop-row-" + rowIdx} className="flex flex-col gap-2">
                        {links.slice(rowIdx * 2, rowIdx * 2 + 2).map((link) => (
                          <button key={link} className="text-apple-text-muted hover:text-apple-text transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer text-left" type="button">
                            {link}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <button className="text-apple-text-muted hover:text-apple-text transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer" type="button">
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-apple-border pt-6 flex justify-center">
          <span className="text-apple-text-muted text-sm text-center">Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;