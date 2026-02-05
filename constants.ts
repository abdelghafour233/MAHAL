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
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    description: "تجهيز شامل: نكافة، جوق، عمارية، وتزيين القاعة بأحدث الصيحات مع طقوس الحناء التقليدية.",
  },
  {
    id: 2,
    name: "حفل خطوبة راقي",
    price: 15000,
    category: "weddings",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    description: "تنظيم حفل خطوبة متكامل مع قفطان مغربي فاخر وبوفيه حلويات ومشروبات راقية.",
  },

  // Catering (Food)
  {
    id: 3,
    name: "بسطيلة مغربية (فواكه البحر)",
    price: 450,
    category: "catering",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    description: "بسطيلة هماوية بفواكه البحر الطازجة والورقة المقرمشة، تكفي 10-12 شخص.",
  },
  {
    id: 4,
    name: "طاجين اللحم بالبرقوق / مشوي",
    price: 2500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800",
    description: "أطباق مغربية أصيلة: طاجين اللحم بالبرقوق واللوز أو خروف مشوي في الفرن.",
  },
  {
    id: 5,
    name: "بوفيه شاي وحلويات مغربية",
    price: 3500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    description: "تشكيلة كعب غزال، بريوات، وحلويات دواز أتاي مع الشاي المغربي المنعنع.",
  },

  // Birthdays
  {
    id: 6,
    name: "حفل عيد ميلاد أطفال",
    price: 2000,
    category: "birthdays",
    image: "https://images.unsplash.com/photo-1464349153912-d0464e79ea9e?auto=format&fit=crop&q=80&w=800",
    description: "كيك ديزاين، تنشيط (بهلوان)، وتزيين المكان بالبالونات.",
  },
  {
    id: 7,
    name: "كيكة مناسبات خاصة",
    price: 600,
    category: "birthdays",
    image: "https://images.unsplash.com/photo-1588195538326-c5f1f9fa478f?auto=format&fit=crop&q=80&w=800",
    description: "كيك حسب الطلب (Layers Cake) بنكهات مختلفة وتزيين احترافي.",
  },

  // Decoration / Equipment
  {
    id: 8,
    name: "كراء خيمة وجلسة تقليدية",
    price: 5000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&q=80&w=800",
    description: "خيمة راقية مع الصالون المغربي، الزرابي، والموائد للمناسبات الكبيرة.",
  },
  {
    id: 9,
    name: "ديكور طاولات (فناير وورود)",
    price: 1500,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1519225448526-0c914e13f6d5?auto=format&fit=crop&q=80&w=800",
    description: "تزيين بالفوانيس المغربية، سنتربيس، ورود طبيعية، وأواني فضية لكل طاولة.",
  },
  {
    id: 10,
    name: "فرقة موسيقية شعبية",
    price: 3000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
    description: "تنشيط الحفل بأغاني مغربية شعبية (دقة مراكشية، عبيدات الرمى، أو أندلسي).",
  },
];