import React from 'react';
import { ArrowRight, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProductCard } from '../components/ProductCard';
import AutoPlayVideo from '../components/AutoPlayVideo';
import { Link } from 'react-router-dom'; // 1. Import Link

export function Home() {
  const popularProducts = [
    {
      name: 'Classic Idli Batter',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800',
      description: 'Perfect fermented batter for soft, fluffy idlis.',
      price: '800ml-₹80.00 , 450ml-₹50.00',
    },
    {
      name: 'Crispy Dosa Mix',
      image: 'https://i.pinimg.com/originals/00/07/8c/00078c3a5782b1367a6cdfcc03f710a9.jpg',
      description: 'Traditional dosa batter for crispy, golden browns dosas.',
      price: '800ml-₹80.00 , 450ml-₹50.00',
    },
    {
      name: 'Fresh Chutney Pack',
      image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
      description: 'Assorted fresh chutneys made daily.',
      price: '₹45.00 - ₹50.00',
    },
  ];

  const testimonials = [
    {
      name: 'Anupama Chandraakanth',
      image: 'https://res.cloudinary.com/diaafwq2f/image/upload/v1762159939/user-avatar-male-6_brxm5c.png ',
      text: "The new Thatte idli batter is too good and gives a tough competition to the hotel brought trending thatte idli.A super spicy chutney is a great combination and provides satisfaction of home made food.A must try.",
      rating: 5,
    },
    {
      name: 'Anuritha Raghavendra',
      image: 'https://res.cloudinary.com/diaafwq2f/image/upload/v1762159812/user-avatar-male-5_igmtni.png',
      text: 'I recently tried Butter Batter dosa batter, combo (Chilly cheese, Palak dosa, and Millet dosa) and I am thoroughly impressed! I was searching for a quick and easy way to make dosas at home, and Butter Batter exceeded my expectations. The batter has the perfect consistency, making it simple to spread evenly on the pan. It ferments well, producing crispy dosas with a fluffy inside every time.What stood out to me was the convenience. No more soaking, grinding, and waiting for hours. I can now make delicious dosas in minutes, which is perfect for my busy mornings.I highly recommend (Butter Batter) dosa batter to anyone looking for an authentic, easy-to-use, and delicious dosa-making experience. Five stars!',
      rating: 5,
    },
    {
      name: 'Akshara basavaraj ',
      image: 'https://res.cloudinary.com/diaafwq2f/image/upload/v1762160020/user-avatar-female_pjsw9j.png',
      text: 'If you want to try authentic Karnataka break fast menu then this place is a must visit. I am unable to pick one item that stands out, I love all that is there in their menu. If we are busy and unable to visit them then we order the batter, believe you me, it is as authentic and hygiene as it can get with no preservatives.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/dp5t3oidu/image/upload/v1747986402/prfterwh5na5fhlrctax.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full">
              <span className="text-amber-300 font-semibold text-sm tracking-wide">✨ AUTHENTIC UDUPI TRADITION</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-['Playfair_Display']">
              Authentic Udupi Flavors,
              <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Straight to Your Kitchen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Experience the taste of tradition with our fresh, hand-ground batters and authentic chutneys.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary text-lg">
                Explore Products
              </Link>
              <Link to="/stores" className="btn-secondary text-lg">
                Find a Store
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent dark:via-gray-800/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Welcome to Butter Batter</h2>
            <p className="section-subtitle">
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
          
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              This video introduces our brand and vision — enjoy a quick glimpse of our journey.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <AutoPlayVideo
                  src="https://res.cloudinary.com/dybzmpwaq/video/upload/v1755419254/intro_mioe59.mp4"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Here’s a detailed look at our products, process, and what makes us unique.
            </p>
            <div>
              <video
                src="https://res.cloudinary.com/dl6vgntp7/video/upload/v1756788570/product_1_ov7pi9.mp4"
                controls
                className="w-full h-full rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Popular Products</h2>
            <p className="section-subtitle">Handpicked favorites loved by our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {popularProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-['Playfair_Display']">Order Online</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Fresh batters delivered to your doorstep
              </p>
              <Link to="/products" className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Order Now
              </Link>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-['Playfair_Display']">Visit a Store</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Find your nearest Butter Batter outlet
              </p>
              <Link to="/stores" className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Find Store
              </Link>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-['Playfair_Display']">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Questions? We're here to help
              </p>
              <Link to="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real stories from real people who love our products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            {/* External links should still use <a> tags */}
            <a
              href="https://www.facebook.com/Butterbattergo"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
              target="_blank" // Good practice to open external links in a new tab
              rel="noopener noreferrer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a href="https://www.instagram.com/butterbatter_go" className="text-gray-600 dark:text-gray-300 hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}