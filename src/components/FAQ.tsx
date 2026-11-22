import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué puedo encontrar en Juank Café?",
    answer: "La carta incluye Cappuccino vienés, Irlandés, arte latte, masmelos, macadamia y Espresso; bebidas frías como Frappé caramelo, Frappé brownie, Frappé cereza y Affogato; además de tortas, ponqué, empanadas, pastel de pollo y brownie con helado.",
  },
  {
    question: "¿Qué modalidades de atención tienen?",
    answer: "Puedes consumir en mesa, solicitar domicilio o coordinar una recogida en auto.",
  },
  {
    question: "¿El domicilio llega a mi dirección?",
    answer: "La cobertura se confirma directamente con Juank Café. Escríbenos por WhatsApp con tu dirección para consultar la disponibilidad.",
  },
  {
    question: "¿Cuáles son los precios?",
    answer: "Para conocer los precios vigentes de cada producto, consúltanos directamente por WhatsApp.",
  },
  {
    question: "¿Dónde está ubicado Juank Café?",
    answer: "En la Cra. 72m #38c-04, Kennedy, Bogotá.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "El horario debe confirmarse directamente con el establecimiento por WhatsApp o teléfono.",
  },
];

export default function FAQ() {
  return (
    <section id="preguntas" className="bg-brand-primary py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
        <div>
          <p className="editorial-kicker">Información útil</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-brand-secondary sm:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-5 max-w-sm leading-7 text-brand-accent">Lo esencial para visitar, consultar la carta o coordinar tu pedido.</p>
        </div>

        <div className="divide-y divide-brand-secondary/25 border-y border-brand-secondary/25">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent [&::-webkit-details-marker]:hidden">
                <span className="text-lg leading-7">{faq.question}</span>
                <ChevronDown size={20} className="shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-1 pr-8 pt-3 leading-7 text-brand-accent">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
