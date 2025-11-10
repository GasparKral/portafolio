import type { CollectionEntry } from 'astro:content';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';

export const TechnologiesContainer = ({
    techs,
}: {
    techs: CollectionEntry<'technologies'>[];
}) => {
    return (
        <section className='w-4xl rounded-lg m-8 flex'>
            <Tabs
                defaultValue={'frontend'}
                className='gap-y-2 text-accent-foreground flex flex-col '
            >
                <TabsList className='bg-accent rounded-xl mb-2 '>
                    {['frontend', 'backend', 'database', 'other'].map(
                        (scope) => (
                            <TabsTrigger
                                value={scope}
                                className='px-4 py-2'
                            >
                                {scope.charAt(0).toUpperCase() + scope.slice(1)}
                            </TabsTrigger>
                        )
                    )}
                </TabsList>

                {techs &&
                    techs.map((tech) => (
                        <TabsContent
                            value={tech.data.scope}
                            key={tech.id}
                        >
                            <Card className='border-accent/25'>
                                <CardHeader>
                                    {tech.data.logo && (
                                        <img
                                            src={tech.data.logo}
                                            alt={'Icon of ' + tech.data.name}
                                        />
                                    )}
                                    <CardTitle>{tech.data.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{tech.data.opinion}</p>
                                </CardContent>
                                <CardFooter>
                                    <Badge>
                                        {tech.data.ecosystem_logo && (
                                            <img
                                                onError={(e) => {
                                                    e.currentTarget.style.display =
                                                        'none';
                                                }}
                                                src={tech.data.ecosystem_logo}
                                                alt={
                                                    'Icon of ' +
                                                    tech.data.ecosystem
                                                }
                                            />
                                        )}
                                        {tech.data.ecosystem}
                                    </Badge>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    ))}
            </Tabs>
        </section>
    );
};
