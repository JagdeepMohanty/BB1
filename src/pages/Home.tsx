import React, { useState } from 'react';
import { ShoppingBag, MapPin, Phone, Mail, Clock, Truck, CreditCard, Heart, Users } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProductCard } from '../components/ProductCard';
import AutoPlayVideo from '../components/AutoPlayVideo';

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:community@butterbatter.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\\nEmail: ${email}\\n\\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const stores = [
    {
      name: 'CENTRAL KITCHEN AND MAIN BRANCH',
      address: '23, 1st Floor, Balaji Complex, MANTRI TRANQUIL, Apartment Road, A Block, Subramanyapura, Bengaluru - 560061.',
      phone: '+91 88923 24272',
      coordinates: { lat: 12.9050, lng: 77.5460 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'SUBRAMANYAPURA ROAD',
      address: '#25, 4th main, JHBC Layout, Thurahalli main Road, Subramanyapura, Bengaluru - 560061.',
      phone: '+91 89719 68303',
      coordinates: { lat: 12.9050, lng: 77.5460 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'BANNERGHATTA ROAD BRANCH',
      address: '4th Main Road, Bannerghatta Rd, Arekere MICO Layout 2nd stage, Arekree, Bengaluru - 560076.',
      phone: '+91 99803 48303',
      coordinates: { lat: 12.8872, lng: 77.5960 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
  ];

  const blogPosts = [
    {
      title: 'How to Make the Perfect Idli with Our Batter',
      date: '2024-03-15',
      excerpt: 'Learn the secrets to making soft, fluffy idlis every time with our premium batter.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800',
    },
    {
      title: 'Healthy Dosa Variants for a Nutritious Breakfast',
      date: '2024-03-10',
      excerpt: 'Discover creative and healthy dosa recipes using our specialty batters.',
      image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800',
    },
    {
      title: 'Behind the Scenes: How Butter Batter is Made',
      date: '2024-03-05',
      excerpt: 'Take a peek into our kitchen and learn about our traditional preparation methods.',
      image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
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
              <a href="#products" className="btn-primary text-lg">
                Explore Products
              </a>
              <a href="#stores" className="btn-secondary text-lg">
                Find a Store
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent dark:via-gray-800/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title">About Butter Batter</h2>
            <p className="section-subtitle">
              We bring the authentic taste of Udupi to your kitchen with our fresh, hand-ground batters and chutneys.
              Every product is made with love, following traditional recipes passed down through generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To offer Authentic Udupi style Idli & Dose Batters without Preservatives, Soda and Coloring.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be a household name meeting daily breakfast needs of all sections of society.
              </p>
            </div>
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

      {/* Products Section */}
      <section id="products" className="py-24">
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
        </div>
      </section>

      {/* How to Order Section */}
      <section id="how-to-order" className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">How to Order</h2>
            <p className="section-subtitle">Simple steps to get fresh batters delivered</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Choose Products</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our range of fresh batters
              </p>
            </div>
            <div className="card p-6 text-center">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Place Order</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add to cart and checkout
              </p>
            </div>
            <div className="card p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Schedule Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose your delivery time
              </p>
            </div>
            <div className="card p-6 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Receive Fresh</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh products at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Stores</h2>
            <p className="section-subtitle">Visit us at any of our locations across Bangalore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {stores.map((store) => (
              <div
                key={store.name}
                className="glass-card p-8 flex flex-col h-full"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{store.name}</h3>
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{store.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{store.phone}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{store.hours}</p>
                  </div>
                </div>

                {store.coordinates && (
                  <a
                    href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    Get Directions
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Community & CSR</h2>
            <p className="section-subtitle">Giving back to the community that supports us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Hunger Relief</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We partner with local food banks and NGOs to provide fresh, nutritious food to those in need.
              </p>
            </div>
            <div className="card p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular donations and support to local community events and charitable causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Get in touch with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        +91 88923 24272
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        butterbattergo@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Head Office</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Bangalore - 560061
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="card p-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">Stories, recipes, and insights from our kitchen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.title} className="card overflow-hidden">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-amber-600 dark:text-amber-400 font-semibold">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl font-bold mt-3 mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
