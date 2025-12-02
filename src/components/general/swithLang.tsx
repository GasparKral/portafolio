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
    baseUrl = '/',
}: {
    className?: string;
    currentLang: string;
    baseUrl?: string;
}) => {
    const defaultValue = currentLang === 'es' ? 'Español 🇪🇸' : 'English 🇬🇧';

    const handleChange = (newLang: string) => {
        if (newLang === currentLang) return;
        
        // Construir la nueva ruta
        const newPath = `${baseUrl}${newLang}/`;
        
        // Forzar recarga completa
        window.location.href = newPath;
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
