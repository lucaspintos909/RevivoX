'use client';

import { motion } from 'framer-motion';

export default function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección de imágenes - Skeleton */}
        <div className="space-y-4">
          <motion.div 
            className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gray-100 rounded-lg"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Sección de detalles - Skeleton */}
        <div className="space-y-6">
          <div>
            <motion.div 
              className="h-8 w-32 bg-gray-100 rounded mb-4"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            />
            <motion.div 
              className="h-10 w-3/4 bg-gray-100 rounded mb-2"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            />
          </div>

          <div className="space-y-4">
            <motion.div 
              className="h-12 w-40 bg-gray-100 rounded"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    repeatType: "reverse",
                    delay: i * 0.1
                  }}
                >
                  <div className="h-6 w-32 bg-gray-100 rounded mb-2" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                </motion.div>
              ))}
            </div>

            <div className="space-y-2">
              <motion.div 
                className="h-6 w-32 bg-gray-100 rounded mb-4"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              />
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-4 w-full bg-gray-100 rounded"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 