'use client';

import { Product, ProductType } from '../types';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedProductsProps {
  products: Product[];
  hasMore: boolean;
  type: ProductType;
  page: number;
}

export default function AnimatedProducts({ products, hasMore, type, page }: AnimatedProductsProps) {
  return (
    <>
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

      {hasMore && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8 space-x-4"
        >
          <a
            href={`/catalogo?type=${type}&page=${page - 1}`}
            className={`px-4 py-2 bg-primary text-white rounded ${
              page === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Anterior
          </a>
          <a
            href={`/catalogo?type=${type}&page=${page + 1}`}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Siguiente
          </a>
        </motion.div>
      )}
    </>
  );
} 