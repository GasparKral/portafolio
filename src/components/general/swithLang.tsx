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
	translationUrl,
}: {
	className?: string;
	currentLang: string;
	translationUrl?: string;
}) => {
	const defaultValue = currentLang === 'es' ? 'Español 🇪🇸' : 'English 🇬🇧';

	const handleChange = (newLang: string) => {
		if (newLang === currentLang) return;

		if (translationUrl) {
			// Navegar a la URL exacta de la traducción calculada en build time
			window.location.href = import.meta.env.BASE_URL + "/" + translationUrl;
		} else {
			// Comportamiento genérico para páginas sin traducción específica (index, etc.)
			const newPath = window.location.pathname.replace(
				`/${currentLang}`,
				`/${newLang}`
			);
			window.location.href = newPath;
		}
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
