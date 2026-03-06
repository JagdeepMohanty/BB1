import React from 'react';

export function Blog() {
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
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">Stories, recipes, and insights from our kitchen</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.title} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-800 dark:to-gray-800/50">
                <time className="text-sm text-amber-600 dark:text-amber-400 font-semibold">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-xl font-bold mt-3 mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition-colors duration-300 group/link"
                >
                  Read More 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}