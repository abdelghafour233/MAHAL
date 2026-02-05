export type Category = 'all' | 'weddings' | 'catering' | 'birthdays' | 'decoration';

export interface Product {
  id: number;
  name: string;
  price: number; // Base price or "starting from"
  category: Category;
  image: string;
  description: string;
}

export interface OrderForm {
  fullName: string;
  city: string;
  phone: string;
  eventDate: string;
  guestCount: string;
}