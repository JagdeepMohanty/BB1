import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export function ProductCard({ name, image, description, price }: ProductCardProps) {
  return (
    <div className="card group flex flex-col h-full">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        </div>
        <p className="text-lg font-semibold text-primary mt-auto">{price}</p>
      </div>
    </div>
  );
}
