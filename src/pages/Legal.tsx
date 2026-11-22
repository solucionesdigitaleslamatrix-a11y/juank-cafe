import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

type LegalKind = "privacidad" | "cookies" | "terminos";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocument = {
  title: string;
  intro: string;
  description: string;
  sections: LegalSection[];
};

const phone = "+573143636708";
const phoneLabel = "314 363 6708";
const whatsapp = "https://wa.me/573143636708";

const sharedNotice = (
  <aside className="mt-7 border-y border-brand-secondary/30 py-3 text-sm leading-6 text-brand-accent" aria-label="Estado del documento">
    <strong className="font-semibold text-brand-secondary">Versión en revisión, pendiente de validación.</strong>{" "}
    La identificación jurídica del responsable y algunos datos operativos deben confirmarse antes de aprobar estos documentos como versión definitiva.
  </aside>
);

const documents: Record<LegalKind, LegalDocument> = {
  privacidad: {
    title: "Política de privacidad",
    intro:
      "Esta política explica qué información puede conocer Juank Café cuando consultas el sitio o decides contactar al establecimiento, para qué se utiliza y cómo puedes ejercer tus derechos sobre ella.",
    description:
      "Política de tratamiento de datos personales de Juank Café. Información sobre datos, finalidades, derechos y canales de atención.",
    sections: [
      {
        id: "responsable",
        title: "Responsable del tratamiento e identificación",
        content: (
          <>
            <p>El sitio se identifica comercialmente como <strong>Juank Café</strong> y publica como datos de contacto la dirección Cra. 72m #38c-04, Kennedy, Bogotá, y el teléfono <a className="legal-inline-link" href={`tel:${phone}`}>{phoneLabel}</a>, disponible también mediante <a className="legal-inline-link" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
            <p>La documentación recibida para este proyecto no permite confirmar la persona natural o jurídica que actúa legalmente como responsable del tratamiento, su razón social o nombre completo, NIT, representante legal ni un correo electrónico destinado a solicitudes de privacidad. Por esa razón, la identificación formal está pendiente de validación y este texto no debe entenderse como sustituto de esos datos.</p>
          </>
        ),
      },
      {
        id: "datos",
        title: "Datos que pueden tratarse",
        content: (
          <>
            <p>El formulario de contacto del sitio solicita los siguientes datos cuando decides completarlo:</p>
            <ul>
              <li>Nombre.</li>
              <li>Modalidad de atención seleccionada: mesa, domicilio, recogida en auto o consulta general.</li>
              <li>Contenido del mensaje que escribas.</li>
            </ul>
            <p>El formulario conserva esos valores temporalmente en el estado de la página mientras la utilizas. Al enviarlo, el sitio prepara un enlace con el texto codificado y te dirige a WhatsApp. El proyecto no incluye un servidor, una base de datos ni un servicio propio que reciba el formulario. Una vez sales a WhatsApp, el tratamiento que realice ese proveedor se rige también por sus propias condiciones y políticas.</p>
            <p>Si llamas por teléfono o escribes directamente por WhatsApp, los datos que decidas comunicar se tratarán en esos canales externos. El sitio no solicita números de tarjeta, claves bancarias ni datos financieros.</p>
          </>
        ),
      },
      {
        id: "finalidades",
        title: "Finalidades del tratamiento",
        content: (
          <>
            <p>La información que compartas podrá utilizarse, según el contenido de tu solicitud, para:</p>
            <ul>
              <li>Responder preguntas sobre la carta, productos, precios y disponibilidad.</li>
              <li>Atender solicitudes y coordinar pedidos o modalidades de atención.</li>
              <li>Dar respuesta a consultas, peticiones, quejas o reclamaciones.</li>
              <li>Conservar la información que resulte necesaria para cumplir obligaciones legales o atender una controversia.</li>
            </ul>
            <p>El proyecto no incorpora herramientas propias de analítica, perfiles publicitarios ni campañas automatizadas. No se declara como finalidad el envío de publicidad. Cualquier finalidad adicional deberá informarse antes de solicitar los datos y contar con la autorización que corresponda.</p>
          </>
        ),
      },
      {
        id: "autorizacion",
        title: "Autorización y tratamiento permitido",
        content: (
          <p>El tratamiento de datos personales se sujetará a los principios y reglas de la Ley 1581 de 2012 y su reglamentación compilada en el Decreto 1074 de 2015. Cuando sea exigible, la autorización debe ser previa, informada y susceptible de consulta posterior. El envío voluntario de un mensaje para recibir respuesta no autoriza por sí solo usos distintos, como publicidad o divulgación a terceros. Se respetarán las excepciones legales a la autorización y los deberes de información aplicables.</p>
        ),
      },
      {
        id: "derechos",
        title: "Derechos de los titulares",
        content: (
          <>
            <p>Como titular de los datos, puedes ejercer los derechos previstos en la ley, entre ellos:</p>
            <ul>
              <li>Conocer, actualizar y rectificar tus datos personales.</li>
              <li>Solicitar prueba de la autorización, cuando esta sea necesaria.</li>
              <li>Ser informado, previa solicitud, sobre el uso dado a tus datos.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio, una vez agotado el trámite de consulta o reclamo ante el responsable, cuando corresponda.</li>
              <li>Solicitar la revocatoria de la autorización y/o la supresión del dato en los casos y bajo las condiciones previstos en la ley.</li>
              <li>Acceder gratuitamente a tus datos personales objeto de tratamiento.</li>
            </ul>
            <p>La supresión o revocatoria no procede de manera automática en todos los casos: puede existir un deber legal o contractual de conservar determinada información, o una excepción legal aplicable.</p>
          </>
        ),
      },
      {
        id: "procedimiento",
        title: "Cómo presentar consultas y reclamos",
        content: (
          <>
            <p>Mientras se confirma un canal formal dedicado a protección de datos, el medio de contacto publicado por el establecimiento es el teléfono <a className="legal-inline-link" href={`tel:${phone}`}>{phoneLabel}</a> o <a className="legal-inline-link" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>. Indica que tu comunicación es una solicitud relacionada con datos personales e incluye tu nombre, el derecho que deseas ejercer y la información necesaria para localizar los datos. Evita enviar documentos de identidad completos o información sensible si no son indispensables para verificar la solicitud.</p>
            <p>Las consultas sobre los datos personales se atenderán dentro del término legal de diez (10) días hábiles desde su recepción. Si no es posible responder en ese plazo, se informarán los motivos y la nueva fecha de respuesta, que no podrá superar los cinco (5) días hábiles siguientes al vencimiento inicial.</p>
            <p>Los reclamos para corregir, actualizar o suprimir datos, o para solicitar la revocatoria cuando proceda, se tramitarán dentro de los quince (15) días hábiles siguientes a su recepción. Si no es posible resolverlos en ese término, se informarán los motivos y la fecha de respuesta, que no podrá superar los ocho (8) días hábiles siguientes al vencimiento del plazo inicial. Cuando el reclamo esté incompleto, se solicitará la información faltante en los términos legales.</p>
            <p>Estos términos se cuentan de acuerdo con las reglas aplicables y pueden requerir información adicional para verificar la identidad o precisar la solicitud.</p>
          </>
        ),
      },
      {
        id: "terceros",
        title: "Proveedores y servicios de terceros",
        content: (
          <>
            <p>La página solicita archivos de tipografía a Google Fonts. Esa conexión puede comunicar a la infraestructura de Google datos técnicos de la solicitud, como la dirección IP, información del navegador y datos de conexión. La página no integra Google Analytics ni Meta Pixel, ni incluye un mapa incrustado.</p>
            <p>Los enlaces a WhatsApp y Google Maps solo te llevan a esos servicios cuando decides abrirlos. Desde ese momento, sus proveedores pueden tratar información conforme a sus propias políticas. Juank Café no controla las cookies, tecnologías, condiciones ni prácticas de privacidad de esos sitios externos.</p>
            <p>No se identificó en el código revisado una transferencia desde una base de datos propia a otros destinatarios, porque esta versión no incorpora un backend ni una base de datos de contactos.</p>
          </>
        ),
      },
      {
        id: "seguridad",
        title: "Seguridad y conservación",
        content: (
          <>
            <p>El sitio estático no almacena en una base de datos propia la información introducida en el formulario. Los datos que el usuario decide enviar a WhatsApp quedan sujetos a las medidas, sistemas y políticas de ese proveedor. La seguridad de la conexión y de los dispositivos también depende del navegador, la red y el dispositivo que utilices.</p>
            <p>Cuando el establecimiento reciba datos por sus canales de atención, deberá aplicar medidas razonables para protegerlos contra pérdida, alteración, acceso o uso no autorizado y conservarlos solo durante el tiempo necesario para las finalidades informadas o para cumplir obligaciones legales. Los periodos concretos de conservación deben ser definidos y documentados por el responsable, dato que aún requiere validación.</p>
          </>
        ),
      },
      {
        id: "menores",
        title: "Niños, niñas y adolescentes",
        content: (
          <p>El sitio no está diseñado para recolectar deliberadamente datos personales de niños, niñas o adolescentes. Cualquier tratamiento eventual deberá respetar sus derechos prevalentes y las condiciones especiales previstas en la legislación colombiana.</p>
        ),
      },
      {
        id: "actualizaciones",
        title: "Cambios y relación con otras políticas",
        content: (
          <>
            <p>Esta política podrá modificarse cuando cambien las operaciones, los canales de atención, las tecnologías utilizadas o las obligaciones legales. La versión publicada deberá reflejar la fecha real de su actualización y explicar los cambios relevantes.</p>
            <p>También puedes consultar la <Link className="legal-inline-link" to="/cookies">Política de cookies</Link> y los <Link className="legal-inline-link" to="/terminos">Términos y condiciones</Link>.</p>
          </>
        ),
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Aquí se describe el uso de cookies y tecnologías similares identificado en el código de esta versión del sitio, además de las conexiones con servicios externos.",
    description:
      "Política de cookies de Juank Café: tecnologías detectadas, tipografías externas y enlaces a servicios de terceros.",
    sections: [
      {
        id: "que-son",
        title: "Qué son las cookies",
        content: (
          <p>Las cookies son pequeños archivos que un sitio o un proveedor externo puede guardar en el navegador para recordar información o reconocer solicitudes posteriores. También existen tecnologías similares, como el almacenamiento local o de sesión del navegador, que pueden cumplir funciones distintas. Su uso debe analizarse según la finalidad, el proveedor y los datos involucrados.</p>
        ),
      },
      {
        id: "auditoria",
        title: "Tecnologías identificadas en este sitio",
        content: (
          <>
            <p>En la revisión del código fuente entregado para esta versión no se encontraron instrucciones que creen cookies propias, utilicen `localStorage` o `sessionStorage`, ni carguen etiquetas de analítica o publicidad. Tampoco se identificaron Google Analytics, Meta Pixel ni otros píxeles publicitarios.</p>
            <p>Por tanto, el sitio no declara categorías propias de cookies necesarias, analíticas o publicitarias activas en esta versión. El proyecto no presenta un panel de preferencias porque no se identificó una cookie propia opcional que deba activarse o rechazarse desde la página.</p>
            <p>Esta conclusión se refiere al código de la aplicación revisado. No equivale a una auditoría de las cookies que eventualmente pueda establecer la infraestructura de alojamiento, el navegador, extensiones instaladas o servicios externos una vez abiertos.</p>
          </>
        ),
      },
      {
        id: "categorias",
        title: "Categorías de cookies",
        content: (
          <>
            <h3>Necesarias</h3>
            <p>No se identificó una cookie propia de sesión o preferencia creada por la aplicación. El alojamiento estático y las funciones básicas del navegador pueden generar registros técnicos fuera del control del código de la página.</p>
            <h3>Analíticas</h3>
            <p>No se detectó una herramienta de medición de audiencia ni una etiqueta analítica en los archivos revisados.</p>
            <h3>Publicitarias</h3>
            <p>No se detectaron píxeles publicitarios, herramientas de remarketing ni scripts de publicidad.</p>
          </>
        ),
      },
      {
        id: "terceros",
        title: "Servicios externos y conexiones",
        content: (
          <>
            <p><strong>Google Fonts:</strong> la página descarga las familias tipográficas usadas en el diseño desde servidores de Google. Esta solicitud puede exponer datos técnicos de conexión, aunque en el código revisado no se encontró una integración de analítica ni una cookie propia asociada a esa carga.</p>
            <p><strong>WhatsApp:</strong> los botones y el formulario abren WhatsApp por decisión del usuario. El formulario construye un enlace con el nombre, la modalidad elegida y el mensaje escrito; al continuar, el navegador abandona el sitio y abre el servicio externo.</p>
            <p><strong>Google Maps:</strong> los enlaces de ubicación abren una búsqueda en Google Maps cuando el usuario los selecciona. No se carga un mapa incrustado en segundo plano.</p>
            <p>Los proveedores externos pueden usar sus propias cookies y tecnologías. Consulta sus políticas antes de utilizar esos servicios. La página de Juank Café no puede administrar ni borrar cookies creadas por dominios ajenos.</p>
          </>
        ),
      },
      {
        id: "gestion",
        title: "Cómo revisar o deshabilitar cookies",
        content: (
          <p>Puedes consultar, bloquear o eliminar cookies desde la configuración de privacidad de tu navegador. La ruta exacta depende del navegador y su versión. Bloquear cookies de terceros puede afectar funciones de sitios externos que abras desde esta página. Borrar las cookies no elimina los datos que ya hayas enviado directamente a WhatsApp u otro proveedor.</p>
        ),
      },
      {
        id: "cambios",
        title: "Cambios futuros",
        content: (
          <>
            <p>Si se incorporan herramientas de analítica, publicidad, mapas incrustados, vídeos u otras tecnologías que almacenen información, se actualizará esta política y se evaluará la necesidad de informar y obtener consentimiento antes de activarlas. No se consideran instaladas herramientas que no están presentes en el código actual.</p>
            <p>Para conocer el tratamiento de datos personales, consulta la <Link className="legal-inline-link" to="/privacidad">Política de privacidad</Link>. Las condiciones de atención se encuentran en los <Link className="legal-inline-link" to="/terminos">Términos y condiciones</Link>.</p>
          </>
        ),
      },
    ],
  },
  terminos: {
    title: "Términos y condiciones",
    intro:
      "Estas condiciones describen el alcance informativo del sitio y las pautas generales para consultar productos y coordinar la atención con Juank Café.",
    description:
      "Términos y condiciones de consulta de carta, pedidos, atención en mesa, domicilio y recogida en auto de Juank Café.",
    sections: [
      {
        id: "identificacion",
        title: "Identificación y alcance del sitio",
        content: (
          <>
            <p>El sitio identifica comercialmente el establecimiento como <strong>Juank Café</strong> y publica la dirección Cra. 72m #38c-04, Kennedy, Bogotá, junto con el teléfono <a className="legal-inline-link" href={`tel:${phone}`}>{phoneLabel}</a> y un canal de contacto por <a className="legal-inline-link" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
            <p>La información entregada no confirma la razón social o nombre completo del proveedor, NIT, representante legal, dirección de notificación judicial ni correo electrónico. Esos datos son necesarios para completar la identificación exigible al proveedor, especialmente en los supuestos de comercio electrónico. Este documento permanece en revisión hasta que se validen.</p>
            <p>La página es actualmente informativa: muestra categorías y referencias de la carta, facilita el contacto y no incorpora carrito, pasarela de pago, creación automática de pedidos ni contratación electrónica dentro del propio sitio.</p>
          </>
        ),
      },
      {
        id: "productos",
        title: "Productos, disponibilidad y precios",
        content: (
          <>
            <p>La carta publicada agrupa cafés, bebidas frías y acompañamientos. Entre los nombres visibles se encuentran Cappuccino vienés, Irlandés, arte latte, Espresso, Frappés, Affogato, tortas, ponqué, empanadas, pastel de pollo y brownie con helado. La oferta puede variar según existencias y operación del establecimiento.</p>
            <p>Las imágenes son ilustrativas y corresponden al material gráfico dispuesto en el sitio; la presentación final puede variar. La publicación de un producto no garantiza por sí sola su disponibilidad en un momento determinado.</p>
            <p>La versión actual no muestra precios individuales. Debes solicitarlos antes de confirmar el pedido. El precio total y cualquier costo adicional aplicable, como domicilio, deberán informarse en pesos colombianos de manera clara antes de que aceptes la compra. La información comunicada para un pedido concreto prevalecerá sobre cualquier referencia desactualizada del sitio.</p>
          </>
        ),
      },
      {
        id: "pedidos",
        title: "Consultas y coordinación de pedidos",
        content: (
          <>
            <p>Puedes consultar o coordinar la atención mediante los siguientes canales y modalidades que aparecen en el sitio:</p>
            <ul>
              <li><strong>WhatsApp:</strong> puedes abrir una conversación y enviar una consulta o los datos del pedido. El formulario solo prepara el mensaje; debes revisarlo y enviarlo desde WhatsApp.</li>
              <li><strong>Atención en mesa:</strong> la disponibilidad y atención se confirman directamente en el establecimiento.</li>
              <li><strong>Domicilio:</strong> la cobertura, tarifa, pedido mínimo y tiempo estimado deben confirmarse para la dirección concreta antes de aceptar el pedido.</li>
              <li><strong>Recogida en auto (modalidad tipo drive-thru):</strong> el sitio la presenta como una opción, pero el procedimiento, punto de acceso y condiciones operativas deben confirmarse con el establecimiento antes de desplazarte.</li>
            </ul>
            <p>Enviar una consulta o un mensaje no significa que el pedido haya sido aceptado. La coordinación se entenderá confirmada cuando Juank Café haya verificado disponibilidad, productos, cantidades, precio total, modalidad y, cuando corresponda, dirección y tiempo estimado.</p>
          </>
        ),
      },
      {
        id: "pagos",
        title: "Medios de pago",
        content: (
          <p>El sitio no recibe pagos ni solicita datos de tarjetas o claves. Los medios de pago aceptados, el momento del pago y cualquier instrucción aplicable deben confirmarse directamente con el establecimiento antes de cerrar el pedido. No realices pagos a cuentas o números que no hayan sido confirmados por los canales oficiales publicados.</p>
        ),
      },
      {
        id: "entregas",
        title: "Domicilios, recogidas y atención en el local",
        content: (
          <p>La cobertura de domicilios, su tarifa, el pedido mínimo, los horarios, los tiempos de preparación y entrega, así como las condiciones de recogida en auto o modalidad drive-thru, no están definidos en el material del proyecto. Se informarán para cada solicitud antes de su confirmación. La atención en mesa está sujeta a la disponibilidad del establecimiento. Los horarios vigentes deben consultarse directamente.</p>
        ),
      },
      {
        id: "cambios-reclamos",
        title: "Cambios, cancelaciones y reclamaciones",
        content: (
          <>
            <p>Si necesitas modificar o cancelar una solicitud, comunícate cuanto antes con Juank Café por el mismo canal en que la coordinaste. La posibilidad de hacer cambios dependerá del estado de preparación, la naturaleza del producto y las circunstancias concretas; el establecimiento deberá informarte antes de aceptar cualquier condición aplicable.</p>
            <p>Los alimentos preparados o perecederos pueden estar comprendidos en las excepciones legales al derecho de retracto. Esa regla no elimina los derechos que correspondan por problemas de calidad, idoneidad, seguridad, información o incumplimiento. La procedencia de un cambio, devolución o reembolso se evaluará según los hechos y las normas de protección al consumidor, sin imponer renuncias generales a derechos legales.</p>
            <p>Para consultas, quejas o reclamaciones puedes llamar al <a className="legal-inline-link" href={`tel:${phone}`}>{phoneLabel}</a> o escribir a <a className="legal-inline-link" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>. Conserva, cuando exista, la confirmación del pedido y la información de la compra.</p>
          </>
        ),
      },
      {
        id: "consumidor",
        title: "Derechos del consumidor",
        content: (
          <p>Estas condiciones se interpretan de conformidad con la Ley 1480 de 2011, sus modificaciones y las demás normas colombianas aplicables. No limitan el derecho a recibir información clara y verificable, a la calidad e idoneidad de los productos, a presentar reclamaciones ni a acudir a las autoridades competentes. Las reglas especiales para ventas a distancia o comercio electrónico se aplicarán cuando la operación concreta se encuentre dentro de su ámbito.</p>
        ),
      },
      {
        id: "propiedad",
        title: "Propiedad intelectual y uso del sitio",
        content: (
          <p>Los textos, diseño, identidad gráfica, logotipos y fotografías publicados en el sitio están protegidos por las normas aplicables de propiedad intelectual. No se autoriza su reproducción o explotación comercial sin permiso del titular correspondiente, salvo los usos permitidos por la ley. Puedes compartir enlaces a las páginas públicas sin alterar su contenido ni sugerir una afiliación inexistente.</p>
        ),
      },
      {
        id: "responsabilidad",
        title: "Disponibilidad del sitio y responsabilidades",
        content: (
          <p>Se procura mantener la información del sitio disponible y actualizada, pero pueden presentarse interrupciones, errores técnicos o cambios operativos. La página no sustituye la confirmación directa de precios, existencias, horarios o condiciones de entrega. Nada de lo aquí indicado excluye responsabilidades que no puedan limitarse legalmente ni los derechos irrenunciables de los consumidores.</p>
        ),
      },
      {
        id: "ley",
        title: "Legislación aplicable y actualizaciones",
        content: (
          <>
            <p>Estos términos se rigen por las leyes de la República de Colombia. Las controversias serán atendidas por los mecanismos y autoridades competentes conforme a la legislación aplicable.</p>
            <p>Los cambios relevantes se reflejarán en esta página. Para el tratamiento de información personal, consulta la <Link className="legal-inline-link" to="/privacidad">Política de privacidad</Link>; para tecnologías de almacenamiento y conexiones externas, consulta la <Link className="legal-inline-link" to="/cookies">Política de cookies</Link>.</p>
          </>
        ),
      },
    ],
  },
};

export default function Legal({ kind }: { kind: LegalKind }) {
  const legalDocument = documents[kind];

  useEffect(() => {
    window.document.title = `${legalDocument.title} | Juank Café`;
    window.document.querySelector('meta[name="description"]')?.setAttribute("content", legalDocument.description);
  }, [legalDocument]);

  return (
    <article className="min-h-[60vh] bg-brand-paper pb-20 text-brand-accent sm:pb-24">
      <header className="border-b border-brand-secondary/20 bg-brand-primary py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="editorial-kicker">Información del establecimiento</p>
          <div className="mt-5 max-w-3xl">
            <h1 className="font-serif text-4xl leading-tight text-brand-secondary sm:text-5xl lg:text-6xl">{legalDocument.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-accent sm:text-lg">{legalDocument.intro}</p>
            {sharedNotice}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:pt-16">
        <aside className="self-start lg:sticky lg:top-28">
          <div className="hidden border-t border-brand-secondary/30 pt-4 lg:block">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary">En este documento</p>
            <nav aria-label="Índice del documento" className="flex flex-col gap-1">
              {legalDocument.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-sm py-1.5 pr-2 text-sm leading-5 text-brand-accent/85 transition-colors hover:text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
                  <span className="mr-2 font-serif text-brand-secondary/70">{String(index + 1).padStart(2, "0")}</span>{section.title}
                </a>
              ))}
            </nav>
          </div>
          <details className="border-y border-brand-secondary/30 py-3 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-secondary">Índice del documento</summary>
            <nav aria-label="Índice del documento" className="mt-3 grid gap-2 pb-1">
              {legalDocument.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="py-1 text-sm leading-5 text-brand-accent hover:text-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary">
                  <span className="mr-2 font-serif text-brand-secondary/70">{String(index + 1).padStart(2, "0")}</span>{section.title}
                </a>
              ))}
            </nav>
          </details>
        </aside>

        <div className="max-w-3xl">
          <div className="legal-content">
            {legalDocument.sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28 border-b border-brand-secondary/20 py-8 first:pt-0 sm:py-10">
                <p className="mb-2 font-serif text-sm text-brand-secondary/65">{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`${section.id}-title`} className="font-serif text-2xl leading-snug text-brand-secondary sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[0.97rem] leading-8 text-brand-accent sm:text-base">{section.content}</div>
              </section>
            ))}
          </div>

          <nav aria-label="Otros documentos legales" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-secondary/25 pt-6 text-sm font-semibold">
            <Link className="legal-inline-link" to="/privacidad">Privacidad</Link>
            <Link className="legal-inline-link" to="/cookies">Cookies</Link>
            <Link className="legal-inline-link" to="/terminos">Términos y condiciones</Link>
            <Link className="legal-inline-link" to="/#inicio">Volver al inicio</Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
