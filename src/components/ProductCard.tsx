import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const ProductCard = React.memo(function ProductCard({ name, image, description, price }: ProductCardProps) {
  return (
    <div className="card group flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
        </div>
        <p className="text-lg font-semibold text-primary mt-auto">{price}</p>
      </div>
    </div>
  );
});
