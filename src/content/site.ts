import logo from "../../assets/adarsha-yoga-horizontal.svg";
import scheduleCurrent from "../../assets/schedule-current.png";
import studioWide from "../../assets/57-DSC01123.jpg";
import studioTall from "../../assets/estudio.jpg";
import studioShelf from "../../assets/48-DSC01109.jpg";
import studioDetail from "../../assets/54-DSC01118.jpg";
import groupClass from "../../assets/SWEARxEspai Adarsha-32.jpg";
import individualSession from "../../assets/SWEARxEspai Adarsha-37.jpg";
import teamWindow from "../../assets/328-DSC01628.jpg";
import homeHero from "../../assets/home-hero.jpg";
import homeGroup from "../../assets/home-group.png";
import homeIndividual from "../../assets/home-individual.png";
import homeEcosystem from "../../assets/home-ecosystem.jpg";
import homeOficina from "../../assets/home-oficina.png";
import yogaOffice2 from "../../assets/yoga-office-2.jpg";
import equipoLaia from "../../assets/equipo-laia.avif";
import equipoLaia1 from "../../assets/equipo-laia-1.avif";
import equipoLaia2 from "../../assets/equipo-laia-2.avif";
import equipoLaia3 from "../../assets/equipo-laia-3.avif";
import kristoffBio1 from "../../assets/kristoff-bio-1.jpg";
import kristoffBio2 from "../../assets/kristoff-bio-2.avif";
import kristoffTeam from "../../assets/kristoff-team.jpg";
import equipoRaquel from "../../assets/equipo-raquel.avif";
import colaboradoresMain from "../../assets/colaboradores-main.jpg";
import colaboradoresPersonal from "../../assets/colaboradores-personal.jpg";

export const siteMeta = {
  name: "Adarsha Yoga",
  // Every page title leads with what the page is, then ends "| Adarsha Yoga",
  // so a column of search results or browser tabs reads as one site. Most sit
  // near 55-60 characters, which is about what Google shows whole; /yoga/ runs
  // longer on purpose, to name all three styles.
  //
  // Gràcia is named here and on /espacio/ because the studio sits on the
  // Gràcia–Eixample border. Both names describe where it is, and people
  // nearby use both, so naming one would give up half of them. Leave both in.
  defaultTitle: "Estudio de yoga en Gràcia · Eixample | Adarsha Yoga",
  description: "Adarsha Yoga es un estudio de yoga de barrio en Barcelona, junto al metro Verdaguer. Clases grupales, clases individuales, yoga en la oficina y alquiler de sala.",
  navigationLabel: "Navegación principal",
  homeLabel: "Adarsha Yoga inicio",
  copyright: "© Adarsha Yoga 2026",
  // Served from public/, so its URL stays the same across builds and the
  // JSON-LD can point at it with an absolute address.
  ogImage: "/og-image.jpg",
};

// Addresses on other services that the site sends people to. The booking
// widget on /horario/ points at the schedule; `events` is the workshops and
// retreats listing, which /eventos/ redirects to.
// The studio's Momoyoga page. Both schedule widgets read from it and ask for
// a different slice: /horario/ for the weekly classes, /eventos/ for the
// one-off events.
export const externalLinks = {
  momoyoga: "https://www.momoyoga.com/adarsha-yoga/",
};

export const contact = {
  pageTitle: "Contacto · Calle Girona 166, junto a Verdaguer | Adarsha Yoga",
  description:
    "Estudio de yoga en Calle Girona 166, Barcelona, junto al metro Verdaguer. Escríbenos a hello@adarshayoga.es y reserva tu primera clase con nosotros.",
  heading: "Contacto",
  addressHeading: "Dirección",
  addressLines: ["Calle Girona 166", "Entresuelo 3a", "08037 Barcelona"],
  contactHeading: "Contacto",
  intro: "Ponte en contacto con nosotros enviándonos un mail :-)",
  email: "hello@adarshayoga.es",
  instagram: { prefix: "Instagram:", label: "@adarshayoga.bcn", href: "https://www.instagram.com/adarshayoga.bcn/" },
  mapUrl: "https://www.google.com/maps?q=Adarsha%20Yoga%2C%20Carrer%20de%20Girona%20166%2C%20Barcelona&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Adarsha+Yoga%2C+Carrer+de+Girona+166%2C+Barcelona",
};

// Feeds the JSON-LD block in StructuredData.astro, which BaseLayout renders on
// every page. One @id across the site, so every page describes the same studio
// rather than announcing a new business each time.
export const localBusiness = {
  // schema.org has no YogaStudio type; SportsActivityLocation is the closest
  // valid LocalBusiness subtype.
  type: "SportsActivityLocation",
  id: "https://adarshayoga.es/#studio",
  // Geocoded from "166-168, Carrer de Girona, 08037 Barcelona" (OpenStreetMap).
  geo: { latitude: 41.39977, longitude: 2.16474 },
  postalCode: "08037",
  locality: "Barcelona",
  region: "Barcelona",
  country: "ES",
  // Per class: a ten-class bono works out at 15 € and a drop-in is 20 €.
  priceRange: "€15–€20",
  currency: "EUR",
  // The hours the studio is open, which are the hours classes run. These
  // DUPLICATE the schedule on /horario/ and will go stale the moment the
  // timetable moves, so change them together. Raquel's Conciencia Pélvica is
  // included: the studio is open then, whoever bills the class.
  openingHours: [
    { days: ["Monday"], opens: "08:30", closes: "09:30" },
    { days: ["Monday"], opens: "18:45", closes: "20:00" },
    { days: ["Tuesday", "Thursday"], opens: "09:30", closes: "10:45" },
    { days: ["Tuesday", "Thursday"], opens: "17:45", closes: "20:30" },
    { days: ["Wednesday"], opens: "10:00", closes: "11:15" },
    { days: ["Wednesday"], opens: "18:45", closes: "21:15" },
    { days: ["Friday"], opens: "17:15", closes: "18:15" },
  ],
  // Other profiles that describe the same studio. The audit also asks for the
  // ClassPass, Wellhub and Union Sport & Culture listings; add their URLs here
  // once they are to hand, and they go into sameAs with the rest.
  profiles: ["https://www.momoyoga.com/adarsha-yoga/"],
};

export const images = {
  logo,
  schedule: scheduleCurrent,
  studioWide,
  studioTall,
  studioShelf,
  studioDetail,
  groupClass,
  individualSession,
  teamWindow,
  homeHero,
  homeEcosystem,
  yogaOffice2,
  colaboradoresMain,
  colaboradoresPersonal,
};

export const bannerCopy = {
  text: "🪷 ¡Bienvenida/o! ¿Eres alumna/o nueva/o? Consulta nuestro horario y reserva tu primera clase aquí 🌞\u00a0→",
  // #horario, the schedule at the top of the page, not #reserva, the booking
  // widget below it: the banner's own words send people to the schedule first.
  href: "/horario/#horario",
};

export const navItems = [
  { href: "/yoga/", label: "YOGA" },
  { href: "/horario/", label: "Horario" },
  { href: "/eventos/", label: "Eventos" },
  { href: "/oficina/", label: "Oficina" },
  { href: "/equipo/", label: "Equipo" },
  { href: "/espacio/", label: "Espacio" },
  { href: "/contacto/", label: "Contacto" },
];

export const homeCopy = {
  // index.astro splits this on the first sentence: "Adarsha Yoga." takes a line
  // of its own and the rest follows. Keep the full stop after the name.
  title: "Adarsha Yoga. Un refugio de presencia y calma en medio de la ciudad.",
  subtitle: "Un estudio de barrio donde te conocemos por tu nombre. Una práctica que se adapta a quien está en la sala.",
  body: [
    "Te acompañamos para que conectes contigo mismo y evoluciones a través de la práctica de yoga.",
  ],
  scheduleCta: "Ver horario",
  scheduleHref: "/horario/#horario",
  reservaCta: "Reserva tu primera clase",
  reservaHref: "/horario/#reserva",
  practiceHeading: "¿Cómo te gustaría practicar?",
  practiceOptions: [
    { title: "Clases grupales", body: "Hatha Vinyasa, Hatha dinámico, Yoga Integral, Yin somático, Fuerza y movilidad.", cta: "Ver clases", href: "/yoga/", image: homeGroup, alt: "Clases grupales de yoga en Adarsha Yoga, Barcelona" },
    { title: "Clases individuales", body: "Una sesión puntual o un acompañamiento continuo, a tu medida.", cta: "Saber más", href: "/yoga/#individuales", image: homeIndividual, alt: "Clase individual de yoga en Adarsha Yoga, Barcelona" },
    { title: "Yoga en la oficina", body: "Para equipos que pasan el día sentados.", cta: "Saber más", href: "/oficina/", image: homeOficina, alt: "Yoga en la oficina con Adarsha Yoga" },
  ],
  // The band that introduces what else happens in the studio. At the moment
  // that is Raquel's classes, which live on /colaboradores/.
  alsoTitle: "En Adarsha también",
  alsoBody: [
    "Raquel Jaroslavsky, una terapeuta corporal especializada en suelo pélvico y sexualidad.",
    "Descubre sus clases de Movimiento y Conciencia Pélvica para relajar, flexibilizar y tonificar la musculatura del suelo pélvico.",
  ],
  alsoCta: "Raquel — Conciencia Pélvica",
  alsoHref: "/colaboradores/",
};

export const horarioCopy = {
  heading: "Horario",
  pricesHeading: "Precios",
  pageTitle: "Horario, precio y reservas yoga | Adarsha Yoga",
  description:
    "Consulta el horario semanal de clases de yoga en Adarsha Yoga, reserva tu plaza online y descubre nuestros bonos y precios. Junto al metro Verdaguer, Barcelona.",
};

// /eventos/ is the workshops, talleres and formaciones that are not part of
// the weekly timetable. The page holds no list of its own: the Momoyoga widget
// draws it, so the studio adds an event in one place and it appears here.
export const eventosCopy = {
  heading: "Eventos",
  pageTitle: "Workshops, talleres y eventos de yoga en Barcelona | Adarsha Yoga",
  description:
    "Workshops, talleres y formaciones de yoga en Adarsha Yoga, junto al metro Verdaguer en Barcelona. Consulta los próximos eventos y reserva tu plaza online.",
  // Shown while the widget loads and in its place if it never does, so the page
  // is never a blank band. The link is the same listing the widget draws.
  fallback: "Cargando los próximos eventos…",
  fallbackLinkLabel: "Ver los eventos en Momoyoga",
};

export const yogaCopy = {
  pageTitle: "Clases de Hatha Vinyasa, Yin y Yoga Integral en Barcelona | Adarsha Yoga",
  description:
    "Clases de Hatha Vinyasa, Yin Yoga y Yoga Integral en Barcelona, junto al metro Verdaguer. Yoga como práctica: ajustes físicos, clases que se adaptan a ti y progresión.",
  introTitle: "Practica yoga en Adarsha",
  introQuestion: "¿Estás buscando un estudio donde sentirte como en casa?",
  // Copy still to come is left in [brackets], as the refresh brief has it, and
  // shows on the page as it stands. Search for "[" in this object to find it.
  differentTitle: "Yoga como práctica",
  differentIntro: [
    "Hoy es fácil encontrar yoga como ejercicio: empieza cuando desenrollas la esterilla y termina cuando la recoges. Por otro lado, una práctica no tiene horario ni dirección; se extiende a toda la vida. En Adarsha volvemos a eso.",
    "Vas a trabajar el cuerpo, y según la clase, mucho. Pero ese trabajo no va solo: es parte de un camino hacia más equilibrio, más claridad y más calma.",
  ],
  pillars: [
    {
      title: "Ajustes físicos",
      body: [
        "A veces crees estar haciendo algo que en realidad no haces. O la instrucción no se traduce en movimiento. Ahí el tacto llega donde las palabras no llegan.",
        "Observamos tu cuerpo y, cuando un ajuste puede transformar la postura o desbloquear un movimiento, ajustamos: con propósito, con cuidado y con la alineación y la respiración como guía. Si prefieres practicar sin ajustes, dínoslo al inicio de la clase y lo respetamos.",
      ],
    },
    {
      title: "Clases que se adaptan a la sala",
      body: [
        "[PLACEHOLDER]",
        "Si tienes una lesión o eres nuevo en la práctica, te damos modificaciones para que la postura se adapte a ti. Si tu cuerpo está abierto y fuerte y quieres profundizar, tenemos variantes avanzadas para llevarte más allá.",
      ],
    },
    {
      title: "Progresión que se nota",
      body: ["[PLACEHOLDER]"],
    },
  ],
  classesTitle: "Clases",
  // One entry per class we teach, in the order the accordion should list them,
  // which is not the schedule's. Movimiento y Conciencia Pélvica is on the
  // schedule too but is Raquel's own class, billed separately, and lives on the
  // Colaboradores page instead. Hatha Vinyasa, Yoga Integral and Yin Yoga
  // Somático keep the descriptions this section used to list. Every body is a
  // single paragraph at the moment, but one may be an array when the copy runs
  // longer; the accordion renders one <p> per entry.
  //
  // `id` is the fragment the accordion item answers to, so a style can be
  // linked to directly: /yoga/#yin-yoga. Changing one breaks any link already
  // pointing at it.
  classes: [
    {
      id: "hatha-vinyasa",
      title: "Hatha Vinyasa (nivel I y II)",
      body: "Una práctica dinámica y de mayor intensidad. Sincronizamos movimiento y respiración en secuencias fluidas que desafían la fuerza y la flexibilidad, para llevar tu práctica a otro nivel. Manteniendo la atención en la respiración, llevamos la mente a un estado de calma activa y profunda para fortalecer el sistema nervioso.",
    },
    {
      // Written in English because the class itself is taught in English, as
      // is Hatha Fuerza below. The three Spanish classes stay in Spanish.
      id: "dynamic-hatha",
      title: "Dynamic Hatha (English)",
      body: "We move across dynamic sequences and slow holds to develop physical strength, awareness of posture and connection to the breath. We pay special attention to alignment, teaching your body to adapt and respond to each pose, so you can carry what you learn off the mat. Taught in English, all levels welcome.",
    },
    {
      id: "yoga-integral",
      title: "Yoga Integral",
      body: "Una modalidad más suave para quienes buscan un ritmo pausado y consciente, ya sea que busques una clase para aprender las bases, o practicar durante el embarazo, o en la etapa de la madurez. Nos enfocamos en técnicas de respiración, posturas estables, aprender la alineación y relajación profunda para restaurar la vitalidad y la movilidad de todo el cuerpo.",
    },
    {
      id: "yin-yoga",
      title: "Yin Yoga Somático (presencial/online)",
      body: "Diseñada para soltar el ritmo diario, restaurar el sistema nervioso y reencontrar el equilibrio interior. Combinamos técnicas de respiración suave con movimiento somático y posturas restaurativas para liberar tensiones y acceder a un estado meditativo.",
    },
    {
      // Taught in English with Spanish support, which the closing line says in
      // both languages, the way the class is announced.
      id: "hatha-fuerza",
      title: "Hatha Fuerza: Strength & Mobility",
      body: "A class designed to strengthen your yoga practice. We bring a special focus to the core and the mobility and articulation of the shoulders and spine. Develop strength that carries over beyond the mat and into everyday life. Taught in English, con apoyo en español."
    },
  ],
  membershipTitle: "Qué incluye tu mensualidad",
  membership: [
    { title: "Tutoría inicial (30 min)", body: "Antes de empezar, una sesión individual para saber de dónde partes: lesiones, objetivos, qué buscas en la práctica." },
    { title: "Comunidad", body: "[Sunday Yoga Club placeholder]" },
    { title: "Descuento en talleres", body: "[\"precio reducido\"]" },
    { title: "Sesión de seguimiento anual", body: "Una vez al año, 30 minutos para revisar tu práctica y profundizar." },
  ],
  membershipCta: "Ver precios",
  membershipHref: "/horario/#precios",
  prices: [
    {
      title: "Clases Grupales",
      items: [
        "Mensualidad 5 clases / mes: 65\u00a0€",
        "Mensualidad clases ilimitadas: 90\u00a0€",
        "Clase suelta: 20\u00a0€",
        "Bono 3 clases: 50\u00a0€",
        "Bono 10 clases: 150\u00a0€",
      ],
    },
    {
      title: "Sesiones Individuales",
      items: [
        "Sesión individual: 60\u00a0€",
        "Bono 4 sesiones: 180\u00a0€",
        "Bono 10 sesiones: 400\u00a0€",
      ],
    },
  ],
  individualTitle: "Clases individuales adaptadas a tu cuerpo",
  individualIntro: "Si buscas un acompañamiento exclusivo para integrar el yoga en tu vida según tus propios ritmos y objetivos, hemos diseñado dos formas de trabajar juntas/os.",
  individualOptions: [
    { title: "Sesión Individual Estratégica", body: "Ideal para resolver dudas puntuales, si hay algun grupo de posturas que necesitas aprender de forma más profunda o diseñar una secuencia personalizada que puedas practicar de forma autónoma en casa." },
    { title: "Programa de Práctica Personal", body: "Un proceso de acompañamiento profundo con sesiones semanales o quincenales. Trabajaremos de forma constante en tus metas para que experimentes los beneficios del yoga de manera integral y consciente." },
  ],
  individualClosing: "¿Quieres empezar el programa? Empecemos con una sesión para conocernos, escuchar tus necesidades y trazar el camino de tu práctica.",
  // The teaser that closes /yoga/. The full offer is on /oficina/.
  officeTeaserTitle: "Yoga en la oficina",
  officeTeaser:
    "Llevamos el yoga, la meditación y la respiración consciente a tu oficina. Para equipos que pasan el día sentados: menos tensión, más movilidad y más claridad mental.",
  officeTeaserCta: "Saber más",
  officeTeaserHref: "/oficina/",
};

// /oficina/: yoga, meditation and breathing for companies. This copy used to
// close /yoga/, which now carries a short teaser that links here.
export const oficinaCopy = {
  pageTitle: "Yoga en la oficina para empresas en Barcelona | Adarsha Yoga",
  description:
    "Yoga, meditación y respiración consciente en tu oficina, en Barcelona. Clases para empresas que cuidan la salud física y mental de su equipo.",
  heading: "Yoga en la oficina para la salud física y mental de tu equipo",
  body: [
    "La integración del yoga, la meditación y la respiración consciente en la oficina transforma el entorno laboral en un espacio de concentración y bienestar.",
    "Al liberar las tensiones del sedentarismo y regular el sistema nervioso, el equipo recupera la movilidad física y la claridad mental necesarias para afrontar cada reto.",
    "Cuidar la salud integral de los trabajadores cultiva una cultura de presencia y vitalidad.",
  ],
  cta: "Solicita más información",
  ctaHref: "/contacto/#contacto",
  imageAlt: "Yoga en la oficina para empresas",
};

export const footerCopy = {
  tagline: "Un refugio de yoga, presencia y calma en Barcelona.",
  // Confirmed with the studio on 2026-11-02. Google does not feed these to the
  // site, so bump them by hand when the listing moves.
  googleReviews: {
    rating: "5,0",
    count: 55,
    prefix: "en Google",
    suffix: "reseñas",
  },
  columns: {
    visit: {
      heading: "Dónde estamos",
      metro: "Al lado del metro Verdaguer (L4/L5)",
      mapCta: "Ver en el mapa",
    },
    contact: {
      heading: "Contacto",
    },
    follow: {
      heading: "Síguenos",
    },
  },
};

export const espacioCopy = {
  pageTitle: "Sala de yoga para eventos en Gràcia · Eixample | Adarsha Yoga",
  description:
    "Alquila una sala de yoga de 50\u00a0m\u00b2 con luz natural junto al metro Verdaguer, en Barcelona. Ideal para formaciones, talleres, terapias y sesiones individuales.",
  heading: "¿Buscas un lugar donde desarrollar tus proyectos?",
  body: [
    "Adarsha Yoga es un estudio de 50\u00a0m\u00b2 con luz natural y totalmente equipado, junto al metro Verdaguer (L4/L5/T4). Abrimos nuestras puertas a profesionales holísticos, formadores de crecimiento personal y terapeutas del movimiento.",
  ],
  uses: [
    "Formaciones intensivas de fin de semana",
    "Workshops y talleres",
    "Constelaciones familiares",
    "Sesiones individuales",
    "Clases regulares en los horarios disponibles",
  ],
  emailPrefix: "Escríbenos en",
  emailSuffix: "para reservas y más info.",
  details: {
    addressHeading: "Dirección",
    addressLines: ["Calle Girona 166, entresuelo 3", "Barcelona"],
    contactHeading: "Contacto",
    visitsHeading: "Visitas espacio",
  },
  visits: ["Lunes 18:15 - 18:30", "Jueves 13:15 - 13:30", "Viernes 18:30 - 18:45"],
};

export const colaboradoresCopy = {
  // The page keeps the /colaboradores/ URL, so the title is where its subject
  // is said: what happens here is Raquel's pelvic-floor work, and nobody
  // searches for "colaboradores".
  pageTitle: "Suelo pélvico y movimiento consciente en Barcelona | Adarsha Yoga",
  description:
    "Movimiento y Conciencia Pélvica con Raquel Jaroslavsky en Adarsha Yoga: sesiones para relajar, flexibilizar y tonificar el suelo pélvico en Barcelona.",
  title: "Nuestros colaboradores",
  subtitle: "Conoce otras actividades que tienen lugar en Adarsha Yoga",
  activity: "Movimiento & Conciencia Pélvica",
  teacher: "con Raquel Jaroslavsky",
  question: "¿Te sientes desconectada de tu pélvis?",
  body: [
    "Tu pelvis es el centro de tu vitalidad: un espacio de calma, fuerza y placer esperando a ser habitado.",
    "A menudo, esta parte de nuestro cuerpo queda olvidada o cargada de tensiones y memorias que no siempre sabemos cómo liberar.",
    "Las sesiones de Movimiento y Conciencia Pélvica nacen para transformar esa sensación en una relación más cercana, sentida y vital con tu propio cuerpo, a través del movimiento y la relajación en un clima de seguridad y sin juicios.",
    "Raquel, terapeuta corporal especializada en suelo pélvico y sexualidad, te acompañará a redescubrir tu anatomía y a despertar tu pelvis. A través de ejercicios diseñados para relajar, flexibilizar y tonificar la musculatura del suelo pélvico, no solo mejoraremos tu salud física, sino que abriremos la puerta a nuevos lenguajes para reconectar con el deseo, la energía vital y un erotismo más consciente.",
    "Regálate un espacio para habitarte de forma plena y recuperar tu bienestar más profundo.",
  ],
  scheduleHeading: "Horarios",
  schedule: "Sesiones grupales: Miércoles 10:00 - 11:15 / Martes y Jueves 17:45 - 19:00",
  booking: { prefix: "Reservas:", email: "jarosraquel@gmail.com" },
  pricesHeading: "Sesiones de Movimiento y Conciencia Pélvica",
  prices: [
    "Sesión suelta grupal: 35\u00a0€",
    "Sesión individual: 50\u00a0€",
    "Cuota trimestral de 2 sesiones al mes: 150\u00a0€",
    "Cuota trimestral de 4 sesiones al mes: 300\u00a0€",
  ],
  personalizedHeading: "Acompañamiento personalizado",
  personalizedLead: "La constancia es la clave para liberar bloqueos, ganar movilidad y sentir cambios reales.",
  personalizedIntro: "Si buscas un espacio más íntimo o trabajar de forma específica en tus necesidades, también ofrecemos:",
  personalizedOptions: [
    { title: "Sesiones Individuales", body: "Un espacio privado para profundizar en tu proceso y a tu ritmo." },
    { title: "Sesiones Dúo", body: "Un encuentro para soltar tensiones y reconectar en compañía (amiga, pareja o familiar)." },
    { title: "Experiencias para Grupos", body: "Talleres diseñados para sentir la pelvis y despertar la energía vital de forma colectiva." },
  ],
};

export const equipoCopy = {
  pageTitle: "Profesores de yoga en Barcelona | Adarsha Yoga",
  description:
    "Conoce al equipo de Adarsha Yoga: Laia Espejo, Kristoff Malejczuk y Raquel Jaroslavsky. Profesores cercanos que acompañan tu práctica a tu propio ritmo.",
  name: "Adarsha",
  sanskrit: "Ādarśa (आदर्श)",
  meaning: ['"Adarsha" significa "espejo" en sánscrito.', "Adarsha Yoga: un estudio para observarse y transformarse desde adentro hacia fuera."],
  heading: "Quiénes somos",
  intro: "Cada uno de nosotros aporta su propia experiencia, sensibilidad y estilo, pero compartimos un mismo propósito: acompañarte en tu proceso con cuidado, respeto y de forma cercana.",
  invite:
    "¿Te dedicas al movimiento consciente o a la salud holística? ¿Quieres formar parte de nuestro equipo de colaboradores? Ponte en contacto con nosotros; nos encantaría escuchar de ti.",
  members: [
    { name: "Laia Espejo Dotti", role: "Profesora de Yoga", title: "Fundadora", href: "/bio-laia/", image: equipoLaia },
    { name: "Kristoff Malejczuk", role: "Profesor de Yoga", title: "Director de operaciones", href: "/bio-kristoff/", image: kristoffTeam },
    { name: "Raquel Jaroslavsky", role: "Profesora de Movimiento y Conciencia Pélvica", title: "Colaboradora", href: "/colaboradores/", image: equipoRaquel },
  ],
};

export const bioCopy = {
  laia: {
    pageTitle: "Sobre Laia | Adarsha Yoga",
    description:
      "Laia Espejo Dotti, fundadora de Adarsha Yoga y profesora de Hatha Vinyasa. Su camino en el yoga, sus formaciones y su manera de acompañar la práctica.",
    heading: "Sobre Laia.",
    sections: [
      {
        image: equipoLaia1,
        imageAlt: "Laia Espejo Dotti sentada en el estudio",
        paragraphs: [
          "El yoga es un camino para la búsqueda del infinito en el interior, y esa búsqueda es la que da propósito a mi vida.",
          "Todo lo relacionado con el yoga ha despertado en mí una enorme curiosidad, desde muy temprana edad.",
          "Mi primer contacto con el Hatha Yoga fue de bien pequeña cuando mi padre desaparecía misteriosamente en su habitación a “hacer la práctica”... y también tuve la gran suerte de que me llevaba de vez en cuando a practicar con su profesor de yoga Joan Enreig, que enseñaba Vini Yoga según la tradición de Desikachar, con un enfoque muy terapéutico e individualizado.",
          "A los quince años, mi interés por la práctica ya era firme y comencé a practicar con Joan cada semana. Desde el inicio, me transmitió una enseñanza que me marcó profundamente y que siempre me acompañará: “todo está en la respiración”.",
        ],
      },
      {
        image: equipoLaia2,
        imageAlt: "Laia Espejo Dotti practicando yoga",
        paragraphs: [
          "Siempre he tenido una gran sensibilidad y, en muchos momentos, eso hacía que mi mente se llenara de pensamientos que me resultaban difíciles de manejar.",
          "Durante años, practiqué la misma secuencia de asanas en mi habitación, sin expectativas y con entrega.",
          "En el sentir de mi respiración encontré la calma que tanto necesitaba. El yoga se convirtió en mi refugio, en mi lugar seguro, en el pilar espiritual de mi vida.",
          "En 2020, realicé mi primera formación de Hatha Vinyasa de 200h en la Escuela Mandiram y una formación de 50h de Filosofía del Yoga por Naren Herrero. Por primera vez en mi vida tenía la sensación de estar estudiando algo que me interesaba profundamente. Fue en ese momento cuando me di cuenta de quería ser profesora de yoga.",
          "Entonces descubrí la práctica de Ashtanga Vinyasa, me cautivó el estilo Mysore: la autopráctica, la autonomia, el silencio. Después de un tiempo hice un intensivo con Petri Räisänen en Purple Valley Yoga Tenerife, donde me interesaron sobre todo sus ajustes terapéuticos, un día dijo \"el yoga es autoterapia\".",
          "En 2022, completé 200h de formación de Yoga Integral en Filosofía, Psicología del Yoga y Practicas Avanzadas de Observación. Eso fue con Tomás Zorzo, uno de los profesores pioneros en la introducción del Ashtanga Vinyasa en España. Durante esta formación experiencial volví a conectar con mis raíces de Vini Yoga, me di cuenta del poder que tiene la práctica simple y de lo mucho que disfrutaba de practicar sin expectativas. También de la importancia de bailar y explorar caminos más somáticos.",
        ],
      },
      {
        image: equipoLaia3,
        imageAlt: "Retrato de Laia Espejo Dotti",
        paragraphs: [
          "En mayo de 2022 fundé Adarsha Yoga, un estudio de yoga holístico. Este proyecto nació de mi necesidad de encontrar un lugar donde impartir todas mis clases, para poder acompañar el proceso de mis alumnos de forma más cercana, además de la ilusión de crear una red multidisciplinar dentro de la rama del yoga y terapias holísticas.",
          "Ese mismo año empecé a practicar con mi querido profesor Aleix Griñó. Marcó un antes y un después en mi práctica personal: a través del módulo \"Lo sutil mueve lo denso\", descubrí que lo que más me interesa son los aspectos energéticos de la práctica.",
          "Actualmente estoy practicando Hatha Vinyasa al estilo Mysore en Viveka Yoga Shala con mis profesores Sebastian Arbondo y Aleix Griñó, con los que he realizado la Formación de Profesores Hatha Vinyasa Yoga Nivel Intermedio.",
          "Paralelamente, estoy cursando la formación de Terapia Gestalt en la Escuela Gestalt Barcelona, que después de tres intensos años finalizaré en Diciembre 2026. Para así profundizar en la psicología moderna y el potencial del crecimiento humano, podré acompañar mejor el proceso emocional y desarrollo personal de mis alumnos.",
        ],
      },
    ],
    signoff: "¡Namasté!",
    instagram: { label: "@laiaespejodotti", href: "https://www.instagram.com/laiaespejodotti/" },
  },
  kristoff: {
    pageTitle: "Sobre Kristoff | Adarsha Yoga",
    description:
      "Kristoff Malejczuk, profesor de Hatha Vinyasa en Adarsha Yoga. De ingeniero en California a profesor de yoga en Barcelona: su recorrido y su enfoque.",
    heading: "Sobre Kristoff.",
    sections: [
      {
        image: kristoffBio1,
        imageAlt: "Kristoff Malejczuk enseñando yoga",
        paragraphs: [
          "En 2019 empecé a practicar yoga en la sede de Apple en California, por invitación de una amiga. A principios de 2021, el yoga asana se había convertido en mi única forma de ejercicio físico.",
          "En 2022 me uní a HAUM Studios en San Francisco. Mi práctica dio grandes saltos y pronto quise profundizar más. Esto me llevó a inscribirme en una formación de profesorado de 200 horas en Hatha Vinyasa con Danni Pomplun e Yvonne Kingsley, cofundadores de HAUM. Esta experiencia me abrió el corazón: ¡un profundo cambio de paradigma tras una vida operando desde la cabeza! Terminé la formación en 2023, y fue la chispa que me llevó a dejar mi trabajo de ingeniero a principios de 2024.",
        ],
      },
      {
        image: kristoffBio2,
        imageAlt: "Kristoff Malejczuk practicando una inversión",
        paragraphs: [
          "Mi siguiente aventura fue un año mochileando por Latinoamérica. En 2025 me encontré con Gabriel, un alto ejemplo de Karma Yoga en forma de dueño de hostal en los Andes colombianos. Reconociéndolo como maestro, pasé un mes de servicio en su hostal, Yambolombia. Después me dirigí a la selva amazónica, donde conocí a otra gran maestra, la Madre Selva.",
          "En otoño de 2025 me mudé a Barcelona y empecé a practicar Hatha Yoga al estilo Mysore con Aleix Griñó. Desde 2026 doy clases con regularidad en Adarsha Yoga. En otoño de 2026 completé un retiro de meditación Vipassana de 10 días. Actualmente estoy cursando mi segunda formación de profesorado de 200 horas, en Viveka Yoga Shala, con sus cofundadores Aleix Griñó y Sebas Arbondo.",
        ],
      },
    ],
    website: { label: "www.thestudio.uno", href: "https://thestudio.uno/" },
    instagram: { label: "@malejczuk", href: "https://www.instagram.com/malejczuk/" },
    english: {
      heading: "About Kristoff.",
      headingNote: "(English version)",
      paragraphs: [
        "In 2019, I started practicing yoga at Apple’s headquarters in California, at the invitation of a friend. By the beginning of 2021, yoga asana had become my only form of exercise.",
        "In 2022, I joined HAUM Studios in San Francisco. I experienced big leaps in my practice and was soon looking to go deeper. This led me to enroll in a 200-hour Hatha Vinyasa teacher training under Danni Pomplun and Yvonne Kingsley, co-founders of HAUM. The training was heart-opening — a profound paradigm shift after a life of operating from head-level. I completed the training in 2023. This became the catalyst for me leaving my engineering job in early 2024.",
        "My next adventure was a year of backpacking through Latin America. In 2025, I stumbled across Gabriel, a high practitioner of Karma Yoga in the form of a hostel owner in the Colombian Andes. Recognizing him as a teacher, I spent one month of service at his hostel, Yambolombia. Next, I headed to the Amazon jungle, where I met another master teacher, la Madre Selva.",
        "In fall 2025, I moved to Barcelona and started practicing Mysore-style Hatha Yoga under Aleix Griñó. Since 2026, I’ve been teaching regularly at Adarsha Yoga. In fall 2026, I completed a 10-day Vipassana meditation retreat. I’m currently enrolled in my second 200-hour teacher training, at Viveka Yoga Shala with its co-founders, Aleix Griñó and Sebas Arbondo.",
      ],
    },
  },
};
