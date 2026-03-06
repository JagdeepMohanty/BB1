import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-['Playfair_Display']">
                Butter Batter
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-link">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">About</a>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="nav-link">Products</a>
            <a href="#how-to-order" onClick={(e) => scrollToSection(e, 'how-to-order')} className="nav-link">How to Order</a>
            <a href="#stores" onClick={(e) => scrollToSection(e, 'stores')} className="nav-link">Stores</a>
            <a href="#community" onClick={(e) => scrollToSection(e, 'community')} className="nav-link">Community</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">Contact</a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="mobile-nav-link">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="mobile-nav-link">About</a>
            <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="mobile-nav-link">Products</a>
            <a href="#how-to-order" onClick={(e) => scrollToSection(e, 'how-to-order')} className="mobile-nav-link">How to Order</a>
            <a href="#stores" onClick={(e) => scrollToSection(e, 'stores')} className="mobile-nav-link">Stores</a>
            <a href="#community" onClick={(e) => scrollToSection(e, 'community')} className="mobile-nav-link">Community</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="mobile-nav-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
