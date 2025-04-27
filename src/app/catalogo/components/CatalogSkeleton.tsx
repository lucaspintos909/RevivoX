'use client';

import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

export default function CatalogSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {[...Array(12)].map((_, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <ContentLoader
            uniqueKey={`skeleton-${index}`}
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="400" height="256" />
            <rect x="16" y="280" rx="4" ry="4" width="300" height="20" />
            <rect x="16" y="310" rx="4" ry="4" width="200" height="16" />
            <rect x="16" y="340" rx="4" ry="4" width="100" height="16" />
          </ContentLoader>
        </motion.div>
      ))}
    </motion.div>
  );
} 