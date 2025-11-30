import type { CollectionEntry } from 'astro:content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { TechCard } from './techCard';
import { Separator } from '@radix-ui/react-separator';
import { Input } from '../ui/input';
import { useState } from 'react';

const TechnologiesContainer = ({
    title,
    seachPlaceholder,
    techs,
    tabs,
}: {
    title: string;
    seachPlaceholder: string;
    techs: CollectionEntry<'technologies'>[];
    tabs: string[];
}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <section className='min-h-screen w-full pt-8 flex flex-col items-center max-h-[90vh] relative overflow-y-scroll '>
            <header className='mb-6 w-4xl text-start'>
                <h2 className='text-4xl font-bold '>{title}</h2>
            </header>

            <Tabs
                defaultValue={'frontend'}
                className='gap-y-2 text-accent-foreground flex flex-col w-4xl overflow-scroll backdrop-blur-md bg-background/80 rounded-md scrollbar-hide relative'
            >
                <div className='flex py-0.5'>
                    <TabsList>
                        {tabs.map((scope) => (
                            <TabsTrigger
                                value={scope}
                                className='px-4 py-2'
                                disabled={inputValue.length > 0}
                            >
                                {scope.charAt(0).toUpperCase() + scope.slice(1)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <Separator
                        className='mx-2 border'
                        orientation='vertical'
                    />
                    <Input
                        className='max-w-1/4'
                        placeholder={seachPlaceholder}
                        type='text'
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                {inputValue.length > 0
                    ? techs
                          .filter(
                              (tech) =>
                                  tech.data.name
                                      .toLowerCase()
                                      .includes(inputValue.toLowerCase()) ||
                                  tech.data.description
                                      .toLowerCase()
                                      .includes(inputValue.toLowerCase()) ||
                                  tech.data.ecosystem
                                      .toLowerCase()
                                      .includes(inputValue.toLowerCase())
                          )
                          .map((tech) => <TechCard tech={tech} />)
                    : techs.map((tech) => (
                          <TabsContent
                              value={tech.data.scope}
                              key={tech.id}
                              className='w-full'
                          >
                              <TechCard tech={tech} />
                          </TabsContent>
                      ))}
            </Tabs>
        </section>
    );
};

export default TechnologiesContainer;
