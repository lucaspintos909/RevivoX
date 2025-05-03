import Navigation from '@/components/Navigation';
import ProductDetailSkeleton from '../components/ProductDetailSkeleton'

export default function Loading() {
  return (
    <>
      <Navigation variant="catalog" />
      <ProductDetailSkeleton />
    </>
  );
} 