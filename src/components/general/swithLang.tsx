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
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${currentLang}/`, `/${newLang}/`);
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
