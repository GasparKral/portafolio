import { cn } from '@/lib/utils';
import { StarIcon, StarHalfIcon } from 'lucide-react';

interface RatingProps {
    rating: number;
    size?: number;
    className?: string;
    iconClassName?: string;
    showValue?: boolean;
}

export const Rating = ({
    rating,
    size = 20,
    className,
    iconClassName,
    showValue = false,
}: RatingProps) => {
    const MAX_COUNT = 5;
    const MIN_COUNT = 0;

    // Validación mejorada
    if (rating < MIN_COUNT || rating > MAX_COUNT) {
        console.error(`Rating debe estar entre ${MIN_COUNT} y ${MAX_COUNT}`);
        return (
            <div
                className={cn(
                    'flex flex-row items-center gap-0.5 text-red-500 bg-red-100 rounded-lg px-2 py-1 border border-red-300 text-xs',
                    className
                )}
            >
                Rating inválido: debe estar entre {MIN_COUNT} y {MAX_COUNT}
            </div>
        );
    }

    const isHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const fullStars = isHalf ? Math.floor(rating) : Math.round(rating);

    const renderIcon = (
        type: 'filled' | 'half' | 'empty',
        key: number
    ): React.ReactNode => {
        const baseClasses = 'transition-colors duration-200';

        if (type === 'filled') {
            return (
                <StarIcon
                    key={key}
                    size={size}
                    strokeWidth={1}
                    className={cn(baseClasses, 'fill-current', iconClassName)}
                    aria-hidden='true'
                />
            );
        }

        if (type === 'half') {
            return (
                <span
                    key={key}
                    className='relative inline-block'
                    style={{ width: size, height: size }}
                >
                    <StarIcon
                        size={size}
                        strokeWidth={1}
                        className={cn(
                            baseClasses,
                            'absolute inset-0',
                            iconClassName
                        )}
                        aria-hidden='true'
                    />
                    <StarHalfIcon
                        size={size}
                        strokeWidth={1}
                        className={cn(
                            baseClasses,
                            'fill-current absolute inset-0',
                            iconClassName
                        )}
                        aria-hidden='true'
                    />
                </span>
            );
        }

        return (
            <StarIcon
                key={key}
                size={size}
                strokeWidth={1}
                className={cn(baseClasses, iconClassName)}
                aria-hidden='true'
            />
        );
    };

    return (
        <div
            className={cn('flex flex-row items-center gap-0.5', className)}
            role='img'
            aria-label={`${rating} de ${MAX_COUNT} estrellas`}
        >
            {[...Array(MAX_COUNT)].map((_, i) => {
                if (i < fullStars) {
                    return renderIcon('filled', i);
                }
                if (i === fullStars && isHalf) {
                    return renderIcon('half', i);
                }
                return renderIcon('empty', i);
            })}
            {showValue && (
                <span
                    className='ml-1 text-sm font-medium'
                    aria-hidden='true'
                >
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};
