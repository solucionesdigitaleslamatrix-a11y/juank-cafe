import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="overflow-hidden bg-brand-primary py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative min-h-[330px] border-y border-brand-secondary/35 py-10 sm:min-h-[390px] sm:py-14">
          <span className="editorial-kicker">Tradición de barrio</span>
          <p className="mt-8 font-serif text-[clamp(4.5rem,13vw,9rem)] leading-[0.82] tracking-[-0.07em] text-brand-secondary">Juank</p>
          <p className="ml-10 mt-2 font-serif text-[clamp(3.5rem,10vw,6.5rem)] italic leading-none text-brand-accent sm:ml-20">Café</p>
          <div className="absolute bottom-5 right-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent/75">
            <MapPin size={14} aria-hidden="true" /> Kennedy · Bogotá
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="editorial-kicker">Sobre Juank Café</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-brand-secondary sm:text-5xl">Un punto de encuentro alrededor del café.</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-brand-accent">
            <p>
              Juank Café es una cafetería de barrio ubicada en Kennedy, Bogotá. Su propuesta reúne café propio y de especialidad, bebidas frías y opciones de panadería y pastelería.
            </p>
            <p>
              Puedes disfrutar en mesa, solicitar domicilio o coordinar una recogida en auto. La atención ágil, la variedad, la calidad y los precios accesibles hacen parte de su propuesta.
            </p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Cra.%2072m%20%2338c-04%2C%20Kennedy%2C%20Bogot%C3%A1%2C%20Colombia" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center border-b border-brand-secondary pb-2 font-semibold text-brand-secondary transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
            Cómo llegar <span className="ml-3" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
