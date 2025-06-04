
import React from 'react';
interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export function ProductCard({ name, image, description, price }: ProductCardProps) {
  return (
    <div className="card group">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <p className="text-lg font-semibold text-primary">{price}</p>
      </div>
    </div>
  );
}
