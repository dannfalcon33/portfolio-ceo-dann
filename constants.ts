import {
  Project,
  SkillCategory,
  Resource,
  MediaItem,
  AiMediaItem,
} from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "LadyGaga FanPage",
    category: "Frontend Development con React + Typescript",
    image: "/images/ladygaga-web.png",
    year: "2025",
    description:
      "Una página visualmente inmersiva y dinámica dedicada a Lady Gaga, construida con tecnologías web modernas. Este proyecto presenta una estética única que mezcla vibras industriales, futuristas y retro-tech (VHS), reflejando las eras 'Mayhem' y 'Chromatica'.",
    link: "https://ladygaga-fan-page.yoshuasoto54.workers.dev/",
  },
  {
    id: 2,
    title: "Logos Tarot Web",
    category:
      "Frontend Development con React + Typescript, utilizando Tailwind CSS.",
    image: "/images/logos-tarot-web.png",
    year: "2025",
    description:
      "Logos Tarot es una aplicación interactiva diseñada para ofrecer una experiencia espiritual profunda y accesible. Combina la sabiduría ancestral del Tarot con la tecnología moderna de inteligencia artificial. Con cartas de tarot con un diseño único y moderno al estilo del arte de Fantasia Espacial tendrás una experiencia visual impactante.",
    link: "https://logos-tarot-app.yoshuasoto54.workers.dev/",
  },
  {
    id: 3,
    title: "Dolce Vita Paradiso",
    category: "Frontend Development con React + Typescript, React Router Dom",
    image: "/images/dolce-vita.png",
    year: "2025",
    description:
      "Dolce Vita Paradiso es un portafolio web inmersivo de alta gama para un restaurante italiano contemporáneo, construido con tecnologías web modernas para ofrecer una experiencia digital lujosa.",
    link: "https://dolce-vita-paradiso-web.yoshuasoto54.workers.dev/",
  },
  {
    id: 4,
    title: "LeadCard Saas",
    category: "Saas Fullstack con NextJS y Supabase",
    image: "/images/leadcard-saas.png",
    year: "2026",
    description:
      "LeadCard Saas es una plataforma SaaS diseñada para la gestión de leads y clientes, construida con tecnologías web modernas para ofrecer una experiencia digital fluida y profesional.",
    link: "https://leadcard-saas.vercel.app/",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      "CSS Vanilla",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend Architecture",
    skills: ["Node.js", "Python", "Supabase", "PrismaJS"],
  },
  {
    title: "Frameworks",
    skills: ["NextJS", "Astro", "Django"],
  },
];

export const RESOURCES: Resource[] = [
  {
    title: "AdminLTE Synthwave Admin",
    type: "GitHub Repo",
    link: "https://github.com/YoshuaSoto95/adminLTE-synthwave",
  },
  {
    title: "AdminLTE Synthwave II Admin",
    type: "GitHub Repo",
    link: "https://github.com/YoshuaSoto95/adminLTE-synthwave-II",
  },
  {
    title: "Entorno de Desarrollo en Typescript",
    type: "GitHub Repo",
    link: "https://github.com/YoshuaSoto95/practice-ts",
  },
];

export const MEDIA: MediaItem[] = [
  {
    title: "Miami Prime Mortgage",
    description: "Landing Page Style Smart Card",
    link: "https://miami-prime-mortgage.yoshuasoto54.workers.dev/",
  },
  {
    title: "Dubai Elite Estates",
    description: "Landing Page Pro Premium",
    link: "https://dubai-elite-estates.yoshuasoto54.workers.dev/",
  },
  {
    title: "Kuki Sushi",
    description: "Landing Page Restaurant",
    link: "https://kuki-sushi.yoshuasoto54.workers.dev/",
  },
];

export const AI_MEDIA: AiMediaItem[] = [
  {
    id: 1,
    title: "Neural Dreams",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=10",
    description: "Midjourney v6 Exploration",
  },
  {
    id: 2,
    title: "Cyberpunk Noir",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=11",
    description: "Stable Diffusion XL",
  },
  {
    id: 3,
    title: "Abstract Kinetics",
    type: "video",
    url: "https://picsum.photos/600/800?grayscale&random=12",
    description: "Runway Gen-2 Animation",
  },
  {
    id: 4,
    title: "Synthetic Nature",
    type: "image",
    url: "https://picsum.photos/600/800?grayscale&random=13",
    description: "DALL-E 3 Composition",
  },
  {
    id: 5,
    title: "Digital Fluidity",
    type: "video",
    url: "https://picsum.photos/600/800?grayscale&random=14",
    description: "Pika Labs Render",
  },
];

export const HERO_CONTENT = {
  badge: "Dann Falcon - Fullstack Developer",
  title: {
    first: "YOSHUA",
    highlight: `"DANN"`,
    last: "SOTO",
  },
  subtitle: "Fullstack Developer",
  backgroundElements: {
    circle1: true,
    circle2: true,
  },
};

export const ABOUT_CONTENT = {
  badge: "FULLSTACK DEVELOPER",
  title: {
    main: 'Yoshua "Dann" Soto, ',
    highlight: "Fullstack Developer",
  },
  description:
    "Soy Yoshua Soto, Desarrollador Full Stack especializado en el ecosistema JavaScript/TypeScript. Mi enfoque combina la ingeniería de software con el diseño interactivo. Cuento con una base sólida en backend (Laravel/Django), pero mi verdadera pasión es crear interfaces web inmersivas y de alto rendimiento utilizando Next.js, Astro y React. Me especializo en llevar la experiencia de usuario al límite, desde la manipulación nativa del DOM y CSS Vanilla hasta animaciones complejas con Framer Motion, GSAP y la implementación de Antigravity para interacciones fluidas. No solo construyo sitios web; creo experiencias digitales rápidas y escalables",
  expandedBio: {
    badge: "01.1",
    title: "Biografia Extendida",
    quote:
      "Mi nombre es Yoshua 'Dann' Soto. Dann proviene de mi segundo nombre, Daniel, y es el referente a mi marca personal Dann Falcon.",
    paragraphs: [
      "Mi trayectoria comenzó en el núcleo de la tecnología: administrando infraestructura de servidores y redes universitarias. Esa base técnica sólida me permitió dar el salto al desarrollo web, iniciándome con arquitecturas en PHP y Laravel, donde aprendí la importancia de un backend robusto.",
      "Sin embargo, mi obsesión por el detalle visual me llevó a especializarme en el Frontend. Durante años, trabajé remotamente optimizando Landing Pages para el mercado inmobiliario de Miami, donde aprendí que los frameworks estándar (como Bootstrap o Tailwind) a veces limitan la identidad de una marca. Por eso, perfeccioné el uso de CSS Vanilla: para tener control absoluto sobre cada píxel y animación.",
      "Hoy, combino esa disciplina artesanal con la potencia de TypeScript, React y flujos de trabajo acelerados por IA. Utilizo mi sistema Antigravity junto a GSAP y Framer Motion para crear interfaces inmersivas, respaldadas por arquitecturas de datos modernas en Supabase y Prisma. No solo escribo código; diseño ecosistemas digitales completos.",
    ],
    est: "EST. 1995",
  },
  buttons: {
    readBio: "Leer Biografia",
    downloadCv: "Descargar CV",
    cvUrl: "/data/CV-Resume-DannFalcon.pdf",
  },
  image: {
    sidebar: "/images/profil-picture.jpg",
    modal: "/images/profil-modal.jpg",
  },
  socialLinks: [
    { platform: "GitHub Main", url: "https://github.com/dannfalcon33" },
    { platform: "GitHub Secondary", url: "https://github.com/YoshuaSoto95" },
  ],
};

export const CONTACT_CONTENT = {
  badge: "Contactame",
  title: {
    main: "Vamos a comenzar un proyecto",
    highlight: "Hablemos",
  },
  description:
    "Estoy disponible para escuchar propuestas de trabajo, proyectos y otras oportunidades. Por favor, escribeme para arreglar una reunión.",
  email: {
    label: "Correo Directo",
    address: "yoshuasoto54@gmail.com",
  },
  form: {
    nameLabel: "Nombre",
    emailLabel: "Correo",
    messageLabel: "Mensaje",
    submitButton: {
      idle: "Enviar",
      sending: "Enviando...",
      success: "Mensaje Enviado",
    },
  },
};

export const PORTFOLIO_CONTENT = {
  sectionTitle: "Portafolio",
  scrollHint: "Scrollea para explorar",
  viewProject: "Ver",
  viewArchive: "Portafolio de Github",
  modal: {
    viewLive: "Ver en vivo",
    defaultDescription:
      "Project description currently unavailable. Please check back later for case study details.",
  },
};

export const SKILLS_CONTENT = {
  sectionTitle: "Habilidades",
  sectionNumber: "02",
};

export const FOOTER_CONTENT = {
  name: "YOSHUA SOTO",
  copyright: "© 2026. All Rights Reserved.",
  socialLinks: [
    { platform: "TikTok", url: "https://www.tiktok.com/@masterhorus33" },
    { platform: "YouTube", url: "https://www.youtube.com/@falconstudiodev" },
    { platform: "GitHub Main", url: "https://github.com/dannfalcon33" },
    { platform: "GitHub Secondary", url: "https://github.com/YoshuaSoto95" },
    {
      platform: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=+58%20422-0331995&text=Deseo%20una%20cotizacion",
    },
    { platform: "Email", url: "mailto:yoshuasoto54@gmail.com" },
  ],
};
