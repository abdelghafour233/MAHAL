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
    image: "https://images.unsplash.com/photo-1580820719890-449eb724b918?auto=format&fit=crop&q=80&w=800",
    description: "تجهيز شامل: نكافة، جوق، عمارية، وتزيين القاعة بأحدث الصيحات مع طقوس الحناء التقليدية.",
  },
  {
    id: 2,
    name: "حفل خطوبة راقي",
    price: 15000,
    category: "weddings",
    image: "https://images.unsplash.com/photo-1605303794711-2e680a6c62c9?auto=format&fit=crop&q=80&w=800",
    description: "تنظيم حفل خطوبة متكامل مع قفطان مغربي فاخر وبوفيه حلويات ومشروبات راقية.",
  },

  // Catering (Food)
  {
    id: 3,
    name: "بسطيلة مغربية (فواكه البحر)",
    price: 450,
    category: "catering",
    image: "https://images.unsplash.com/photo-1628151016752-166b26d83762?auto=format&fit=crop&q=80&w=800",
    description: "بسطيلة هماوية بفواكه البحر الطازجة والورقة المقرمشة، تكفي 10-12 شخص.",
  },
  {
    id: 4,
    name: "طاجين اللحم بالبرقوق / مشوي",
    price: 2500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1563289066-6b2a47291a10?auto=format&fit=crop&q=80&w=800",
    description: "أطباق مغربية أصيلة: طاجين اللحم بالبرقوق واللوز أو خروف مشوي على الطريقة التقليدية.",
  },
  {
    id: 5,
    name: "بوفيه شاي وحلويات مغربية",
    price: 3500,
    category: "catering",
    image: "https://images.unsplash.com/photo-1590136603233-a3070445d471?auto=format&fit=crop&q=80&w=800",
    description: "تشكيلة كعب غزال، بريوات، وحلويات دواز أتاي مع الشاي المغربي المنعنع.",
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
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
    description: "كيك حسب الطلب (Layers Cake) بنكهات مختلفة وتزيين احترافي.",
  },

  // Decoration / Equipment
  {
    id: 8,
    name: "كراء خيمة وجلسة تقليدية",
    price: 5000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1535025985434-111c1d0f5313?auto=format&fit=crop&q=80&w=800",
    description: "خيمة راقية مع الصالون المغربي، الزرابي، والموائد للمناسبات الكبيرة.",
  },
  {
    id: 9,
    name: "ديكور طاولات (فناير وورود)",
    price: 1500,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1533423778841-860e6e996f8a?auto=format&fit=crop&q=80&w=800",
    description: "تزيين بالفوانيس المغربية، سنتربيس، ورود طبيعية، وأواني فضية لكل طاولة.",
  },
  {
    id: 10,
    name: "فرقة موسيقية شعبية",
    price: 3000,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800",
    description: "تنشيط الحفل بأغاني مغربية شعبية (دقة مراكشية، عبيدات الرمى، أو أندلسي).",
  },
];