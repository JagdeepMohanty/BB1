import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Butter Batter
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/how-to-order" className="nav-link">How to Order</Link>
            <Link to="/stores" className="nav-link">Stores</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/products" className="mobile-nav-link">Products</Link>
            <Link to="/how-to-order" className="mobile-nav-link">How to Order</Link>
            <Link to="/stores" className="mobile-nav-link">Stores</Link>
            <Link to="/community" className="mobile-nav-link">Community</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
            <Link to="/blog" className="mobile-nav-link">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}