import { Metadata } from "next";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://gopump.co
// - Name: Pump
// - Contact information: official@gopump.co
// - Description: An application responsible for help Personal Trainers and People that like to go to the gym improve their performance.
// - Ownership: when buying a plan/subscription, users can interact with many features. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email, phone and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://gopump.co/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata: Metadata = {
  title: "Privacy policy",
};

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Termos e Condições de Uso do Pump
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Términos y Condiciones de Uso
Fecha de vigencia: 27 de abril de 2025

Bienvenido a RevivoX (https://revivox.com.uy). Al acceder o utilizar nuestro sitio web, aceptas cumplir estos Términos y Condiciones.

Descripción del Servicio
RevivoX es una aplicación que permite a los clientes ver laptops usadas para evaluar su compra.

Propiedad y Garantía
Al comprar un producto, los usuarios pueden interactuar con varias funcionalidades. Todos los productos incluyen una garantía de 6 meses a partir de la fecha de compra. Esta garantía no cubre daños ocasionados por el cliente ni desgaste normal por uso.

Información Recopilada
Recopilamos nombre, correo electrónico, número de teléfono e información de pago. También utilizamos cookies para mejorar la experiencia del usuario. Para más información, consulta nuestra Política de Privacidad: https://revivox.com.uy/privacy-policy.

Actualizaciones a los Términos
Nos reservamos el derecho de actualizar estos Términos y Condiciones. Cualquier cambio será notificado a los usuarios por correo electrónico.

Ley Aplicable
Estos Términos se rigen por las leyes de Uruguay.

Contacto
Para cualquier duda o consulta sobre estos Términos y Condiciones, puedes contactarnos en revivox@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
