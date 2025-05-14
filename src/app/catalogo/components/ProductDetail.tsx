'use client';

import { Product } from '../types';
import { 
  Instagram, 
  ExternalLink, 
  Banknote, 
  CreditCard, 
  MessageCircle,
  ArrowLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';
import PriceDisplay from './PriceDisplay';
import PaymentMethod from './PaymentMethod';
import ContactButton from './ContactButton';
import SpecItem from './SpecItem';
import ExtraFeature from './ExtraFeature';
import { TECHNICAL_SPECS, EXTRA_FEATURES } from '../[id]/constants';
import { FadeIn, SlideUp } from './AnimatedContainer';

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <SlideUp className="container mx-auto px-4 py-8 mt-16">
      <Link 
        href="/catalogo" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
      >
        <ArrowLeft size={20} />
        <span>Volver al catálogo</span>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección de imágenes */}
        <FadeIn delay={0.2} className="space-y-4">
          <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* Aquí irían las miniaturas de otras imágenes si las hubiera */}
          </div>
        </FadeIn>

        {/* Sección de detalles */}
        <FadeIn delay={0.4} className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {Number(product.discount) > 0 && <Badge>¡Oferta!</Badge>}
              {product.sold && <Badge>Vendido</Badge>}
            </div>
            <SlideUp className="text-2xl font-bold text-gray-900">
              {product.name}
            </SlideUp>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-600">Única unidad disponible</span>
            </div>
          </div>

          <FadeIn delay={0.6} className="space-y-4">
            <PriceDisplay price={product.price} discount={product.discount} />

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PaymentMethod
                  icon={CreditCard}
                  title="Hasta 12 cuotas"
                  description="A través de MercadoLibre con tarjetas de crédito"
                />
                <PaymentMethod
                  icon={Banknote}
                  title="Transferencia bancaria"
                  description="Pago en efectivo con 5% de descuento"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500">Contactar por</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <ContactButton
                      href="https://www.instagram.com/revivox.uy"
                      icon={Instagram}
                      label="Instagram"
                      className="bg-gradient-to-r from-pink-500 to-purple-500"
                    />
                    <ContactButton
                      href="https://wa.me/59899619674"
                      icon={MessageCircle}
                      label="WhatsApp"
                      className="bg-green-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500">Ver en</span>
                  <ContactButton
                    href="https://www.mercadolibre.com.ar"
                    icon={ExternalLink}
                    label="MercadoLibre"
                    className="bg-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Especificaciones técnicas</h3>
              <ul className="space-y-2 text-gray-600">
                {TECHNICAL_SPECS.map(({ key, icon: Icon, label }) => (
                  <SpecItem
                    key={key}
                    icon={Icon}
                    label={label}
                    value={product.specs?.[key] || 'No especificado'}
                  />
                ))}
              </ul>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
              <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>


            {Object.values(product.specs?.extras || {}).some(value => value === true) && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Características adicionales</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EXTRA_FEATURES.map(({ key, icon: Icon, label }) => 
                    product.specs?.extras?.[key] && (
                      <ExtraFeature key={key} icon={Icon} label={label} />
                    )
                  )}
                </div>
              </div>
            )}
          </FadeIn>
        </FadeIn>
      </div>
    </SlideUp>
  );
} 