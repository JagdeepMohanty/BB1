import React from 'react';
import { Link } from 'react-router-dom';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProductCard } from '../components/ProductCard';

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
      text: 'I recently tried Butter Batter dosa batter, combo (Chilly cheese, Palak dosa, and Millet dosa) and I am thoroughly impressed! The batter has the perfect consistency, making it simple to spread evenly on the pan.',
      rating: 5,
    },
    {
      name: 'Akshara basavaraj ',
      image: 'https://res.cloudinary.com/diaafwq2f/image/upload/v1762160020/user-avatar-female_pjsw9j.png',
      text: 'If you want to try authentic Karnataka break fast menu then this place is a must visit. I love all that is there in their menu.',
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

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent dark:via-gray-800/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title">About Butter Batter</h2>
            <p className="section-subtitle">
              We bring the authentic taste of Udupi to your kitchen with our fresh, hand-ground batters and chutneys.
              Every product is made with love, following traditional recipes passed down through generations.
            </p>
            <Link to="/about" className="btn-primary mt-6 inline-block">
              Learn More About Us
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Ingredients</h3>
              <p className="text-gray-600 dark:text-gray-300">
                100% traditional and stone grinded with finest rice, urad dal, and authentic spices.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Preservative-Free</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Made fresh and delivered without any added preservatives or coloring.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Expertly Fermented</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Carefully monitored fermentation process (No Soda) for optimal taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Popular Products</h2>
            <p className="section-subtitle">Handpicked favorites loved by our customers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {popularProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Authentic Udupi Flavors?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Visit our stores or get in touch to place your order today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/stores" className="btn-primary">
                Find a Store
              </Link>
              <Link to="/contact" className="btn-secondary bg-gray-600 hover:bg-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
