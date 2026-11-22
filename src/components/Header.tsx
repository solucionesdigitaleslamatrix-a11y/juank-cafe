import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "La carta", to: "/#menu" },
  { label: "Juank Café", to: "/#nosotros" },
  { label: "Ubicación", to: "/#ubicacion" },
];

const whatsappUrl = "https://wa.me/573143636708?text=Hola%2C%20Juank%20Caf%C3%A9.%20Quisiera%20conocer%20la%20carta.";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b border-brand-secondary/15 transition-shadow duration-300 ${scrolled ? "bg-brand-primary shadow-sm" : "bg-brand-primary/95"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Juank Café, ir al inicio" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
          <Logo className="h-auto w-24 sm:w-28" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-secondary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-brand-secondary transition-colors hover:bg-brand-secondary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" aria-label="Navegación móvil" hidden={!menuOpen} className="border-t border-brand-secondary/15 bg-brand-primary px-5 pb-6 pt-3 md:hidden">
        <div className="flex flex-col">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="border-b border-brand-secondary/10 py-4 text-base font-semibold text-brand-accent focus-visible:outline-2 focus-visible:outline-brand-accent">
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 bg-brand-secondary px-5 py-3 font-semibold text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
            <MessageCircle size={18} aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
