import React from 'react';
import { ArrowRight, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';


export function Home() {
  const popularProducts = [
    {
      name: 'Classic Idli Batter',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800',
      description: 'Perfect fermented batter for soft, fluffy idlis.',
      link: '/products#idli',
    },
    {
      name: 'Crispy Dosa Mix',
      image: 'https://i.pinimg.com/originals/00/07/8c/00078c3a5782b1367a6cdfcc03f710a9.jpg',
      description: 'Traditional dosa batter for crispy, golden browns dosas.',
      link: '/products#dosa',
    },
    {
      name: 'Fresh Chutney Pack',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Pudina_Dahi_Chutney_Mint_Yogurt_Chutney-1.jpg',
      description: 'Assorted fresh chutneys made daily.',
      link: '/products#chutney',
    },
  ];

  const testimonials = [
    {
      name: 'Marri Sireesha',
      image: 'https://res.cloudinary.com/dp5t3oidu/image/upload/v1750184950/WhatsApp_Image_2025-06-17_at_23.57.23_626dd741_ry48oe.jpg',
      text: '"This batter is a game-changer! Soft, fluffy idlis and crispy dosas every time. Ferments perfectly and saves so much time. Feels just like homemade—my family loves it!”',
      rating: 5,
    },
    {
      name: 'Priyanshu Shekhar',
      image: 'https://res.cloudinary.com/dp5t3oidu/image/upload/v1750184987/WhatsApp_Image_2025-06-17_at_23.57.23_8da645ad_oeoavn.jpg',
      text: '“Absolutely love this batter! The texture and taste are spot-on. My mornings are now easier with quick, delicious breakfasts. Idlis turn out super soft, dosas crispy—highly recommend!”',
      rating: 5,
    },
    {
      name: 'Meera ',
      image: 'https://res.cloudinary.com/dp5t3oidu/image/upload/v1750322385/WhatsApp_Image_2025-06-19_at_00.13.58_1da06394_tmqpnr.jpg',
      text: '“Fresh, consistent, and super convenient! This batter delivers authentic South Indian taste without the hassle. I’ve stopped making my own—it’s that good. My go-to for healthy, tasty meals!”',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dp5t3oidu/image/upload/v1747986402/prfterwh5na5fhlrctax.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"
             style={{ marginTop: '0.1cm' }}
             >
              Authentic Udupi Flavors, Straight to Your Kitchen!
            </h1>
          
            <p className="text-xl text-gray-200 mb-8">
              Experience the taste of tradition with our fresh, hand-ground batters and authentic chutneys.
            </p>
            <div style={{ marginTop: '8cm' }}>
            <div className="flex flex-wrap gap-4">
             <Link to="/products" className="btn-primary">
             Order Now
             </Link>
            <Link to="/stores" className="btn-primary bg-white bg-opacity-20 hover:bg-opacity-30">
              Find a Store
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Welcome to Butter Batter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We bring the authentic taste of Udupi to your kitchen with our fresh, hand-ground batters and chutneys. 
              Every product is made with love, following traditional recipes passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Popular Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Order Online</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fresh batters delivered to your doorstep
              </p>
             <Link to="/how-to-order" className="btn-primary">
                Order Now
             </Link>
            </div>
            <div className="card p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Visit a Store</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Find your nearest Butter Batter outlet
              </p>
              <Link to="/stores" className="btn-primary">
                Find a Store
              </Link>
            </div>
            <div className="card p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Questions? We're here to help
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch 
             </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/Butterbattergo" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              Facebook
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}