import React from 'react';

interface ListItemProps {
  title: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, description }) => (
  <li className="text-base">
    <span className="font-semibold text-white">{title}</span> —{description}
  </li>
);

const INTRO_CONTENT = {
  title: "Laptops listas para una nueva vida 🚀",
  paragraphs: [
    "En <strong>RevivoX</strong> creemos que la tecnología no debería tener fecha de vencimiento. Cada laptop que reacondicionamos es una oportunidad de seguir creando, aprendiendo y creciendo.",
    "Recuperamos equipos, los renovamos y los ponemos al alcance de más personas —con calidad garantizada y a un precio justo."
  ],
  question: "¿Por qué elegimos darle nueva vida a las laptops?",
  listItems: [
    {
      title: "Cuidar el planeta",
      description: "al prolongar la vida útil de los equipos, reducimos el impacto ambiental."
    },
    {
      title: "Hacer tecnología accesible",
      description: "ofrecemos laptops de calidad a precios más justos para todos."
    },
    {
      title: "Conectar más sueños",
      description: "porque una laptop en las manos correctas puede cambiar futuros."
    }
  ],
  closing: [
    "En <strong>RevivoX</strong> transformamos equipos en oportunidades. 🌱",
    "¿Listo para revivir tu próximo proyecto? 🚀"
  ]
};

export default function MakerIntro() {
  return (
    <section className="bg-[#212121] mb-8 text-gray-300 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              {INTRO_CONTENT.title}
            </h1>
            {INTRO_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base">{INTRO_CONTENT.question}</p>

          <ol className="space-y-4 list-decimal list-inside">
            {INTRO_CONTENT.listItems.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ol>

          {INTRO_CONTENT.closing.map((text, index) => (
            <p key={index} className="text-base" dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>
    </section>
  );
}
