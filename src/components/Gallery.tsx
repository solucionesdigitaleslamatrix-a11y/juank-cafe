import { assetUrl } from "../utils/assets";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  layout: string;
};

const images: GalleryImage[] = [
  {
    src: assetUrl("images/hero-cafe.webp"),
    alt: "Dos tazas de café con arte latte sobre una mesa de madera.",
    caption: "Café con arte latte",
    layout: "col-span-2 md:col-span-3 md:row-span-2",
  },
  {
    src: assetUrl("images/bebidas-frias.webp"),
    alt: "Tres bebidas frías de diferentes colores servidas en vasos de vidrio.",
    caption: "Bebidas frías",
    layout: "col-span-1 md:col-span-3",
  },
  {
    src: assetUrl("images/brownie.webp"),
    alt: "Brownie acompañado de una porción de helado y decoración dulce.",
    caption: "Brownie con helado",
    layout: "col-span-1 md:col-span-2",
  },
  {
    src: assetUrl("images/chocolate-caliente.webp"),
    alt: "Detalle de una bebida caliente decorada con masmelos.",
    caption: "Detalle de bebida y masmelos",
    layout: "col-span-1 md:col-span-2",
  },
  {
    src: assetUrl("images/red-velvet.webp"),
    alt: "Porción de torta de color rojo con cobertura de crema en un plato blanco.",
    caption: "Detalle de pastelería",
    layout: "col-span-2 md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-brand-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="editorial-kicker">Un vistazo a la carta</p>
            <h2 className="mt-3 font-serif text-4xl text-brand-secondary sm:text-5xl">Detalles que se disfrutan.</h2>
          </div>
          <p className="max-w-sm leading-7 text-brand-accent">Café, bebidas y pastelería en imágenes del material gráfico de Juank Café.</p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-6 md:auto-rows-[190px]">
          {images.map((image) => (
            <figure key={image.src} className={`group relative overflow-hidden bg-brand-primary ${image.layout}`}>
              <img src={image.src} alt={image.alt} width={864} height={1152} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-brand-accent/85 px-4 py-3 text-sm font-medium text-brand-paper">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
