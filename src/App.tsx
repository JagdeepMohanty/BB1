import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import FloatingHomeButton from './components/FloatingHomeButton';
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
    <ErrorBoundary>
      <ThemeProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/how-to-order" element={<HowToOrder />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingHomeButton />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
