import type { CollectionEntry } from 'astro:content';
import { Badge, BadgeDot } from '../ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Rating } from '../ui/rating';

export const TechCard = ({
    tech,
}: {
    tech: CollectionEntry<'technologies'>;
}) => {
    return (
        <Card className='gap-2'>
            <CardHeader>
                <CardTitle className='flex flex-row items-center gap-1.5'>
                    {tech.data.logo && (
                        <img
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                            src={tech.data.logo}
                            alt={'Icon of ' + tech.data.name}
                            width={24}
                            height={24}
                            className='bg-foreground rounded-full p-0.5 dark:bg-foreground/10'
                        />
                    )}
                    <h3 className='text-lg'>{tech.data.name}</h3>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p
                    className={
                        tech.data.opinion
                            ? 'mb-2 whitespace-pre-line'
                            : 'whitespace-pre-line'
                    }
                >
                    {tech.data.description}
                </p>
                {tech.data.opinion && <BadgeDot>{tech.data.opinion}</BadgeDot>}
            </CardContent>
            <CardFooter className='mt-2'>
                <Badge className='mr-2'>
                    {tech.data.ecosystem_logo && (
                        <img
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                            src={tech.data.ecosystem_logo}
                            alt={'Icon of ' + tech.data.ecosystem}
                            width={16}
                            height={16}
                            className='dark:bg-background rounded-full'
                        />
                    )}
                    {tech.data.ecosystem}
                </Badge>
                <Rating
                    rating={tech.data.rate}
                    size={20}
                />
            </CardFooter>
        </Card>
    );
};
