import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Apple, Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/pages/Products";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  // Hide search box when clicking outside or pressing Escape
  React.useEffect(() => {
    if (!searchOpen) return;
    const handleClick = (e: MouseEvent) => {
      const searchBox = document.getElementById("navbar-search-box");
      if (searchBox && !searchBox.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [searchOpen]);

  const navItems = [
    { name: "Store", path: "/" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
  <nav className="sticky top-0 z-50 bg-apple-bg/80 backdrop-blur-apple border-b border-apple-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Apple className="h-6 w-6 text-apple-text" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/^\/products(\/.*)?$/.test(location.pathname)
                ? null
                : navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`nav-link ${
                        isActive(item.path) ? "nav-link-active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center">
              {searchOpen && (
                <div id="navbar-search-box" className="flex items-center">
                  <input
                    type="text"
                    className={`transition-all duration-300 px-4 py-2 rounded-lg border border-apple-border text-lg text-apple-text focus:outline-none bg-apple-bg/80 w-48`}
                    style={{ marginRight: "0.5rem" }}
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                  {/* Search results dropdown */}
                  {searchTerm && (
                    <div className="absolute top-full left-0 mt-2 bg-apple-bg/95 rounded-xl shadow-lg p-2 z-50 w-64">
                      <ul>
                        {allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map(p => (
                          <li key={p.id}>
                            <button
                              className="w-full text-left py-2 px-2 hover:bg-apple-accent/10 rounded cursor-pointer"
                              onClick={() => { window.location.href = `/product/${p.id}`; setSearchOpen(false); }}
                              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { window.location.href = `/product/${p.id}`; setSearchOpen(false); } }}
                              tabIndex={0}
                            >
                              <span className="font-semibold text-apple-text">{p.name}</span>
                              <span className="ml-2 text-apple-text-muted">{p.subtitle}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <Button variant="ghost" size="sm" className="btn-apple-ghost" onClick={() => setSearchOpen((v) => !v)}>
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="btn-apple-ghost">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn-apple-ghost"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-apple-surface rounded-lg mt-2 mb-4">
              {/^\/products(\/.*)?$/.test(location.pathname)
                ? null
                : navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-2 text-base font-medium nav-link ${
                        isActive(item.path) ? "nav-link-active" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" className="btn-apple-ghost" onClick={() => setSearchOpen((v) => !v)}>
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="btn-apple-ghost">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;