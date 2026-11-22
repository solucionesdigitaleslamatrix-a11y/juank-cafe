import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { assetUrl } from "../utils/assets";

const whatsappUrl = "https://wa.me/573143636708?text=Hola%2C%20Juank%20Caf%C3%A9.%20Quisiera%20consultar%20la%20carta.";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-primary">
      <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            <span className="h-px w-10 bg-brand-secondary" />
            Cafetería de barrio · Kennedy, Bogotá
          </p>
          <h1 className="max-w-[13ch] font-serif text-5xl leading-[1.06] text-brand-secondary sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Café, conversación y algo rico para acompañar.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-brand-accent sm:text-xl">
            En Juank Café encuentras café propio y de especialidad, bebidas frías y opciones de panadería y pastelería.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#menu" className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand-secondary px-7 py-3.5 font-semibold text-brand-primary transition-colors hover:bg-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
              Ver la carta <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-brand-secondary px-7 py-3.5 font-semibold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
              Pedir por WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-brand-secondary/20 pt-6 text-sm text-brand-accent">
            <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Kennedy, Bogotá</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-28 w-28 border border-brand-secondary/35 sm:-right-7 sm:-top-7 sm:h-40 sm:w-40" aria-hidden="true" />
          <div className="relative z-10 overflow-hidden bg-brand-paper p-2 sm:p-3">
            <img
              src={assetUrl("images/hero-cafe.webp")}
              alt="Dos tazas de café con arte latte sobre una mesa de madera, acompañadas de una porción de pastel."
              width={864}
              height={1152}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/4.4] w-full object-cover object-center sm:aspect-[4/4.2]"
            />
          </div>
          <p className="relative z-10 ml-auto mt-4 max-w-xs border-l-2 border-brand-secondary pl-4 font-serif text-lg italic text-brand-accent">
            Una pausa de café en Kennedy.
          </p>
        </div>
      </div>
    </section>
  );
}
