import { Product, Category } from './types';

export const PHONE_NUMBER = "212600000000"; // Placeholder Moroccan phone number for WhatsApp

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'watches', label: 'ساعات' },
  { id: 'glasses', label: 'نظارات' },
  { id: 'accessories', label: 'إكسسوارات الهاتف' },
  { id: 'misc', label: 'منتجات متنوعة' },
];

export const PRODUCTS: Product[] = [
  // Watches
  {
    id: 1,
    name: "ساعة كلاسيكية فاخرة",
    price: 350,
    category: "watches",
    image: "https://picsum.photos/id/175/400/400",
    description: "ساعة يد رجالية بتصميم كلاسيكي وأنيق.",
  },
  {
    id: 2,
    name: "ساعة ذكية رياضية",
    price: 450,
    category: "watches",
    image: "https://picsum.photos/id/1060/400/400",
    description: "تتبع نشاطك الرياضي وصحتك بدقة عالية.",
  },
  {
    id: 3,
    name: "ساعة ذهبية نسائية",
    price: 500,
    category: "watches",
    image: "https://picsum.photos/id/1059/400/400", // Placeholder for visually similar feel
    description: "إضافة رائعة لمظهرك اليومي والمناسبات.",
  },

  // Glasses
  {
    id: 4,
    name: "نظارة شمسية عصرية",
    price: 150,
    category: "glasses",
    image: "https://picsum.photos/id/64/400/400", // Woman portrait with styling
    description: "حماية كاملة من الأشعة فوق البنفسجية.",
  },
  {
    id: 5,
    name: "نظارة قراءة طبية",
    price: 120,
    category: "glasses",
    image: "https://picsum.photos/id/22/400/400", // Abstract/walking suitable
    description: "إطار خفيف ومريح للاستخدام اليومي.",
  },
  
  // Accessories
  {
    id: 6,
    name: "سماعات بلوتوث لاسلكية",
    price: 200,
    category: "accessories",
    image: "https://picsum.photos/id/1/400/400", // Tech related
    description: "صوت نقي وبطارية تدوم طويلاً.",
  },
  {
    id: 7,
    name: "غطاء حماية آيفون",
    price: 80,
    category: "accessories",
    image: "https://picsum.photos/id/160/400/400", // Phone related
    description: "حماية قوية ضد الصدمات.",
  },
  {
    id: 8,
    name: "شاحن سريع أصلي",
    price: 100,
    category: "accessories",
    image: "https://picsum.photos/id/366/400/400", // Tech related
    description: "شحن هاتفك بالكامل في وقت قياسي.",
  },

  // Misc
  {
    id: 9,
    name: "محفظة جلدية",
    price: 180,
    category: "misc",
    image: "https://picsum.photos/id/395/400/400",
    description: "جلد طبيعي عالي الجودة.",
  },
  {
    id: 10,
    name: "حقيبة ظهر للسفر",
    price: 250,
    category: "misc",
    image: "https://picsum.photos/id/364/400/400",
    description: "مساحة واسعة وتصميم مريح للظهر.",
  },
];