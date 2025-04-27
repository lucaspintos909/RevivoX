import React from 'react';

interface SectionProps {
  icon: string;
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, content }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-gray-300 leading-relaxed">{content}</p>
  </div>
);

const MISSION_CONTENT = "En <strong className='text-white'>RevivoX</strong> reacondicionamos laptops con pasión y excelencia para darles una segunda vida, acercando tecnología de calidad a más personas de manera accesible, sustentable y responsable.";

const VISION_CONTENT = "Ser la marca líder en tecnología reacondicionada en Latinoamérica, inspirando a una nueva generación de usuarios a elegir consciente, conectando oportunidades, educación y sustentabilidad en cada laptop que vuelve a vivir.";

export default function MissionVision() {
  return (
    <section className="bg-[#212121] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <Section 
            icon="🌟" 
            title="Misión" 
            content={MISSION_CONTENT} 
          />
          <Section 
            icon="🚀" 
            title="Visión" 
            content={VISION_CONTENT} 
          />
        </div>
      </div>
    </section>
  );
} 