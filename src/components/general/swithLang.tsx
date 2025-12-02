'use client';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

const LanguagePicker = ({
    className,
    currentLang,
}: {
    className?: string;
    currentLang: string;
}) => {
    const defaultValue = currentLang === 'es' ? 'Español 🇪🇸' : 'English 🇬🇧';

    const handleChange = (newLang: string) => {
        if (newLang == currentLang) return;
        const currentPath = window.location.pathname;
        
        // Manejar la base path de GitHub Pages (/portfolio/)
        const pathParts = currentPath.split('/').filter(Boolean);
        const basePath = pathParts[0]; // 'portfolio'
        
        // Construir la nueva ruta: /portfolio/[newLang]/
        const newPath = `/${basePath}/${newLang}/`;
        
        // Forzar recarga completa para que Astro re-renderice todo
        window.location.replace(newPath);
    };

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className={'cursor-pointer ' + className}>
                <SelectValue placeholder={defaultValue} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value='es'>Español 🇪🇸</SelectItem>
                    <SelectItem value='en'>English 🇬🇧</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default LanguagePicker;
