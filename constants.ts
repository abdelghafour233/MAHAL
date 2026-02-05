import { Product, Category } from './types';

export const PHONE_NUMBER = "212600000000"; 

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'weddings', label: 'أعراس ومناسبات' },
  { id: 'catering', label: 'بوفيه وأطباق' },
  { id: 'birthdays', label: 'أعياد ميلاد' },
  { id: 'decoration', label: 'تجهيزات وديكور' },
];

export const PRODUCTS: Product[] = [
  // Weddings
  {
    id: 1,
    name: "باك العرس الملكي الفاخر",
    price: 45000,
    category: "weddings",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    description: "تجهيز شامل: نكافة، جوق، عمارية، وتزيين القاعة بأحدث الصيحات.",
  },
  {
    id: 2,
    name: "حفل خطوبة راقي",
    price: 15000,
    category: "weddings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    description: "تنظيم حفل خطوبة متكامل مع بوفيه حلويات ومشروبات راقية.",
  },

  // Catering (Food)
  {
    id: 3,
    name: "بسطيلة مغربية (فواكه البحر)",
    price: 450,
    category: "catering",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800",
    description: "بسطيلة هماوية بفواكه البحر الطازجة، تكفي 10-12 شخص.",
  },
  {
    id: 4,
    name: "مشوي خروف ملكي",
    price: 2500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80&w=800",
    description: "خروف مشوي على الطريقة التقليدية مع الخضر صوطي.",
  },
  {
    id: 5,
    name: "بوفيه استقبال فاخر",
    price: 3500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    description: "تشكيلة مملحات، عصائر، وحلويات دواز أتاي لـ 50 شخص.",
  },

  // Birthdays
  {
    id: 6,
    name: "حفل عيد ميلاد أطفال",
    price: 2000,
    category: "birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?auto=format&fit=crop&q=80&w=800",
    description: "كيك ديزاين، تنشيط (بهلوان)، وتزيين المكان بالبالونات.",
  },
  {
    id: 7,
    name: "كيكة مناسبات خاصة",
    price: 600,
    category: "birthdays",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
    description: "كيك حسب الطلب (Layers Cake) بنكهات مختلفة وتزيين احترافي.",
  },

  // Decoration / Equipment
  {
    id: 8,
    name: "كراء خيمة مناسبات مجهزة",
    price: 5000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
    description: "خيمة راقية مع الكراسي والطاولات والزرابي للمناسبات الكبيرة.",
  },
  {
    id: 9,
    name: "تزيين طاولات فاخر",
    price: 1500,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1478146896981-b80c463e4381?auto=format&fit=crop&q=80&w=800",
    description: "سنتربيس، ورود طبيعية، وأواني فضية لكل طاولة (سعر لـ 10 طاولات).",
  },
  {
    id: 10,
    name: "فرقة موسيقية شعبية",
    price: 3000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    description: "تنشيط الحفل بأغاني مغربية شعبية (دقة مراكشية أو عبيدات الرمى).",
  },
];