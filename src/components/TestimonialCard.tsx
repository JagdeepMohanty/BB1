import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  rating: number;
}

export const TestimonialCard = React.memo(function TestimonialCard({ name, image, text, rating }: TestimonialProps) {
  return (
    <div className="glass-card p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-500 group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        <img
          src={image}
          alt={`${name} profile`}
          loading="lazy"
          className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
        />
      </div>
      <div className="flex items-center mb-4 gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={`star-${i}`} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{text}"</p>
      <p className="font-bold text-lg text-gray-900 dark:text-white">{name}</p>
    </div>
  );
});