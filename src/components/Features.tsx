import { Coffee, HeartHandshake, ShoppingBag } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Coffee,
    title: "Café propio y de especialidad",
    description: "Una propuesta de café para disfrutar en la pausa de todos los días.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Variedad para acompañar",
    description: "Bebidas frías, tortas, ponqué y opciones de panadería y pastelería.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "A tu manera",
    description: "Atención en mesa, domicilio o recogida en auto, con atención ágil y precios accesibles.",
  },
];

export default function Features() {
  return (
    <section id="propuesta" className="bg-brand-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <p className="editorial-kicker">Lo que encuentras aquí</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-brand-secondary sm:text-5xl">Una cafetería de barrio, con variedad.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-brand-accent">
            Calidad, precios accesibles y una atención cercana se encuentran en una carta de cafés, bebidas frías y acompañamientos.
          </p>
        </div>

        <div className="border-y border-brand-secondary/25">
          {pillars.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="grid gap-4 border-b border-brand-secondary/20 py-7 last:border-b-0 sm:grid-cols-[4rem_3rem_0.9fr_1.1fr] sm:items-center sm:gap-6 sm:py-9">
              <span className="font-serif text-2xl text-brand-secondary/65">{number}</span>
              <Icon size={25} strokeWidth={1.5} className="text-brand-secondary" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-brand-secondary">{title}</h3>
              <p className="max-w-lg leading-7 text-brand-accent">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
