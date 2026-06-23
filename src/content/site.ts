import logo from "../../assets/espai adarsha.png";
import scheduleCurrent from "../../assets/schedule-current.avif";
import studioWide from "../../assets/57-DSC01123.jpg";
import studioShelf from "../../assets/48-DSC01109.jpg";
import studioWindow from "../../assets/1-DSC01027.jpg";
import studioDetail from "../../assets/54-DSC01118.jpg";
import studioEmpty from "../../assets/SWEARxEspai Adarsha-74.jpg";
import groupClass from "../../assets/SWEARxEspai Adarsha-32.jpg";
import floorPractice from "../../assets/SWEARxEspai Adarsha-39.jpg";
import meditation from "../../assets/SWEARxEspai Adarsha-50.jpg";
import teamWindow from "../../assets/328-DSC01628.jpg";
import homeHero from "../../assets/home-hero.jpg";
import homePractice from "../../assets/home-practice.jpg";
import homeGroup from "../../assets/home-group.png";
import homeIndividual from "../../assets/home-individual.png";
import homeEcosystem from "../../assets/home-ecosystem.jpg";
import homeOficina from "../../assets/home-oficina.png";
import yogaIndividual from "../../assets/yoga-individual.jpg";
import yogaOffice1 from "../../assets/yoga-office-1.jpg";
import yogaOffice2 from "../../assets/yoga-office-2.jpg";
import equipoLaia from "../../assets/equipo-laia.avif";
import equipoKristoff from "../../assets/equipo-kristoff.avif";
import equipoRaquel from "../../assets/equipo-raquel.avif";
import colaboradoresMain from "../../assets/colaboradores-main.jpg";
import colaboradoresPersonal from "../../assets/colaboradores-personal.jpg";

export const siteMeta = {
  name: "Espai Adarsha",
  defaultTitle: "Estudio de Yoga en Gràcia y Eixample | Clases Reducidas | Espai Adarsha",
  description: "Espai Adarsha es un estudio íntimo de yoga y movimiento en Barcelona, con grupos reducidos, atención personalizada y alquiler de sala para proyectos holísticos.",
  navigationLabel: "Navegación principal",
  homeLabel: "Espai Adarsha inicio",
  copyright: "© Espai Adarsha 2026",
};

export const contact = {
  pageTitle: "Espai Adarsha | Barcelona",
  heading: "Contacto",
  addressHeading: "Dirección",
  addressLines: ["Calle Girona 166", "Entresuelo 3a", "08037 Barcelona"],
  contactHeading: "Contacto",
  intro: "Ponte en contacto con nosotros enviándonos un mail :-)",
  email: "espaiadarsha@gmail.com",
  instagram: { prefix: "Instagram:", label: "@espaiadarsha", href: "https://www.instagram.com/espaiadarsha/" },
  mapUrl: "https://www.google.com/maps?q=Carrer%20de%20Girona%20166%2C%20Barcelona&output=embed",
};

export const images = {
  logo,
  schedule: scheduleCurrent,
  studioWide,
  studioShelf,
  studioWindow,
  studioDetail,
  studioEmpty,
  groupClass,
  floorPractice,
  meditation,
  teamWindow,
  homeHero,
  homePractice,
  homeEcosystem,
  yogaIndividual,
  yogaOffice1,
  yogaOffice2,
  colaboradoresMain,
  colaboradoresPersonal,
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/yoga/", label: "YOGA" },
  { href: "/equipo/", label: "Equipo" },
  { href: "/contacto/", label: "Contacto" },
  { href: "/espacio/", label: "Espacio" },
];

export const homeCopy = {
  title: "Espai Adarsha. Un refugio de yoga, conexión con el cuerpo y paz en medio de la ciudad.",
  subtitle: "Somos un estudio íntimo, con grupos reducidos y atención personalizada.",
  body: [
    "Donde la relación entre profesor y alumno es el centro de todo.",
    "Te acompañamos para que conectes contigo mismo a través de la practica de yoga y evoluciones a tu ritmo.",
  ],
  practiceTitle: "El valor de una práctica cuidada",
  practiceBody: [
    "Nuestro propósito es ofrecerte un espacio donde puedas reconectarte contigo mismo, descubrir tu fuerza interior y cultivar la calma que tu mente y tu corazón necesitan. Cada práctica de yoga es una oportunidad para transformar tu cuerpo, equilibrar tus emociones y nutrir tu espíritu con herramientas que te acompañarán en tu día a día.",
    "El ritmo actual a menudo nos desconecta de nuestras necesidades reales. El yoga, entendido como una disciplina de cuidado integral, es una herramienta milenaria para recuperar nuestro centro a través del cuerpo, la respiración y la concentración.",
    "En Espai Adarsha la enseñanza no es genérica. Nos alejamos de las sesiones masivas para ofrecer un enfoque personalizado donde la práctica se adapta a tu momento actual, y no al revés.",
  ],
  scheduleCta: "HORARIO CLASES",
  approachCta: "Nuestro enfoque",
  practiceHeading: "¿Cómo te gustaría practicar yoga?",
  practiceOptions: [
    { title: "Clases presenciales", body: "Profundiza en tu práctica de yoga con clases reducidas", cta: "Ver clases", href: "/yoga/", image: homeGroup, alt: "Clases grupales" },
    { title: "Yoga en tu oficina", body: "Clases de yoga para empresas para el bienestar de tu equipo", cta: "Saber más", href: "/yoga/#empresas", image: homeOficina, alt: "Yoga en la oficina" },
    { title: "Sesiones individuales", body: "Practica yoga de forma personalizada", cta: "Saber más", href: "/yoga/#individuales", image: homeIndividual, alt: "Clases particulares" },
  ],
  ecosystemTitle: "¿Quieres conocer nuestro ecosistema?",
  ecosystemBody:
    "Descubre los terapeutas con los que colaboramos, como las sesiones de Movimiento y Conciencia Pélvica para relajar, flexibilizar y tonificar la musculatura del suelo pélvico.",
  ecosystemFoot:
    "Si estás buscando casa para tu proyecto y quieres formar parte de nuestro equipo de colaboradores ponte en contacto con nosotros. Espai Adarsha es más que un estudio, ¡es una red de terapeutas independientes!",
  ecosystemCta: "Nuestros colaboradores",
};

export const yogaCopy = {
  pageTitle: "Alcanza tu bienestar con las clases de Hatha Vinyasa Yoga en Espai Adarsha",
  introTitle: "Practica yoga en Adarsha",
  introQuestion: "¿Estás buscando un estudio donde sentirte como en casa?",
  rhythmTitle: "Tu práctica, tu ritmo",
  intro:
    "En Espai Adarsha nos alejamos de las sesiones masivas, para ofrecer un enfoque personalizado donde la práctica se adapta a ti y a tu momento actual.",
  styles: [
    {
      title: "Hatha Vinyasa Yoga",
      body: "Una práctica dinámica y de mayor intensidad. Sincronizamos movimiento y respiración en secuencias fluidas que desafían la fuerza y la flexibilidad, para llevar tu practica a otro nivel. Manteniendo la atención en la respiración, llevamos la mente a un estado de calma activa y profunda para fortalecer el sistema nervioso.",
    },
    {
      title: "Yoga Integral",
      body: "Una modalidad más suave para quienes buscan un ritmo pausado y consciente, ya sea que busques una clase para aprender las bases, o practicar durante el embarazo, o en la etapa de la madurez. Nos enfocamos en técnicas de respiración, posturas estables, aprender la alineación y relajación profunda para restaurar la vitalidad y la movilidad de todo el cuerpo.",
    },
    {
      title: "Yin Yoga & Pranayama",
      body: "Combinamos técnicas de respiración para serenar la mente con posturas de Yin Yoga y yoga restaurativo, que invitan a la meditación y a la liberación de tensiones. Es una práctica diseñada para soltar el ritmo diario, restaurar el sistema nervioso y reencontrar el equilibrio interior.",
    },
  ],
  methodTitle: "Un método basado en la progresión",
  method: [
    "Atención Individualizada: Al trabajar en grupos reducidos, es posible realizar un seguimiento real del progreso de cada alumno, ajustando las posturas y la intensidad según su punto de partida.",
    "Base Sólida y Segura: Ponemos especial énfasis en la alineación y la respiración. Las sesiones están organizadas por grupos de posturas para preparar el cuerpo de forma progresiva, asegurando que cada movimiento se realice de forma segura.",
    "Evolución Tangible: Trabajamos con objetivos claros. La intención es que experimentes una mejora constante en tu flexibilidad y fuerza física, evolucionando en las posturas y, sobre todo, en tu bienestar mental.",
  ],
  prices: [
    {
      title: "Clases grupales Yoga",
      items: [
        "Mensualidad una clase por semana: 65€",
        "Mensualidad clases ilimitadas: 90€",
        "Abono 10 clases: 165€ (tres meses)",
        "Clase suelta: 20€",
      ],
    },
    {
      title: "Clases individuales Yoga",
      items: [
        "Sesión Individual + secuencia personalizada: 60€",
        "Abono 4 clases individuales: 180€",
        "Abono 10 clases individuales: 400€",
      ],
    },
  ],
  individualTitle: "Clases individuales adaptadas a tu cuerpo",
  individualEyebrow: "con Laia",
  individualBody: [
    "Si buscas un acompañamiento exclusivo para integrar el yoga en tu vida según tus propios ritmos y objetivos, he diseñado dos formas de trabajar juntas/os.",
    "Sesión Individual Estratégica: Ideal para resolver dudas puntuales, si hay algun grupo de posturas que necesitas aprender de forma más profunda o diseñar una secuencia personalizada que puedas practicar de forma autónoma en casa.",
    "Programa de Práctica Personal: Un proceso de acompañamiento profundo con sesiones semanales o quincenales. Trabajaremos de forma constante en tus metas para que experimentes los beneficios del yoga de manera integral y consciente.",
  ],
  individualClosing: "¿Quieres empezar el programa? Empecemos con una sesión de prueba para conocernos, escuchar tus necesidades y trazar el camino de tu práctica.",
  officeTitle: "Yoga en la oficina para la salud física y mental de tu equipo",
  officeBody: [
    "La integración del yoga, la meditación y la respiración consciente en la oficina transforma el entorno laboral en un espacio de concentración y bienestar.",
    "Al liberar las tensiones del sedentarismo y regular el sistema nervioso, el equipo recupera la movilidad física y la claridad mental necesarias para afrontar cada reto.",
    "Cuidar la salud integral de los trabajadores cultiva una cultura de presencia y vitalidad.",
  ],
  officeCta: "Solicita más información aquí",
};

export const espacioCopy = {
  pageTitle: "Alquiler de Sala de Yoga en Gràcia - Eixample | Espai Adarsha",
  body: [
    "En Espai Adarsha abrimos nuestras puertas a profesionales del movimiento y terapeutas que busquen un lugar donde desarrollar sus proyectos.",
    "Un estudio holístico con luz natural y totalmente equipado junto al metro Verdaguer.",
  ],
  uses: [
    "Formaciones intensivas de fin de semana.",
    "Workshops y talleres",
    "Sesiones individuales",
    "Clases regulares en los horarios disponibles",
  ],
  emailPrefix: "Escríbenos en",
  emailSuffix: "para recibir más información.",
  details: {
    addressHeading: "Dirección",
    addressLines: ["Calle Girona 166, entresuelo 3", "Barcelona"],
    contactHeading: "Contacto",
    visitsHeading: "Visitas espacio",
  },
  visits: ["Lunes 18:15 - 18:30", "Jueves 13:15 - 13:30"],
};

export const colaboradoresCopy = {
  pageTitle: "Colaboradores | Espai Adarsha",
  title: "Nuestro ecosistema de colaboradores",
  subtitle: "Conoce otras actividades que tienen lugar en Espai Adarsha",
  activity: "Movimiento & Consciencia Pélvica",
  teacher: "con Raquel Jaroslavsky",
  question: "¿Te sientes desconectada de tu pélvis?",
  body: [
    "Tu pelvis es el centro de tu vitalidad: un espacio de calma, fuerza y placer esperando a ser habitado.",
    "Las sesiones de Movimiento y Consciencia Pélvica nacen para transformar esa sensación en una relación más cercana, sentida y vital con tu propio cuerpo, a través del movimiento y la relajación en un clima de seguridad y sin juicios.",
    "Raquel, terapeuta corporal especializada en suelo pélvico y sexualidad, te acompañará a redescubrir tu anatomía y a despertar tu pelvis.",
    "Regálate un espacio para habitarte de forma plena y recuperar tu bienestar más profundo.",
  ],
  scheduleHeading: "Horarios",
  schedule: "Sesiones grupales: Martes 17:45 - 19:00 / Jueves 17:45 - 19:00",
  booking: { prefix: "Reservas:", email: "jarosraquel@gmail.com" },
  pricesHeading: "Sesiones de Movimiento y Conciencia Pélvica",
  prices: [
    "Cuota trimestral de 4 sesiones al mes: 300€",
    "Cuota trimestral de 2 sesiones al mes: 150€",
    "Sesión suelta: 35€ / Sesión prueba: 10€",
    "Sesión Individual: 50€",
  ],
  personalizedHeading: "Acompañamiento personalizado",
  personalized: [
    "La constancia es la clave para liberar bloqueos, ganar movilidad y sentir cambios reales.",
    "Sesiones Individuales: Un espacio privado para profundizar en tu proceso y a tu ritmo.",
    "Sesiones Dúo: Un encuentro para soltar tensiones y reconectar en compañía.",
    "Experiencias para Grupos: Talleres diseñados para sentir la pelvis y despertar la energía vital de forma colectiva.",
  ],
};

export const equipoCopy = {
  pageTitle: "Equipo | Espai Adarsha",
  name: "Adarsha",
  sanskrit: "Ādarśa (आदर्श)",
  meaning: ['"Adarsha" significa "espejo" en sanskrito.', "Espai Adarsha: un estudio para mirarse y transformarse desde adentro hacia fuera."],
  heading: "Quienes somos",
  intro: "Cada uno de nosotros aporta su propia experiencia, sensibilidad y estilo, pero compartimos un mismo propósito: acompañarte en tu proceso con cuidado, respeto y de forma cercana.",
  members: [
    { name: "Laia Espejo Dotti", role: "Fundadora & Profesora de Yoga", href: "/bio-laia/", image: equipoLaia },
    { name: "Kristoff Malejczuk", role: "Profesor de Yoga", href: "/bio-kristoff/", image: equipoKristoff },
    { name: "Raquel Jaroslavsky", role: "Profesora de Movimiento y Conciencia Pélvica · Colaboradora", href: "/colaboradores/", image: equipoRaquel },
  ],
};

export const bioCopy = {
  laia: {
    pageTitle: "Sobre Laia | Espai Adarsha",
    heading: "Sobre Laia.",
    beforeImage: [
      "El yoga es un camino para la búsqueda del infinito en el interior, y esa búsqueda es la que da propósito a mi vida.",
      "Todo lo relacionado con el yoga ha despertado en mí una enorme curiosidad, desde muy temprana edad. Mi primer contacto con el Hatha Yoga fue de bien pequeña, cuando acompañaba a mi padre a practicar Vini Yoga según la tradición de Desikachar.",
      "A los quince años mi interés por la práctica ya era firme. Desde el inicio recibí una enseñanza que me marcó profundamente: “todo está en la respiración”.",
    ],
    afterImage: [
      "En el sentir de mi respiración encontré la calma que tanto necesitaba. El yoga se convirtió en mi refugio, en mi lugar seguro y en el pilar espiritual de mi vida.",
      "En 2020 realicé mi primera formación de Hatha Vinyasa de 200h y una formación de Filosofía del Yoga. En 2022 completé 200h de Yoga Integral y fundé Espai Adarsha, un estudio de yoga holístico creado para acompañar el proceso de los alumnos de forma cercana.",
      "Actualmente continúo formándome en Hatha Vinyasa y Terapia Gestalt para profundizar en la psicología moderna, el crecimiento humano y el acompañamiento emocional.",
    ],
    signoff: "¡Namasté!",
    website: { label: "www.laiaespejoyoga.com", href: "https://www.laiaespejoyoga.com" },
    image: equipoLaia,
  },
  kristoff: {
    pageTitle: "Sobre Kristoff | Espai Adarsha",
    heading: "Sobre Kristoff.",
    beforeImage: [
      "In the summer of 2019, at the invitation of a friend, I began to attend a weekly yoga class. By the beginning of 2021, yoga had become my sole form of exercise.",
      "In 2022, I joined HAUM Studios in San Francisco and quickly experienced big leaps in my practice. I completed a 200-hour Hatha Vinyasa teacher training in 2023 under Danni Pomplun and Yvonne Kingsley.",
    ],
    afterImage: [
      "Next began a year of backpacking around Latin America. In the Colombian Andes I devoted a month to Karma Yoga, followed by a month in the Amazon jungle.",
      "In late 2025, I moved to Barcelona and began practicing Mysore-style Hatha Ashtanga under Aleix Griñó at Viveka Yoga Shala. As of 2026, I teach regularly at Espai Adarsha.",
    ],
    website: { label: "www.thestudio.uno", href: "https://thestudio.uno/" },
    image: equipoKristoff,
  },
};
