import { createClient } from '@/lib/supabase/server';
import { Product } from '../types';
import Navigation from '@/components/Navigation';
import ProductDetail from '../components/ProductDetail';

async function getProduct(id: string): Promise<Product | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data as Product;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <>
        <Navigation variant="catalog" />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Error</h1>
            <p className="text-gray-600 mt-2">Producto no encontrado</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation variant="catalog" />
      <ProductDetail product={product} />
    </>
  );
} 