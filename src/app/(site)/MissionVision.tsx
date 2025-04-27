export default function MissionVision() {
  return (
    <div className="bg-[#212121] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌟</span>
              <h2 className="text-2xl font-bold text-white">Misión</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              En <strong className="text-white">RevivoX</strong> reacondicionamos laptops con pasión y excelencia para darles una segunda vida, acercando tecnología de calidad a más personas de manera accesible, sustentable y responsable.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚀</span>
              <h2 className="text-2xl font-bold text-white">Visión</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ser la marca líder en tecnología reacondicionada en Latinoamérica, inspirando a una nueva generación de usuarios a elegir consciente, conectando oportunidades, educación y sustentabilidad en cada laptop que vuelve a vivir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 