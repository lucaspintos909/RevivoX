import React from 'react';
import { MoveRight, MoveLeft } from 'lucide-react';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  itemsPerPageOptions?: number[];
}

export function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [12, 24, 60],
}: PaginationProps) {
  // Mostrar máximo 9 páginas, con saltos si hay muchas
  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 4);
    let end = Math.min(totalPages, currentPage + 4);
    if (currentPage <= 5) {
      end = Math.min(9, totalPages);
    } else if (currentPage > totalPages - 5) {
      start = Math.max(1, totalPages - 8);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="border-t pt-4 mt-16 min-h-[56px] flex flex-col gap-4 sm:gap-0 sm:relative">
      {/* Paginación centrada */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
          aria-label="Anterior"
        >
          <MoveLeft className="w-4" />
        </button>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center font-medium transition-colors ${
              page === currentPage
                ? 'text-black underline underline-offset-4' // activa
                : 'text-gray-700 hover:underline hover:underline-offset-4 hover:text-[#3483fa]'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
          aria-label="Siguiente"
        >
          <MoveRight className="w-4" />
        </button>
      </div>

      {/* Selector de items por página */}
      <div className="flex items-center justify-center gap-2 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
        <span className="text-sm font-medium text-gray-700">Items por página</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border rounded-md px-2 py-1 text-sm focus:outline-none"
        >
          {itemsPerPageOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Pagination; 