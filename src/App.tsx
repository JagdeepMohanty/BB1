import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { HowToOrder } from './pages/HowToOrder';
import { Stores } from './pages/Stores';
import { Community } from './pages/Community';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/how-to-order" element={<HowToOrder />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App