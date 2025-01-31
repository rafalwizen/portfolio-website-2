import { useState } from 'react';
import ProjectCard from './ProjectCard.tsx';
import { projects } from './projectsData';
import Header from "../Header.tsx";
import { LayoutGrid, Maximize2 } from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    images: {
        pl: string[];
        en: string[];
    };
    liveUrl: string;
    githubUrl: {
        pl: string;
        en: string;
    };
}

const Projects = () => {
    const [isCompact, setIsCompact] = useState(false);

    return (
        <section id="portfolio" className="min-h-screen px-4 bg-background">
            <div className="max-w-7xl mx-auto py-20">
                <Header title={'portfolio.title'}/>
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setIsCompact(!isCompact)}
                        className="hidden md:flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        {isCompact ? <Maximize2 className="w-5 h-5"/> : <LayoutGrid className="w-5 h-5"/>}
                        {isCompact ? 'Duże karty' : 'Małe karty'}
                    </button>
                </div>
                <div className={`grid gap-8 ${
                    isCompact
                        ? 'md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 max-w-4xl mx-auto'
                }`}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;