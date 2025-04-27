import { Metadata } from "next";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://gopump.co
// - Name: Pump
// - Description: An application responsible for help Personal Trainers and People that like to go to the gym improve their performance.
// - User data collected: name, email, phone, and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: To know better our clients
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: official@gopump.co

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata: Metadata = {
  title: "Privacy policy",
};

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Política de Privacidad
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Política de Privacidad
Fecha de vigencia: 27 de abril de 2025

Bienvenido a RevivoX (https://revivox.com.uy). Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información.

Información que Recopilamos

Información personal: Recopilamos tu nombre, dirección de correo electrónico y número de teléfono.

Información no personal: Utilizamos cookies web para mejorar tu experiencia en nuestro sitio.

Propósito de la Recopilación de Datos
Recopilamos tu información para conocer mejor a nuestros clientes.

Compartición de Datos
No compartimos tu información personal con terceros.

Privacidad de los Niños
No recopilamos intencionadamente información de niños menores de 13 años.

Actualizaciones de Esta Política de Privacidad
Si realizamos cambios en esta Política de Privacidad, te notificaremos por correo electrónico.

Contacto
Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos en revivouy@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
