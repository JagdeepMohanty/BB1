import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const ProductCard = React.memo(function ProductCard({ name, image, description, price }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="card overflow-hidden h-full flex flex-col transform hover:-translate-y-2 transition-all duration-500">
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-800 dark:to-gray-800/50">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{price}</span>
            <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
