import { createClient } from '@/lib/supabase/server';
import { Product, ProductType } from './types';
import ProductFilters from './components/ProductFilters';
import CatalogSkeleton from './components/CatalogSkeleton';
import { Suspense } from 'react';
import AnimatedProducts from './components/AnimatedProducts';

const ITEMS_PER_PAGE = 12;

async function getProducts(page: number = 0, type: ProductType = 'todos'): Promise<{
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

function CatalogContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type = (searchParams.type as ProductType) || 'todos';
  const page = parseInt(searchParams.page as string) || 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      <ProductFilters />
      
      <Suspense fallback={<CatalogSkeleton />}>
        <CatalogProducts type={type} page={page} />
      </Suspense>
    </div>
  );
}

async function CatalogProducts({ type, page }: { type: ProductType; page: number }) {
  const { products, hasMore } = await getProducts(page, type);

  return (
    <AnimatedProducts 
      products={products} 
      hasMore={hasMore} 
      type={type} 
      page={page} 
    />
  );
}

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <CatalogContent searchParams={searchParams} />;
}