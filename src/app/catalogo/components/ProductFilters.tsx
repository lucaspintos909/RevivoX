'use client';

import { ProductType } from '../types';
import { useRouter, useSearchParams } from 'next/navigation';

const filterOptions: { value: ProductType; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'laptops', label: 'Laptops' },
  { value: 'minipc', label: 'Mini PCs' },
  { value: 'accessories', label: 'Accesorios' },
  { value: 'vendidos', label: 'Vendidos' },
];

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = (searchParams.get('type') as ProductType) || 'todos';

  const handleFilterChange = (type: ProductType) => {
    const params = new URLSearchParams();
    if (type !== 'todos') {
      params.set('type', type);
    }
    // Reiniciamos la página a 0 al cambiar de filtro
    params.set('page', '0');
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleFilterChange(option.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentFilter === option.value
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
} 