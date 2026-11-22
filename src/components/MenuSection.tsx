import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "../utils/assets";

type MenuCategory = {
  title: string;
  image: string;
  imageAlt: string;
  items: string[];
};

const menuCategories: MenuCategory[] = [
  {
    title: "Cafés",
    image: assetUrl("images/hero-cafe.webp"),
    imageAlt: "Tazas de café con arte latte sobre una mesa de madera.",
    items: ["Cappuccino vienés", "Irlandés", "Arte latte", "Masmelos", "Macadamia", "Espresso"],
  },
  {
    title: "Bebidas frías",
    image: assetUrl("images/bebidas-frias.webp"),
    imageAlt: "Tres bebidas frías servidas en vasos de vidrio.",
    items: ["Frappé caramelo", "Frappé brownie", "Frappé cereza", "Affogato"],
  },
  {
    title: "Acompañamientos",
    image: assetUrl("images/red-velvet.webp"),
    imageAlt: "Porción de torta con cobertura de crema sobre un plato blanco.",
    items: ["Tortas", "Ponqué", "Empanadas", "Pastel de pollo", "Brownie con helado"],
  },
];

const whatsappUrl = "https://wa.me/573143636708?text=Hola%2C%20Juank%20Caf%C3%A9.%20Quisiera%20consultar%20la%20carta%20y%20sus%20precios.";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-brand-secondary py-20 text-brand-paper sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="editorial-kicker editorial-kicker-light">La oferta de Juank Café</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">La carta</h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-brand-paper/85">
            Cafés, bebidas frías y algo para acompañar. Consulta por WhatsApp los precios vigentes.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-24">
          {menuCategories.map((category, index) => (
            <section key={category.title} aria-labelledby={`menu-category-${index}`} className="grid gap-8 border-t border-brand-paper/25 pt-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
              <div className={`grid gap-5 sm:grid-cols-[0.9fr_1.1fr] lg:block ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-paper/65">0{index + 1}</span>
                  <h3 id={`menu-category-${index}`} className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{category.title}</h3>
                </div>
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  width={864}
                  height={1152}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/3] w-full object-cover sm:aspect-[4/3] lg:mt-8 lg:aspect-[5/4]"
                />
              </div>

              <div className={`self-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <ul className="divide-y divide-brand-paper/20 border-y border-brand-paper/30">
                  {category.items.map((item, itemIndex) => (
                    <li key={item} className="flex min-h-[4.5rem] items-center justify-between gap-4 py-4">
                      <span className="font-serif text-xl sm:text-2xl">{item}</span>
                      {category.title === "Acompañamientos" && item === "Brownie con helado" ? (
                        <img src={assetUrl("images/brownie.webp")} alt="Brownie acompañado de helado." width={160} height={120} loading="lazy" decoding="async" className="h-16 w-20 shrink-0 object-cover sm:h-20 sm:w-28" />
                      ) : (
                        <span className="font-serif text-sm text-brand-paper/55">{String(itemIndex + 1).padStart(2, "0")}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-brand-paper/75">Los precios se consultan directamente con Juank Café.</p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-brand-paper/25 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl font-serif text-2xl">¿Quieres consultar precios o hacer tu pedido?</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-brand-primary px-6 py-3 font-semibold text-brand-secondary transition-colors hover:bg-brand-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-paper">
            Preguntar por WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
