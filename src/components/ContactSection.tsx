import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";

const phoneDisplay = "314 3636708";
const whatsappNumber = "573143636708";
const address = "Cra. 72m #38c-04, Kennedy, Bogotá, Colombia";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

type ContactForm = {
  name: string;
  modality: string;
  message: string;
};

const initialForm: ContactForm = { name: "", modality: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      `Hola, soy ${form.name.trim()}.`,
      `Modalidad: ${form.modality}.`,
      `Mensaje: ${form.message.trim()}`,
      "Autorizo a Juank Café a tratar los datos que comparto para atender esta solicitud, según su Política de privacidad.",
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.assign(whatsappUrl);
  };

  return (
    <section id="ubicacion" className="bg-brand-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="editorial-kicker">Visítanos o escríbenos</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-brand-secondary sm:text-5xl">Hablemos de tu próximo café.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-accent">Consulta la carta, pregunta por los precios o coordina la modalidad de atención que necesitas.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="space-y-7 border-y border-brand-secondary/25 py-7">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-brand-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-brand-secondary">Dirección</h3>
                  <p className="mt-1 leading-7 text-brand-accent">Cra. 72m #38c-04, Kennedy, Bogotá</p>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-9 items-center border-b border-brand-secondary text-sm font-semibold text-brand-secondary hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
                    Abrir en Google Maps ↗
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 shrink-0 text-brand-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-brand-secondary">Teléfono</h3>
                  <a href="tel:+573143636708" className="mt-1 inline-block text-brand-accent hover:text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent">{phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle size={22} className="mt-1 shrink-0 text-brand-secondary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-brand-secondary">WhatsApp</h3>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-brand-accent hover:text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent">+57 314 363 6708</a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-brand-accent">
              <span>Atención en mesa</span>
              <span aria-hidden="true">·</span>
              <span>Domicilio</span>
              <span aria-hidden="true">·</span>
              <span>Recogida en auto</span>
            </div>

            <div className="mt-10 border-l-2 border-brand-secondary pl-5">
              <p className="font-serif text-2xl text-brand-secondary">Escríbenos</p>
              <p className="mt-2 leading-7 text-brand-accent">Cuéntanos qué necesitas y continuaremos la conversación por WhatsApp.</p>
            </div>
          </div>

          <div className="bg-brand-paper p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="whatsapp-form-note">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-brand-secondary">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="min-h-12 w-full border border-brand-secondary/30 bg-brand-primary px-4 py-3 text-brand-accent outline-none transition-shadow placeholder:text-brand-accent focus-visible:border-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-secondary/35"
                  placeholder="¿Cómo te llamas?"
                />
              </div>

              <div>
                <label htmlFor="contact-modality" className="mb-2 block text-sm font-semibold text-brand-secondary">¿Cómo prefieres recibir tu pedido?</label>
                <select
                  id="contact-modality"
                  name="modality"
                  required
                  value={form.modality}
                  onChange={(event) => updateField("modality", event.target.value)}
                  className="min-h-12 w-full border border-brand-secondary/30 bg-brand-primary px-4 py-3 text-brand-accent outline-none transition-shadow focus-visible:border-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-secondary/35"
                >
                  <option value="" disabled>Selecciona una modalidad</option>
                  <option value="En mesa">En mesa</option>
                  <option value="Domicilio">Domicilio</option>
                  <option value="Recogida en auto">Recogida en auto</option>
                  <option value="Consulta general">Solo quiero consultar</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-brand-secondary">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={600}
                  rows={4}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full resize-y border border-brand-secondary/30 bg-brand-primary px-4 py-3 text-brand-accent outline-none transition-shadow placeholder:text-brand-accent focus-visible:border-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-secondary/35"
                  placeholder="Cuéntanos qué te gustaría consultar..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="contact-privacy-consent"
                  name="privacyConsent"
                  type="checkbox"
                  required
                  checked={privacyConsent}
                  onChange={(event) => setPrivacyConsent(event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
                />
                <label htmlFor="contact-privacy-consent" className="text-sm leading-6 text-brand-accent">He leído la <Link to="/privacidad" className="font-semibold text-brand-secondary underline underline-offset-2">Política de privacidad</Link> y autorizo el tratamiento de los datos que envío para atender esta solicitud.</label>
              </div>

              <p id="whatsapp-form-note" className="text-sm leading-6 text-brand-accent">Al continuar, se abrirá WhatsApp con tu mensaje preparado para que lo revises y confirmes. La autorización se incluirá en el mensaje. El formulario no envía datos a un servidor ni manda el mensaje automáticamente.</p>
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-brand-secondary px-6 py-3 font-semibold text-brand-primary transition-colors hover:bg-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-secondary sm:w-auto">
                Continuar a WhatsApp <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
