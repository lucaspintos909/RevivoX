"use client";

import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useState, memo } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MuseoModerno } from "next/font/google";

export const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
});

interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

interface NavigationProps {
  variant?: 'default' | 'catalog';
}

/**
 * Componente que muestra un enlace de navegación
 * @component
 */
const NavLink = memo(({ href, label, onClick, isActive }: NavLink & { onClick?: () => void }) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-base transition focus:outline-none underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-[#FF8806]",
        "text-[#CFCFCF] hover:text-[#FF8806]",
        isActive && "font-medium"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

/**
 * Componente que muestra el menú móvil
 * @component
 */
const MobileMenu = memo(({ 
  isOpen, 
  onClose,
  links
}: { 
  isOpen: boolean; 
  onClose: () => void;
  links: NavLink[];
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden bg-[#212121] border-t border-zinc-700"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
    >
      <div className="space-y-1 px-2 pb-3 pt-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block rounded-md px-3 py-2 text-base font-medium transition hover:bg-zinc-800 focus:outline-none",
              "text-[#CFCFCF] hover:text-[#FF8806]",
              link.isActive && "font-medium"
            )}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

/**
 * Componente que muestra la barra de navegación
 * @component
 */
const Navigation = memo(({ variant = 'default' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const defaultLinks: NavLink[] = [
    { href: "/catalogo?type=laptops", label: "Laptops y servicios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#nosotros", label: "Nosotros" },
  ];

  const catalogLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/#faq", label: "Preguntas frecuentes" },
    { href: "/#nosotros", label: "Nosotros" },
  ];

  const links = variant === 'catalog' ? catalogLinks : defaultLinks;
  const activeLinks = links.map(link => ({
    ...link,
    isActive: pathname === link.href.split('?')[0] || 
              (variant === 'catalog' && pathname.includes(link.href))
  }));

  return (
    <nav 
      className="fixed top-0 z-50 w-full bg-[#212121] border-b border-zinc-700"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className={cn(
              museoModerno.className,
              "text-4xl font-semibold text-[#CFCFCF]"
            )}>RevivoX</span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {activeLinks.map((link) => (
            <NavLink 
              key={link.href} 
              {...link}
            />
          ))}
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 transition focus:outline-none text-[#CFCFCF] hover:text-[#FF8806]"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">
              {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={toggleMenu} 
        links={activeLinks}
      />
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation; 