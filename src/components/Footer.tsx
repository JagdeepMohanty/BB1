import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold font-['Playfair_Display']">Butter Batter</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Authentic Udupi flavors, straight to your kitchen. Fresh, hand-ground batters made with love.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Butterbattergo" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/butterbatter_go" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Products</a></li>
              <li><a href="#how-to-order" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">How to Order</a></li>
              <li><a href="#stores" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Our Stores</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Support</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Community</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+91 88923 24272</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">butterbattergo@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Butter Batter. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
