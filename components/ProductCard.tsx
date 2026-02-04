import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          جديد
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium block mb-1">
            {product.category === 'watches' ? 'ساعات' : 
             product.category === 'glasses' ? 'نظارات' : 
             product.category === 'accessories' ? 'إكسسوارات' : 'متنوع'}
          </span>
          <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg leading-tight mb-1">{product.name}</h3>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
             <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">
              {product.price} <span className="text-sm">د.م</span>
            </span>
          </div>
          
          <button
            onClick={() => onBuy(product)}
            className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 active:scale-95"
          >
            <span>شراء</span>
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;