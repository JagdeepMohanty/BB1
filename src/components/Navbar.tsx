import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Home, Info, Package, ShoppingCart, MapPin, Users, Phone, FileText } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'how-to-order', label: 'How to Order', icon: ShoppingCart },
    { id: 'stores', label: 'Stores', icon: MapPin },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'blog', label: 'Blog', icon: FileText },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT - Logo */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="font-bold text-xl text-white hover:text-amber-400 transition-colors duration-200">
              Butter Batter
            </a>
          </div>

          {/* CENTER - Icon Navigation (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="relative group"
              >
                <Icon className="w-6 h-6 text-gray-300 hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {label}
                </span>
              </a>
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
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
