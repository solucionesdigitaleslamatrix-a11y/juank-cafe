import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function Home() {
  useEffect(() => {
    document.title = "Juank Café | Café de barrio en Kennedy, Bogotá";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Juank Café es una cafetería de barrio en Kennedy, Bogotá. Conoce su carta de cafés, bebidas frías y acompañamientos. Consulta por WhatsApp.",
    );
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <MenuSection />
      <AboutSection />
      <Gallery />
      <FAQ />
      <ContactSection />
    </>
  );
}
