'use client';

import { ProductType, SortOptions, SortOrder } from '../types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const filterOptions: { value: ProductType; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'laptops', label: 'Laptops' },
  { value: 'minipc', label: 'Mini PCs' },
  { value: 'accessories', label: 'Accesorios' },
  { value: 'vendidos', label: 'Vendidos' },
];

const sortOptions: { value: SortOrder; label: string }[] = [
  { value: 'asc', label: 'Menor Precio' },
  { value: 'desc', label: 'Mayor Precio' },
];

interface ProductFiltersProps {
  currentType: ProductType;
  sortOptions: SortOptions;
}

export default function ProductFilters({ currentType, sortOptions: currentSortOptions }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const handleFilterChange = (type: ProductType) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type !== 'todos') {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    // Reiniciamos la página a 0 al cambiar de filtro
    params.set('page', '0');
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleSortChange = (order: SortOrder) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortField', 'price');
    params.set('sortOrder', order);
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim());
    } else {
      params.delete('search');
    }
    params.set('page', '0');
    router.push(`/catalogo?${params.toString()}`);
  };

  return (
    <div className="space-y-4 mb-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3665f3]"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-[#3665f3] text-white font-medium hover:bg-[#2a4fc4] transition-colors"
        >
          Buscar
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentType === option.value
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
        <select
          value={currentSortOptions.order}
          onChange={(e) => handleSortChange(e.target.value as SortOrder)}
          className="px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} 