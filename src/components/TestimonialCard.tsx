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
    <div className="card p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={`${name} profile`}
        loading="lazy"
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <div className="flex items-center mb-2" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{text}</p>
      <p className="font-semibold">{name}</p>
    </div>
  );
});