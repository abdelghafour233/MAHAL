import React, { useState, useEffect } from 'react';
import { Product, OrderForm } from '../types';
import { X, Send, MapPin, User, Phone, Calendar, Users } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderForm>({
    fullName: '',
    city: '',
    phone: '',
    eventDate: '',
    guestCount: '',
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `
*حجز خدمة جديد* 🎉
---------------------------
*الخدمة المطلوبة:* ${product.name}
*السعر التقريبي:* ${product.price} درهم
---------------------------
*تفاصيل المناسبة:* 📅
*الاسم:* ${formData.fullName}
*المدينة:* ${formData.city}
*الهاتف:* ${formData.phone}
*تاريخ المناسبة:* ${formData.eventDate}
*عدد المدعوين:* ${formData.guestCount}
---------------------------
أريد تفاصيل أكثر حول هذا العرض.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close modal after short delay
    setTimeout(() => {
        onClose();
        setFormData({ fullName: '', city: '', phone: '', eventDate: '', guestCount: '' });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up transition-colors duration-300 max-h-[90vh] overflow-y-auto hide-scrollbar">
        
        {/* Modal Header */}
        <div className="bg-emerald-600 p-4 flex justify-between items-center text-white sticky top-0 z-10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            طلب عرض سعر / حجز
          </h2>
          <button onClick={onClose} className="hover:bg-emerald-700 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Product Summary */}
        <div className="p-4 bg-emerald-50 dark:bg-gray-700/50 border-b border-emerald-100 dark:border-gray-600 flex gap-4 items-center">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover border border-emerald-200 dark:border-gray-600" />
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm">{product.name}</h3>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">ابتداءً من {product.price} درهم</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">الاسم الكامل</label>
            <div className="relative">
              <User className="absolute right-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="الاسم واللقب"
                className="w-full pr-10 pl-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">رقم الهاتف</label>
                <div className="relative">
                <Phone className="absolute right-3 top-3 text-gray-400" size={18} />
                <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06XXXXXXXX"
                    dir="ltr"
                    className="w-full pr-10 pl-2 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-right bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-sm"
                />
                </div>
             </div>
             <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">المدينة</label>
                <div className="relative">
                <MapPin className="absolute right-3 top-3 text-gray-400" size={18} />
                <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="المدينة"
                    className="w-full pr-10 pl-2 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-sm"
                />
                </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">تاريخ المناسبة</label>
                <div className="relative">
                <Calendar className="absolute right-3 top-3 text-gray-400" size={18} />
                <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full pr-10 pl-2 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white dark:bg-gray-700 dark:text-white text-sm"
                />
                </div>
             </div>
             <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">عدد المدعوين</label>
                <div className="relative">
                <Users className="absolute right-3 top-3 text-gray-400" size={18} />
                <input
                    type="number"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="مثلاً: 100"
                    className="w-full pr-10 pl-2 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-sm"
                />
                </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs p-3 rounded-lg mb-4 text-center border border-yellow-200 dark:border-yellow-800/50">
              💡 الحجز يؤكد بعد مراجعة التفاصيل ودفع العربون
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-200 dark:shadow-none flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>طلب عرض سعر عبر واتساب</span>
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;