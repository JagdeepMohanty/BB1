import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const ProductCard = React.memo(function ProductCard({ name, image, description, price }: ProductCardProps) {
  return (
    <div className="card overflow-hidden h-full flex flex-col transition-all duration-300">
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">{description}</p>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{price}</span>
        </div>
      </div>
    </div>
  );
});
