import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Home } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Página no encontrada | Juank Café";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "La dirección solicitada no corresponde a una página disponible de Juank Café.");
  }, []);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-brand-primary px-4 py-20 text-center">
      <div className="max-w-lg">
        <Coffee size={54} strokeWidth={1.2} className="mx-auto text-brand-secondary" aria-hidden="true" />
        <p className="mt-5 font-serif text-6xl text-brand-secondary">404</p>
        <h1 className="mt-3 font-serif text-3xl text-brand-secondary sm:text-4xl">Esta página no está en la carta.</h1>
        <p className="mt-4 leading-7 text-brand-accent">La dirección que abriste no corresponde a una página disponible.</p>
        <Link to="/" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-secondary px-7 py-3 font-semibold text-brand-primary transition-colors hover:bg-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
          <Home size={18} aria-hidden="true" /> Volver al inicio
        </Link>
      </div>
    </section>
  );
}
