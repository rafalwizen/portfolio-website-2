import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen pt-20 px-4">
            <div className="max-w-7xl mx-auto py-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary">
                            {t('home.greeting')}
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary">
                            {t('home.introduction')}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
                                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
                            >
                                {t('home.projects')}
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                className="px-6 py-3 border border-black text-text-primary rounded-lg hover:bg-black/5 transition-colors"
                            >
                                {t('home.contact')}
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div
                            className="aspect-square max-w-md mx-auto bg-background rounded-full shadow-2xl overflow-hidden">
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
    );
};

export default Home;
