export const CvDownload = ({ text }: { text: string }) => {
    return (
        <a
            href='/cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-xs hover:text-primary/60 hover:bg-input/50 active:bg-accent bg-input active:text-primary transition-colors duration-200 flex items-center cursor-pointer '
        >
            {text}
        </a>
    );
};
