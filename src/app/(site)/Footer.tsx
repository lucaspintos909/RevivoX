export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              🚀 Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#productos" className="text-zinc-400 hover:text-white">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-400 hover:text-white">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#wall-of-love"
                  className="text-zinc-400 hover:text-white"
                >
                  Wall of love
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              📜 Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/tos"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/licenses"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Licencias
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2025 RevivoX. Todos los derechos reservados. Cooked for you by{" "}
          <a
            href="https://www.linkedin.com/in/lucas-mateo-pintos/"
            className="text-zinc-400 hover:text-white"
            target="_blank"
          >
            Lucas Pintos
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
