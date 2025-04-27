'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { Check, MoveRight, ShieldCheck } from 'lucide-react';



const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animación cuando monta
  }, []);
    
  return (
    <div className="bg-[#212121] mt-6 min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl w-full mx-auto py-16 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">

          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} min-h-[135px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[200px] w-full max-w-3xl`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Garantía de calidad.')
                  .pauseFor(2000)
                  .deleteAll(20)
                  .typeString('Tecnología accesible para todos al mejor precio.')
                  .pauseFor(2000)
                  .deleteAll(20)
                  .typeString('Listas para arrancar con tu próximo proyecto.')
                  .pauseFor(2000)
                  .deleteAll(20)
                  .typeString('Elegí renovar, no desechar.')
                  .pauseFor(2000)
                  .deleteAll(20)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
              }}
            />
          </h1>
          

          <p className="text-base text-[#CFCFCF] mb-8 max-w-2xl mx-auto lg:mx-0">
            En <strong>RevivoX</strong> damos nueva vida a laptops usadas.
            Con garantía, sustentables, <span className='underline underline-offset-4 decoration-[#FF8806]'>ideales para estudiantes</span> y listas para usar desde el primer día.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#FF8806] hover:bg-[#ffa039] text-black px-8 py-3 rounded-xl font-medium text-lg transition-colors duration-300"
            >
              Ver laptops disponibles <MoveRight className="w-5 h-5"/>
            </Link>
            <Link
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#FF8806] hover:bg-[#FF8806] hover:text-black text-white px-8 py-3 rounded-xl font-medium text-lg transition-colors duration-300"
            >
              Escríbenos
            </Link>
            <ShieldCheck color="#5cb85c" className="mx-auto sm:my-auto sm:mx-0"/>
          </div>

        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="max-w-md mx-auto">
            <div className="rounded-xl bg-zinc-800 p-6 border border-green-500/50 relative">
              <div className="absolute -top-3 right-6 bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                RevivoX
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-zinc-300">Beneficios de Comprar Reacondicionado</h3>

              <div className="space-y-4 mb-8">
                <Feature><span className='font-bold'>Ahorro Inteligente</span> <br /> Laptops de calidad a precio justo.</Feature>
                <Feature><span className='font-bold'>6 meses de garantía</span> <br /> Compra con tranquilidad.</Feature>
                <Feature><span className='font-bold'>Calidad Certificada</span> <br /> Control de calidad riguroso.</Feature>
                <Feature><span className='font-bold'>Eco-Friendly</span> <br /> Reduces el impacto ambiental.</Feature>
                <Feature><span className='font-bold'>Soporte</span> <br /> Estamos para ayudarte con tus dudas.</Feature>
              </div>

              <p className="text-center text-zinc-300 mb-1">
                ¿No te convence?
              </p>
              <Link
                href="#wall-of-love"
                className="w-full bg-green-500 hover:bg-green-400 transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
              >
                <span>⚡</span> Ver reseñas de nuestros clientes
              </Link>
              <p className="text-center text-zinc-500 text-sm mt-4">
                Compra con la tranquilidad que mereces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
}


export default HeroSection;
