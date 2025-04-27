import Image from 'next/image';

export default function AboutUs() {
  return (
    <div id="nosotros" className="bg-[#212121] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Conoce al equipo detrás de RevivoX
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fundador 1 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="https://msythrtpwmlfwzsdwqik.supabase.co/storage/v1/object/public/images/team-member-1.jpg"
                alt="Fundador 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Nombre Fundador 1</h3>
              <p className="text-gray-400 mb-4">Cargo / Rol</p>
              <p className="text-gray-300">
                Breve descripción del fundador, su experiencia y su pasión por la tecnología y la sustentabilidad.
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-[#FF8806] hover:text-[#ffa039]">
                  LinkedIn
                </a>
                <a href="#" className="text-[#FF8806] hover:text-[#ffa039]">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Fundador 2 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="https://msythrtpwmlfwzsdwqik.supabase.co/storage/v1/object/public/images/team-member-2.jpg"
                alt="Fundador 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Nombre Fundador 2</h3>
              <p className="text-gray-400 mb-4">Cargo / Rol</p>
              <p className="text-gray-300">
                Breve descripción del fundador, su experiencia y su pasión por la tecnología y la sustentabilidad.
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-[#FF8806] hover:text-[#ffa039]">
                  LinkedIn
                </a>
                <a href="#" className="text-[#FF8806] hover:text-[#ffa039]">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Juntos, combinamos nuestra pasión por la tecnología y la sustentabilidad para crear RevivoX, 
            una empresa que no solo reacondiciona laptops, sino que también construye un futuro más sostenible 
            para la tecnología en Latinoamérica.
          </p>
        </div>
      </div>
    </div>
  );
} 