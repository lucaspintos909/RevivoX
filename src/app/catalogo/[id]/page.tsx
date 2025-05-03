import { createClient } from '@/lib/supabase/server';
import { Product } from '../types';
import { 
  Instagram, 
  ExternalLink, 
  Banknote, 
  CreditCard, 
  MessageCircle,
  Fingerprint,
  ScanFace,
  Keyboard,
  Zap,
  Monitor,
  Usb,
  Video,
  Bluetooth,
  Wifi,
  Cpu,
  MemoryStick,
  HardDrive,
  MonitorSmartphone,
  Laptop,
  CheckCircle,
  MonitorDot
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

async function getProduct(id: string): Promise<Product | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data as Product;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <>
        <Navigation variant="catalog" />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Error</h1>
            <p className="text-gray-600 mt-2">Producto no encontrado</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation variant="catalog" />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sección de imágenes */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Miniaturas de imágenes (si hay más de una) */}
            <div className="grid grid-cols-4 gap-2">
              {/* Aquí irían las miniaturas de otras imágenes si las hubiera */}
            </div>
          </div>

          {/* Sección de detalles */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {Number(product.discount) > 0 && (
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">
                    ¡Oferta!
                  </span>
                )}
                {product.sold && (
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-medium">
                    Vendido
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-600">Única unidad disponible</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                {product.discount && Number(product.discount) > 0 ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-red-400 line-through">${product.price}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">${product.discount}</span>
                      <span className="text-sm text-gray-500">USD</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">Hasta 12 cuotas</span>
                      </div>
                      <p className="text-sm text-gray-600">A través de MercadoLibre con tarjetas de crédito</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">Transferencia bancaria</span>
                      </div>
                      <p className="text-sm text-gray-600">Pago en efectivo con 5% de descuento</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Contactar por</span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="https://www.instagram.com/revivox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://wa.me/549XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Ver en</span>
                    <a
                      href="https://www.mercadolibre.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>MercadoLibre</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
                <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Especificaciones técnicas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-green-600" />
                    <span>Procesador: {product.specs?.processor || 'No especificado'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MemoryStick className="w-5 h-5 text-green-600" />
                    <span>Memoria RAM: {product.specs?.ram || 'No especificado'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-green-600" />
                    <span>Almacenamiento: {product.specs?.storage || 'No especificado'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MonitorSmartphone className="w-5 h-5 text-green-600" />
                    <span>Pantalla: {product.specs?.display || 'No especificado'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-green-600" />
                    <span>Sistema operativo: {product.specs?.os || 'No especificado'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Estado: {product.specs?.condition || 'Reacondicionado'}</span>
                  </li>
                </ul>
              </div>

              {Object.values(product.specs?.extras || {}).some(value => value === true) && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Características adicionales</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.specs?.extras?.fingerprint && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Fingerprint className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Lector de huella</span>
                      </div>
                    )}
                    {product.specs?.extras?.facialRecognition && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <ScanFace className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Reconocimiento facial</span>
                      </div>
                    )}
                    {product.specs?.extras?.backlitKeyboard && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Keyboard className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Teclado retroiluminado</span>
                      </div>
                    )}
                    {product.specs?.extras?.touchScreen && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <MonitorDot className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Pantalla táctil</span>
                      </div>
                    )}
                    {product.specs?.extras?.thunderbolt && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Zap className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Puerto Thunderbolt</span>
                      </div>
                    )}
                    {product.specs?.extras?.hdmi && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Monitor className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Puerto HDMI</span>
                      </div>
                    )}
                    {product.specs?.extras?.usbC && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Usb className="w-5 h-5 text-green-600" />
                        <span className="text-sm">USB-C</span>
                      </div>
                    )}
                    {product.specs?.extras?.webcam && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Video className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Webcam</span>
                      </div>
                    )}
                    {product.specs?.extras?.bluetooth && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Bluetooth className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Bluetooth</span>
                      </div>
                    )}
                    {product.specs?.extras?.wifi6 && (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Wifi className="w-5 h-5 text-green-600" />
                        <span className="text-sm">WiFi 6</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 