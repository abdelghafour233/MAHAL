export type Category = 'all' | 'watches' | 'glasses' | 'accessories' | 'misc';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

export interface OrderForm {
  fullName: string;
  city: string;
  phone: string;
}