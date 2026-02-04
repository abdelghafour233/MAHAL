import React from 'react';
import { ShoppingBag, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg text-white">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-none">متجري</h1>
            <p className="text-xs text-emerald-600 font-medium">أفضل جودة، أفضل سعر</p>
          </div>
        </div>

        {/* Contact Info (Visible on larger screens mostly) */}
        <a 
          href={`https://wa.me/${PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <span className="hidden md:inline font-semibold dir-ltr">{PHONE_NUMBER}+</span>
          <Phone size={20} />
          <span className="md:hidden text-sm font-bold">اتصل بنا</span>
        </a>
      </div>
    </header>
  );
};

export default Header;