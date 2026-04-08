export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLanguage = "es";

export const ui = {
  en: {
    "General.DownloadCv": "Download CV",
    "General.EmailCopied": "Email copied to clipboard!",
    "General.EmailCopyError": "Failed to copy email.",
    "Hero.Title":
      'Welcome to my portfolio!\nIm <b class="font-bold">{name}</b>, <span class="text-amber-300 font-medium">non just any</span> software developer.',
    "Hero.Gotoblog": "Try my blog",
    "AboutMe.Title": 'Some things about <span class="text-accent">me</span>',
    "AboutMe.Description":
      "I'm a passionate software developer who loves creating useful and efficient tools. I enjoy learning new technologies and finding ways to optimize my solutions.",
    "AboutMe.WhatILikeToDo":
      "I have experience in both web development and desktop/mobile application development. This versatility has helped me discover my love for being a multi-disciplinary developer. I enjoy working on the frontend, applying my UI/UX design knowledge gained through experience, as well as backend development, creating robust and scalable APIs.",
    "Tech.Title": "Technologies I've used",
    "Tech.Placeholder": "Search technologies...",
    "Project.Title": "Some of my projects",
    "Project.Label.1": "Repository Link",
    "Project.Label.2": "Live Demo",
    "Contact.Title": "Ways of Contact",
    "Contact.Social.Title": "And my socials",
    "Blog.Nav.Return": "Return to my portfolio",
    "Blog.Nav.Board": "Board",
    "Blog.Board.Title": "All entries",
    "Blog.Board.Empty": "No entries yet. Check back soon!",
  },
  es: {
    "General.DownloadCv": "Descarga mi CV",
    "General.EmailCopied": "¡Email copiado al portapapeles!",
    "General.EmailCopyError": "Error al copiar el email.",
    "Hero.Title":
      "Bienvenido a mi portafolio.\n<b class='font-bold'>{name}</b>: un <span class='text-accent font-medium'>apasionado</span> del software.",
    "Hero.Gotoblog": "Dale un vistazo blog",
    "AboutMe.Title": '¿Quíen <span class="text-amber-300">soy</span>?',
    "AboutMe.Description":
      "Soy un desarrollador de software apasionado por crear herramientas útiles y eficientes. Amo aprender nuevas tecnologías y formas de optimizar mis soluciones.",
    "AboutMe.WhatILikeToDo":
      "Tengo experiencia tanto en el ambito web, como en el desarrollo de aplicaciones de escritorio y móviles. Y es gracias a eso que he decubierto que amo ser polivalente, difruto tanto del trabajo frontend, aplicando mis conocimientos de diseño UI/UX adquiridos con la experiencia, como del desarrollo backend, creando APIs robustas y escalables.",
    "Tech.Title": "Tecnologías que controlo",
    "Tech.Placeholder": "Buscar tecnologías...",
    "Project.Title": "Alguno de mis proyectos",
    "Project.Label.1": "Enlace al repositorio",
    "Project.Label.2": "Demo en vivo",
    "Contact.Title": "Formas de contacto",
    "Contact.Social.Title": "Támbien mis redes",
    "Blog.Nav.Return": "Mi Portafolio",
    "Blog.Nav.Board": "Tablón",
    "Blog.Board.Title": "Todas las entradas",
    "Blog.Board.Empty": "Aún no hay entradas. ¡Vuelve pronto!",
  },
} as const;

export function getLangFromURL(url: URL) {
  const pathParts = url.pathname.split("/").filter(Boolean);

  // Buscar 'es' o 'en' en las partes del path
  // Esto funciona tanto para /es/ como para /portfolio/es/
  const lang = pathParts.find((part) => part in ui);

  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function useTranslation(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLanguage],
    params?: Record<string, any>,
  ): string {
    let translation: string = ui[lang][key] || ui[defaultLanguage][key];

    if (params) {
      translation = injectParamsIntoString(translation, params);
    }

    return translation;
  };
}

export function injectParamsIntoString(
  str: string,
  params: Record<string, any>,
): string {
  return str.replace(/\{(\w+)\}/g, (_, paramKey) => {
    return params[paramKey] ?? `{${paramKey}}`;
  });
}
