import Image from 'next/image';

export default function AboutUs() {
  return (
    <div id="nosotros" className="bg-[#212121] py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Conoce al equipo detrás de RevivoX
        </h2>
        
        <div className="relative w-full h-[500px] mb-12">
          <Image
            src="https://images.unsplash.com/photo-1603861868946-cafb303e0387?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipo RevivoX"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Somos <span className="font-bold">Agustín</span> y <span className="font-bold">Lucas</span>, dos estudiantes de informática apasionados por la tecnología y el medio ambiente. 
            Fundamos RevivoX con la misión de dar una segunda vida a laptops, combinando innovación, sostenibilidad y accesibilidad en todo Uruguay. 
            Nuestro objetivo es reducir el impacto ambiental de la tecnología, ofreciendo equipos reacondicionados de alta calidad que se adaptan a las necesidades actuales.
          </p>
        </div>

        <div className="flex justify-center gap-8">
          <a href="#" className="text-[#FF8806] hover:text-[#ffa039] text-lg">
            LinkedIn
          </a>
          <a href="#" className="text-[#FF8806] hover:text-[#ffa039] text-lg">
            Twitter
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            En RevivoX, creemos que la tecnología sostenible no es solo una tendencia, 
            es el futuro. Cada laptop que reacondicionamos es un paso más hacia un mundo 
            donde la innovación y la responsabilidad ambiental van de la mano.
          </p>
        </div>
      </div>
    </div>
  );
} 