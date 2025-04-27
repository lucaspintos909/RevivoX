'use client';

import { Product } from '@/app/catalogo/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContentLoader from 'react-content-loader';
import { HiOutlinePhotograph } from 'react-icons/hi';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);

  return (
    <Link href={`/catalogo/${product.id}`}>
      <div className="relative group">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
          {isImageLoading && !isImageError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <ContentLoader
                uniqueKey={`product-skeleton-${product.id}`}
                speed={2}
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect x="0" y="0" rx="8" ry="8" width="400" height="300" />
              </ContentLoader>
            </motion.div>
          )}
          {!isImageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover object-center group-hover:opacity-75 transition-opacity duration-300 ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={false}
              loading="lazy"
              onLoad={() => setIsImageLoading(false)}
              onError={() => {
                setIsImageLoading(false);
                setIsImageError(true);
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <HiOutlinePhotograph className="w-16 h-16 mb-2" />
              <span className="text-sm">Imagen no disponible</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        {product.sold && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Vendido
          </div>
        )}
      </div>
    </Link>
  );
} 