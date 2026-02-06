import React, { useState, useMemo, useEffect } from 'react';
import { Category, Product } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply Dark Mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Filter products based on selection
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero / Banner Area */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 dark:from-emerald-900 dark:to-emerald-800 rounded-3xl p-10 mb-8 text-white text-center shadow-xl relative overflow-hidden">
          {/* Decorative pattern overlay could go here */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">اجعل مناسبتك لا تُنسى</h2>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              نقدم لك أفضل خدمات التريتور وتنظيم الحفلات في المغرب. جودة عالية، مذاق أصيل، وخدمة احترافية لكل مناسباتكم السعيدة.
            </p>
            <button 
                onClick={() => {
                    const element = document.getElementById('products-grid');
                    element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
                اكتشف عروضنا
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6 sticky top-[73px] z-40 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm py-2 -mx-4 px-4 border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
            <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
            />
        </div>

        {/* Products Grid */}
        <div id="products-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuyClick} 
                />
            ))}
            </div>

            {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                <p>لا توجد عروض في هذا التصنيف حالياً.</p>
            </div>
            )}
        </div>
      </main>

      <Footer />

      <OrderModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Floating Dark Mode Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 border border-gray-700 dark:border-gray-200 flex items-center justify-center"
          aria-label="تبديل الوضع الليلي"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </div>
  );
}

export default App;