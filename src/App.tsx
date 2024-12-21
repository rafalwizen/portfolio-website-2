// import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    const projects = [
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
        <div className="bg-[rgb(248,248,248)] min-h-screen">
            <Navbar />

            <section id="home" className="min-h-screen pt-20 px-4">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-black">
                                {t('home.greeting')}
                            </h1>
                            <p className="text-lg md:text-xl text-black/80">
                                {t('home.introduction')}
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
                                >
                                    Zobacz projekty
                                </button>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black/5 transition-colors"
                                >
                                    Kontakt
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square max-w-md mx-auto bg-white rounded-full shadow-2xl overflow-hidden">
                                <img
                                    src="/api/placeholder/400/400"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="min-h-screen px-4 bg-white">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                        {t('about.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-4">Historia</h3>
                            <p className="text-black/80">{t('about.history')}</p>
                        </div>
                        <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-4">Umiejętności</h3>
                            <p className="text-black/80">{t('about.skills')}</p>
                        </div>
                        <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-4">Podejście</h3>
                            <p className="text-black/80">{t('about.approach')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="min-h-screen px-4">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                        {t('portfolio.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="min-h-screen px-4 bg-white">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                        {t('contact.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-black">
                                {t('contact.social')}
                            </h3>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black hover:text-black/70 transition-colors"
                                >
                  <span className="w-10 h-10 flex items-center justify-center bg-[rgb(248,248,248)] rounded-full">
                    in
                  </span>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black hover:text-black/70 transition-colors"
                                >
                  <span className="w-10 h-10 flex items-center justify-center bg-[rgb(248,248,248)] rounded-full">
                    gh
                  </span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="bg-[rgb(248,248,248)] p-8 rounded-xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;