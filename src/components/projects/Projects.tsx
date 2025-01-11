import ProjectCard from './ProjectCard.tsx';
import {projects} from './projectsData';
import Header from "../Header.tsx";

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
    return (
        <section id="portfolio" className="min-h-screen px-4">
            <div className="max-w-7xl mx-auto py-20">
                <Header title={'portfolio.title'}/>
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
