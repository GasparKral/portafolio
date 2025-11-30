export const languages = {
    en: 'English',
    es: 'Spanish',
};

export const defaultLanguage = 'es';

export const ui = {
    en: {
        'General.DownloadCv': 'Download CV',
        'General.EmailCopied': 'Email copied to clipboard!',
        'General.EmailCopyError': 'Failed to copy email.',
        'Hero.Title':
            'Welcome to my portfolio!\nIm <b class="font-bold">{name}</b>, <span class="text-amber-300 font-medium">non just any</span> software developer.',
        'AboutMe.Title':
            'Some things about <span class="text-accent">me</span>',
        'AboutMe.Description':
            "I'm a passionate software developer who loves creating useful and efficient tools. I enjoy learning new technologies and finding ways to optimize my solutions.",
        'AboutMe.WhatILikeToDo':
            'I have experience in both web development and desktop/mobile application development. This versatility has helped me discover my love for being a multi-disciplinary developer. I enjoy working on the frontend, applying my UI/UX design knowledge gained through experience, as well as backend development, creating robust and scalable APIs.',
        'Contact.Title': 'Ways of Contact',
        'Contact.Social.Title': 'And my socials',
    },
    es: {
        'General.DownloadCv': 'Descarga mi CV',
        'General.EmailCopied': '¡Email copiado al portapapeles!',
        'General.EmailCopyError': 'Error al copiar el email.',
        'Hero.Title':
            "Bienvenido a mi portafolio.\n<b class='font-bold'>{name}</b>: un <span class='text-accent font-medium'>apasionado</span> del software.",
        'AboutMe.Title': '¿Quíen <span class="text-amber-300">soy</span>?',
        'AboutMe.Description':
            'Soy un desarrollador de software apasionado por crear herramientas útiles y eficientes. Amo aprender nuevas tecnologías y formas de optimizar mis soluciones.',
        'AboutMe.WhatILikeToDo':
            'Tengo experiencia tanto en el ambito web, como en el desarrollo de aplicaciones de escritorio y móviles. Y es gracias a eso que he decubierto que amo ser polivalente, difruto tanto del trabajo frontend, aplicando mis conocimientos de diseño UI/UX adquiridos con la experiencia, como del desarrollo backend, creando APIs robustas y escalables.',
        'Contact.Title': 'Formas de contacto',
        'Contact.Social.Title': 'Támbien mis redes',
    },
} as const;

export function getLangFromURL(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLanguage;
}

export function useTranslation(lang: keyof typeof ui) {
    return function t(
        key: keyof (typeof ui)[typeof defaultLanguage],
        params?: Record<string, any>
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
    params: Record<string, any>
): string {
    return str.replace(/\{(\w+)\}/g, (_, paramKey) => {
        return params[paramKey] ?? `{${paramKey}}`;
    });
}
