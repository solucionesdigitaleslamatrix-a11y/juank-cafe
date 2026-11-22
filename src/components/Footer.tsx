import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { label: "La carta", to: "/#menu" },
  { label: "Sobre Juank Café", to: "/#nosotros" },
  { label: "Galería", to: "/#galeria" },
  { label: "Ubicación", to: "/#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-accent py-14 text-brand-paper sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-brand-paper/20 pb-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-14">
          <div>
            <div className="inline-block bg-brand-primary p-1">
              <Logo className="h-auto w-32" />
            </div>
            <p className="mt-5 max-w-sm leading-7 text-brand-paper/85">Cafetería de barrio en Kennedy, Bogotá. Café propio y de especialidad, bebidas frías, panadería y pastelería.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl">Explora</h2>
            <nav aria-label="Navegación del pie de página" className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-brand-paper/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">{link.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-serif text-2xl">Contacto</h2>
            <div className="mt-5 space-y-4 text-brand-paper/85">
              <p className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" /><span>Cra. 72m #38c-04, Kennedy, Bogotá</span></p>
              <p className="flex items-center gap-3"><Phone size={18} aria-hidden="true" /><a href="tel:+573143636708" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">314 3636708</a></p>
              <a href="https://wa.me/573143636708" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center border border-brand-paper/50 px-4 py-2 font-semibold text-brand-paper transition-colors hover:bg-brand-paper hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">Escribir por WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-sm text-brand-paper/75 sm:flex-row sm:items-end sm:justify-between">
          <p>© {new Date().getFullYear()} Juank Café.</p>
          <nav aria-label="Información legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacidad" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">Cookies</Link>
            <Link to="/terminos" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary">Términos</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
