import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-apple-bg">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-apple-text">404</h1>
        <p className="text-xl text-apple-text-muted">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-block text-apple-accent hover:text-apple-accent-hover transition-colors duration-300 font-medium text-lg"
        >
          Return to Apple Store
        </a>
      </div>
    </div>
  );
};

export default NotFound;
