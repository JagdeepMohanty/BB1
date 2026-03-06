import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Home, Info, Package, ShoppingCart, MapPin, Users, Phone, FileText } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/how-to-order', label: 'How to Order', icon: ShoppingCart },
    { path: '/stores', label: 'Stores', icon: MapPin },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/blog', label: 'Blog', icon: FileText },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT - Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-white hover:text-amber-400 transition-colors duration-200">
              Butter Batter
            </Link>
          </div>

          {/* CENTER - Icon Navigation (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6 flex-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <div key={path} className="relative group flex flex-col items-center">
                <Link to={path} onClick={closeMenu}>
                  <Icon className={`w-6 h-6 hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer ${
                    location.pathname === path ? 'text-amber-400' : 'text-gray-300'
                  }`} />
                </Link>
                <span className="absolute top-full mt-2 px-2 py-1 text-xs bg-gray-800 text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT - Theme Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path 
                    ? 'text-amber-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
