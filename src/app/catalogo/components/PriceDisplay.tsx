'use client';

interface PriceDisplayProps {
  price: string | number;
  discount?: string | number;
}

export default function PriceDisplay({ price, discount }: PriceDisplayProps) {
  const formatPrice = (value: string | number) => {
    if (typeof value === 'number') {
      return value.toString();
    }
    return value;
  };

  if (discount && Number(discount) > 0) {
    return (
      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-lg text-red-400 line-through">${formatPrice(price)}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">${formatPrice(discount)}</span>
          <span className="text-sm text-gray-500">USD</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-bold text-gray-900">${formatPrice(price)}</span>
      <span className="text-sm text-gray-500">USD</span>
    </div>
  );
} 