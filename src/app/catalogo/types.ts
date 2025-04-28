export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  sold: boolean;
  type: 'laptop' | 'minipc' | 'accessory' | 'other';
  created_at: string;
  updated_at: string;
}

export type ProductType = 'todos' | 'laptops' | 'minipc' | 'accessories' | 'vendidos';

export type SortOrder = 'asc' | 'desc';
export type SortField = 'price' | 'created_at' | 'name';

export interface SortOptions {
  field: SortField;
  order: SortOrder;
} 