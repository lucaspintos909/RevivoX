'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProducts } from './api';
import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import CatalogSkeleton from './components/CatalogSkeleton';
import { ProductType } from './types';
import { motion, AnimatePresence } from 'framer-motion';

export default function CatalogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = (searchParams.get('type') as ProductType) || 'todos';
  const page = parseInt(searchParams.get('page') || '0');

  const { data, isLoading } = useQuery({
    queryKey: ['products', type, page],
    queryFn: () => getProducts(page, type),
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      <ProductFilters />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <CatalogSkeleton key={`skeleton-${type}-${page}`} />
        ) : (
          <motion.div
            key={`products-${type}-${page}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {data?.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && data?.products.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500">No se encontraron productos</p>
        </motion.div>
      )}

      {!isLoading && data?.hasMore && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8 space-x-4"
        >
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set('page', (page - 1).toString());
              router.push(`/catalogo?${params.toString()}`);
            }}
            disabled={page === 0}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set('page', (page + 1).toString());
              router.push(`/catalogo?${params.toString()}`);
            }}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Siguiente
          </button>
        </motion.div>
      )}
    </div>
  );
}