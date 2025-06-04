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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <article key={post.title} className="card overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-xl font-semibold mt-2 mb-4">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}