import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Technologies from './components/Technologies';
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

            <Technologies/>

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
                                    className="flex items-center gap-3 text-black hover:text-black/70 transition-colors group"
                                >
                  <span
                      className="w-10 h-10 flex items-center justify-center bg-[rgb(248,248,248)] rounded-full group-hover:bg-[rgb(238,238,238)] transition-colors">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-black hover:text-black/70 transition-colors group"
                                >
                  <span
                      className="w-10 h-10 flex items-center justify-center bg-[rgb(248,248,248)] rounded-full group-hover:bg-[rgb(238,238,238)] transition-colors">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
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