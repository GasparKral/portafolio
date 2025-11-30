import type { CollectionEntry } from 'astro:content';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Link } from 'lucide-react';

export const ProjectCard = ({
    project,
    repositoryLinkLabel,
    liveDemoLabel,
}: {
    project: CollectionEntry<'projects'>;
    repositoryLinkLabel: string;
    liveDemoLabel: string;
}) => {
    return (
        <Card
            style={
                {
                    '--project-color': project.data.color,
                } as React.CSSProperties
            }
            className='gap-4 group hover:scale-105 transition-all duration-500 hover:border-(--project-color)/50'
        >
            <CardHeader>
                <CardTitle className='text-2xl group-hover:text-(--project-color)'>
                    {project.data.title}
                </CardTitle>
            </CardHeader>
            <CardContent className='mb-4'>
                <p>{project.data.description}</p>
            </CardContent>
            <CardFooter className='flex flex-col gap-4 justify-end h-full'>
                <div className='flex gap-2 justify-center w-full text-sm'>
                    {project.data.links.repository && (
                        <a
                            style={
                                {
                                    '--project-color': project.data.color,
                                } as React.CSSProperties
                            }
                            className='flex items-center transition-colors duration-200 hover:underline hover:text-(--project-color)'
                            href={project.data.links.repository}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Link
                                className='mr-1.5 inline-block'
                                height={16}
                                width={16}
                            />
                            {repositoryLinkLabel}
                        </a>
                    )}
                    {project.data.links.live && (
                        <a
                            href={project.data.links.live}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {liveDemoLabel}
                        </a>
                    )}
                </div>
                <div className='flex flex-row gap-2 overflow-x-scroll scrollbar-hide'>
                    {project.data.technologies.map((tech) => (
                        <Badge key={tech.id}>{tech.id}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};
