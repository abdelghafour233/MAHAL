import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
            <ShoppingBag size={20} />
          </div>
          <span className="text-xl font-bold text-white">MATJARUNA</span>
        </div>
        <p className="mb-4 text-sm text-gray-400 max-w-md mx-auto">
          نقدم لكم أفضل المنتجات بأفضل الأسعار. خدمة التوصيل متوفرة لجميع المدن المغربية والدفع عند الاستلام.
        </p>
        <div className="text-xs text-gray-600 border-t border-gray-800 pt-4">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ MATJARUNA
        </div>
      </div>
    </footer>
  );
};

export default Footer;