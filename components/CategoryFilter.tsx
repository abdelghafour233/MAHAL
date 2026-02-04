import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="py-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
      <div className="flex gap-3 px-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 border
              ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-600'
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;