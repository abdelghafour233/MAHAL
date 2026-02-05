import React from 'react';
import { UtensilsCrossed, Phone, Moon, Sun } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg text-white">
            <UtensilsCrossed size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-none transition-colors">AFRAHUNA</h1>
            <p className="text-xs text-emerald-600 font-medium">ممون الحفلات الأول</p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Contact Info */}
            <a 
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
            <span className="hidden md:inline font-semibold dir-ltr">{PHONE_NUMBER}+</span>
            <Phone size={20} />
            <span className="md:hidden text-sm font-bold">اتصل</span>
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;