'use client';

import { Product, ProductType } from '../types';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from './Pagination';
import { useRouter, useSearchParams } from 'next/navigation';

interface AnimatedProductsProps {
  products: Product[];
  hasMore: boolean;
  type: ProductType;
  page: number;
  totalProducts: number;
  itemsPerPage: number;
}

export default function AnimatedProducts({ products, hasMore, type, page, totalProducts, itemsPerPage }: AnimatedProductsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(totalProducts / itemsPerPage));

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage - 1)); // query param es base 0
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleItemsPerPageChange = (newItems: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('itemsPerPage', String(newItems));
    params.set('page', '0'); // reset page
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <div className="min-h-[60vh] flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={`products-${type}-${page}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
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
      </AnimatePresence>

      {products.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500">No se encontraron productos</p>
        </motion.div>
      )}

      <Pagination
        currentPage={page + 1}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
} 