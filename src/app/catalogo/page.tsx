import { createClient } from '@/lib/supabase/server';
import { Product, ProductType, SortOptions } from './types';
import ProductFilters from './components/ProductFilters';
import CatalogSkeleton from './components/CatalogSkeleton';
import { Suspense } from 'react';
import AnimatedProducts from './components/AnimatedProducts';
import Navigation from '@/components/Navigation';

async function getProducts(
  page: number = 0, 
  itemsPerPage: number = 12,
  type: ProductType = 'todos',
  sortOptions: SortOptions = { field: 'price', order: 'desc' },
  searchQuery?: string
): Promise<{
  products: Product[];
  hasMore: boolean;
  totalProducts: number;
}> {
  const supabase = await createClient();
  
  const from = page * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order(sortOptions.field, { ascending: sortOptions.order === 'asc' });

  if (searchQuery) {
    query = query.ilike('name', `%${searchQuery}%`);
  }

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
    hasMore: count ? from + itemsPerPage < count : false,
    totalProducts: count || 0,
  };
}

function CatalogContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type = (searchParams.type as ProductType) || 'todos';
  const page = parseInt(searchParams.page as string) || 0;
  const sortField = (searchParams.sortField as SortOptions['field']) || 'price';
  const sortOrder = (searchParams.sortOrder as SortOptions['order']) || 'desc';
  const search = searchParams.search as string;
  const itemsPerPage = parseInt(searchParams.itemsPerPage as string) || 12;

  return (
    <>
      <Navigation variant="catalog" />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
        <ProductFilters 
          currentType={type}
          sortOptions={{ field: sortField, order: sortOrder }}
        />
        
        <Suspense fallback={<CatalogSkeleton />}>
          <CatalogProducts 
            type={type} 
            page={page} 
            sortOptions={{ field: sortField, order: sortOrder }}
            searchQuery={search}
            itemsPerPage={itemsPerPage}
          />
        </Suspense>
      </div>
    </>
  );
}

async function CatalogProducts({ 
  type, 
  page,
  sortOptions,
  searchQuery,
  itemsPerPage
}: { 
  type: ProductType; 
  page: number;
  sortOptions: SortOptions;
  searchQuery?: string;
  itemsPerPage: number;
}) {
  const { products, hasMore, totalProducts } = await getProducts(page, itemsPerPage, type, sortOptions, searchQuery);

  return (
    <AnimatedProducts 
      products={products} 
      hasMore={hasMore} 
      type={type} 
      page={page} 
      totalProducts={totalProducts}
      itemsPerPage={itemsPerPage}
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