import { createClient } from '@/lib/supabase/server';
import { Product, ProductType } from './types';

const ITEMS_PER_PAGE = 12;

export async function getProductsServer(page: number = 0, type: ProductType = 'todos'): Promise<{
  products: Product[];
  hasMore: boolean;
}> {
  const supabase = await createClient();
  
  const from = page * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (type === 'vendidos') {
    query = query.eq('sold', true);
  } else if (type !== 'todos') {
    const productType = type === 'laptops' ? 'laptop' : 
                       type === 'minipc' ? 'minipc' : 
                       type === 'accessories' ? 'accessory' : 'other';
    query = query.eq('type', productType).eq('sold', false);
  } else {
    query = query.eq('sold', false);
  }

  const { data, error, count } = await query.range(from, to);

  if (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error al obtener los productos');
  }

  return {
    products: data as Product[],
    hasMore: count ? from + ITEMS_PER_PAGE < count : false
  };
}

export async function getProductById(id: number): Promise<Product | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    throw new Error('Error al obtener el producto');
  }

  return data as Product;
} 