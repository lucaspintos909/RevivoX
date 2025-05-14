export interface Product {
  id: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  price: number;
  sold: boolean;
  discount: number;
  type: 'laptop' | 'services' | 'accessory' | 'other';
  sale_link?: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    os: string;
    condition: string;
    extras: {
      fingerprint: boolean;
      facialRecognition: boolean;
      backlitKeyboard: boolean;
      touchScreen: boolean;
      thunderbolt: boolean;
      hdmi: boolean;
      usbC: boolean;
      webcam: boolean;
      bluetooth: boolean;
      wifi6: boolean;
    };
  };
  created_at: string;
  updated_at: string;
}

export type ProductType = 'todos' | 'laptops' | 'services' | 'accessories' | 'vendidos';

export type SortOrder = 'asc' | 'desc';
export type SortField = 'price' | 'created_at' | 'name';

export interface SortOptions {
  field: SortField;
  order: SortOrder;
} 