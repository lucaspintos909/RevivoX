"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "¿Qué es una laptop reacondicionada?",
    answer:
      "Una laptop reacondicionada es un dispositivo que ha sido restaurado a su estado óptimo de funcionamiento. En RevivoX, cada laptop pasa por un riguroso proceso de inspección, limpieza, reparación y pruebas para garantizar su calidad y rendimiento.",
  },
  {
    question: "¿Qué garantía ofrecen en las laptops?",
    answer:
      "Todas nuestras laptops reacondicionadas incluyen una garantía de 6 meses. Durante este período, cubrimos cualquier defecto de fabricación o fallo en el funcionamiento normal del dispositivo.",
  },
  {
    question: "¿Cómo es el proceso de compra?",
    answer:
      "El proceso es simple: 1) Explora nuestro catálogo de laptops disponibles, 2) Selecciona el modelo que mejor se adapte a tus necesidades, 3) Realiza el pago de forma segura, 4) Recibe tu laptop en perfecto estado y lista para usar.",
  },
  {
    question: "¿Puedo probar la laptop antes de comprarla?",
    answer:
      "Sí, ofrecemos la posibilidad de probar la laptop en nuestro local antes de realizar la compra. Nuestro equipo estará disponible para resolver cualquier duda y demostrar el funcionamiento del dispositivo.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos múltiples métodos de pago: efectivo, transferencia bancaria, tarjetas de crédito y débito. También ofrecemos planes de financiación para que puedas adquirir tu laptop en cuotas.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a todo Uruguay. El costo del envío varía según la ubicación y se calcula al momento de la compra. Para Montevideo, ofrecemos entrega sin cargo en compras superiores a $20,000.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-medium text-white">
          Preguntas frecuentes
        </h2>
        <p className="mb-12 text-center text-base text-zinc-500">Resolvemos tus dudas sobre nuestras laptops reacondicionadas y el proceso de compra.</p>
        <p className="mb-12 text-center text-base text-zinc-500">
          ¿Tenes alguna duda? Contactanos en{" "}
          <a
            href="https://www.instagram.com/revivox.uy/"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            Instagram
          </a>{" "}
          o por{" "}
          <a
            href="mailto:revivox@gmail.com"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            email
          </a>
          .
        </p>

        <div className="space-y-[2px]">
          {faqs.map((faq: FAQItem, index: number) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between bg-zinc-900/50 px-6 py-4 text-left transition-colors hover:bg-zinc-900"
              >
                <span className="text-[16px] font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700">
                  <PlusIcon
                    className={`h-3 w-3 text-white transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-zinc-900/30 px-6 py-4 text-base text-zinc-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
