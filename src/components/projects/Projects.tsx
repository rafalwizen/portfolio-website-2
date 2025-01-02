import ProjectCard from './ProjectCard.tsx';
import { useTranslation } from 'react-i18next';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
}

const Projects = () => {
    const { t } = useTranslation();
    const projects: Project[] = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            technologies: ['React', 'TypeScript', 'Tailwind'],
            imageUrl: '/api/placeholder/400/300',
            liveUrl: 'https://project1.com',
            githubUrl: 'https://github.com/username/project1'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            technologies: ['Next.js', 'Node.js', 'MongoDB'],
            imageUrl: '/api/placeholder/400/300',
            liveUrl: 'https://project2.com',
            githubUrl: 'https://github.com/username/project2'
        }
    ];

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
