import React from 'react';
import { ArrowRight, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProductCard } from '../components/ProductCard';
import  AutoPlayVideo  from "../components/AutoPlayVideo";


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
      image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
      description: 'Assorted fresh chutneys made daily.',
      link: '/products#chutney',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200',
      text: "The best idli batter I've ever used! My family loves the soft, fluffy idlis every morning.",
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200',
      text: 'Their dosa batter makes perfect, crispy dosas every time. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200',
      text: 'Fresh chutneys are amazing! Saves so much time in the morning.',
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
            backgroundImage:
              'url(https://res.cloudinary.com/dp5t3oidu/image/upload/v1747986402/prfterwh5na5fhlrctax.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Authentic Udupi Flavors, Straight to Your Kitchen!
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the taste of tradition with our fresh, hand-ground batters and authentic chutneys.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/products" className="btn-primary">
                Order Now
              </a>
              <a href="/stores" className="btn-primary bg-white bg-opacity-20 hover:bg-opacity-30">
                Find a Store
              </a>
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

{/* 🎥 Video Section */}
<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="section-title text-center mb-12">Our Story in Motion</h2>
    
    {/* Local Autoplay Video (plays only when visible) */}
<div className="mb-12 max-w-2xl mx-auto">
  <h3 className="text-xl font-semibold mb-2 text-center">Autoplay Video</h3>
  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
    This video introduces our brand and vision — enjoy a quick glimpse of our journey.
  </p>
  <div className="aspect-video">
    <AutoPlayVideo src="https://res.cloudinary.com/dybzmpwaq/video/upload/v1755419254/intro_mioe59.mp4" />
  </div>
</div>


    {/* Cloudinary Optional Play Video */}
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-2 text-center">Watch On Demand</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
        Here’s a detailed look at our products, process, and what makes us unique.
      </p>
      <div className="aspect-video">
        <video
          src="https://res.cloudinary.com/dybzmpwaq/video/upload/v1755408285/product_opm0zl.mp4"
          controls
          className="w-full h-full rounded-lg shadow-md object-cover"
        />
      </div>
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
              <a href="/how-to-order" className="btn-primary">
                Order Now
              </a>
            </div>
            <div className="card p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Visit a Store</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Find your nearest Butter Batter outlet
              </p>
              <a href="/stores" className="btn-primary">
                Find Store
              </a>
            </div>
            <div className="card p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Questions? We're here to help
              </p>
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
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
            <a
              href="https://www.facebook.com/Butterbattergo"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
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
