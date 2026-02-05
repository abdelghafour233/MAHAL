import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
            <UtensilsCrossed size={20} />
          </div>
          <span className="text-xl font-bold text-white">AFRAHUNA</span>
        </div>
        <p className="mb-4 text-sm text-gray-400 max-w-md mx-auto">
          أفراحنا - شريككم الموثوق لتنظيم الأعراس، الحفلات، والمناسبات المهنية. نلتزم بالجودة والتقاليد المغربية الأصيلة.
        </p>
        <div className="text-xs text-gray-600 border-t border-gray-800 pt-4">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ AFRAHUNA
        </div>
      </div>
    </footer>
  );
};

export default Footer;