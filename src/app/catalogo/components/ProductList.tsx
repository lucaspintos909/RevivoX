'use client';

import { Product, ProductType } from '../types';
import ProductCard from './ProductCard';
import { AnimatePresence } from 'framer-motion';
import Pagination from './Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FadeIn, SlideUp } from './AnimatedContainer';

interface ProductListProps {
  products: Product[];
  type: ProductType;
  page: number;
  totalProducts: number;
  itemsPerPage: number;
}

export default function ProductList({ products, type, page, totalProducts, itemsPerPage }: ProductListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(totalProducts / itemsPerPage));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  const handlePageChange = (newPage: number) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage - 1)); // query param es base 0
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleItemsPerPageChange = (newItems: number) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set('itemsPerPage', String(newItems));
    params.set('page', '0'); // reset page
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <div className="min-h-[60vh] flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <FadeIn key="loading" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(itemsPerPage)].map((_, index) => (
              <SlideUp
                key={`loading-${index}`}
                className="bg-gray-200 rounded-lg h-[400px] animate-pulse"
              >
                <div />
              </SlideUp>
            ))}
          </FadeIn>
        ) : (
          <FadeIn key={`products-${type}-${page}`} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <SlideUp key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </SlideUp>
            ))}
          </FadeIn>
        )}
      </AnimatePresence>

      {products.length === 0 && !isLoading && (
        <FadeIn className="text-center py-12">
          <p className="text-gray-500">No se encontraron productos</p>
        </FadeIn>
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