import React from 'react';

const MISSION_CONTENT = "Extender la vida útil de la tecnología, ofreciendo laptops reacondicionadas de alta calidad que combinan accesibilidad, innovación y responsabilidad ambiental. Nuestro compromiso es fomentar una sociedad más sostenible, reduciendo el impacto ecológico y acercando soluciones tecnológicas a todo Uruguay.";

export default function MissionVision() {
  return (
    <section className="bg-[#212121] py-16">
      <div className="max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl">🚀</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white"> Nuestra Misión</h2>
        </div>
        <p className="text-gray-300 text-center leading-relaxed">
          {MISSION_CONTENT}
        </p>
      </div>
    </section>
  );
} 