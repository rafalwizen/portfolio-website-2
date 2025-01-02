import ProjectCard from './ProjectCard.tsx';
import {useTranslation} from 'react-i18next';
import {projects} from './projectsData';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
}

const Projects = () => {
    const {t} = useTranslation();
    return (
        <section id="portfolio" className="min-h-screen px-4">
            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                    {t('portfolio.title')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
