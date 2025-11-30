import type { CollectionEntry } from 'astro:content';
import { ProjectCard } from './projectCard';

export const ProjectsContainer = ({
    title,
    projects,
    labels,
}: {
    title: string;
    labels: string[];
    projects: CollectionEntry<'projects'>[];
}) => {
    return (
        <section className='min-h-[50vh] w-full pt-8 flex flex-col items-center max-h-[90vh] relative overflow-y-scroll '>
            <header className='mb-6 w-4xl text-start'>
                <h2 className='text-4xl font-bold '>{title}</h2>
            </header>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 grid-rows-auto w-4xl'>
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            repositoryLinkLabel={labels[0]}
                            liveDemoLabel={labels[1]}
                        />
                    );
                })}
            </div>
        </section>
    );
};
