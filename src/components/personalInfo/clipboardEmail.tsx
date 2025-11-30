import { ClipboardIcon } from 'lucide-react';
import { toast } from 'sonner';

export const ClipboardEmail = ({
    email,
    succesMessage,
    errorMessage,
}: {
    email: string;
    succesMessage: string;
    errorMessage: string;
}) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            toast.success(succesMessage);
        } catch (err) {
            toast.error(errorMessage);
        }
    };
    return (
        <button
            onClick={copyToClipboard}
            className='p-2 rounded-xs hover:text-primary/60 hover:bg-input/50 active:bg-accent bg-input active:text-primary transition-colors duration-200 flex items-center cursor-pointer'
        >
            <ClipboardIcon className=' w-4 h-4 mr-1 mt-1' />
            {email}
        </button>
    );
};
