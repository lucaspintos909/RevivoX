import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Configuración del rate limiting
const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // 10 peticiones por minuto
  message: 'Demasiadas peticiones, por favor intente nuevamente en un minuto.',
};

// Mapa para almacenar las peticiones por IP
const ipRequests = new Map<string, { count: number; resetTime: number }>();

export function rateLimitMiddleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Obtener o inicializar el contador para la IP
  const ipData = ipRequests.get(ip) || { count: 0, resetTime: now + RATE_LIMIT.windowMs };
  
  // Si ha pasado el tiempo de ventana, reiniciar el contador
  if (now > ipData.resetTime) {
    ipData.count = 0;
    ipData.resetTime = now + RATE_LIMIT.windowMs;
  }

  // Incrementar el contador
  ipData.count++;
  ipRequests.set(ip, ipData);

  // Verificar si se ha excedido el límite
  if (ipData.count > RATE_LIMIT.max) {
    return NextResponse.json(
      { error: RATE_LIMIT.message },
      { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((ipData.resetTime - now) / 1000).toString(),
        },
      }
    );
  }

  return null;
} 