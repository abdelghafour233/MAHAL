import React, { useState, useMemo } from 'react';
import { Category, Product } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // Add a small delay to clearing the product to prevent visual flicker during modal fade out
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero / Banner Area (Simple text for now) */}
        <div className="bg-gradient-to-l from-emerald-600 to-emerald-800 rounded-3xl p-8 mb-8 text-white text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-2">عروض حصرية لهذا الموسم</h2>
          <p className="text-emerald-100 mb-6">توصيل سريع 🚚 والدفع عند الاستلام 💵</p>
          <button 
            onClick={() => {
                const element = document.getElementById('products-grid');
                element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-emerald-800 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            تسوق الآن
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6 sticky top-[73px] z-40 bg-gray-50/95 backdrop-blur-sm py-2 -mx-4 px-4 border-b border-gray-200/50">
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
            <div className="text-center py-20 text-gray-500">
                <p>لا توجد منتجات في هذا التصنيف حالياً.</p>
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
    </div>
  );
}

export default App;