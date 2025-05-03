'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';

interface Laptop {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  vendido: boolean;
}

export default function Products() {
  const [laptops, setLaptops] = useState<Laptop[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const { data, error } = await supabase
          .from('laptops')
          .select('*')
          .order('precio', { ascending: true });

        if (error) throw error;
        setLaptops(data || []);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#212121] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white">Cargando productos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#212121] py-16" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Nuestras Laptops Disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laptops.map((laptop) => (
            <div
              key={laptop.id}
              className={`bg-zinc-800 rounded-lg overflow-hidden shadow-lg ${
                laptop.vendido ? 'opacity-50' : ''
              }`}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={laptop.imagen}
                  alt={laptop.nombre}
                  fill
                  className="object-cover"
                />
                {laptop.vendido && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Vendido
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {laptop.nombre}
                </h3>
                <p className="text-gray-300 mb-4">{laptop.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#FF8806]">
                    ${laptop.precio}
                  </span>
                  {!laptop.vendido && (
                    <button className="bg-[#FF8806] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffa039] transition-colors">
                      Contactar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 