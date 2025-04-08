import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen pt-20 px-4 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/home_background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative max-w-7xl mx-auto py-20 z-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            {t('home.greeting')}
                        </h1>
                        <p className="text-lg md:text-xl">
                            {t('home.introduction')}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 bg-custom-primary text-white rounded-lg hover:bg-custom-primary/90 transition-colors"
                            >
                                {t('home.projects')}
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                            >
                                {t('home.contact')}
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="aspect-square max-w-md mx-auto bg-background rounded-full shadow-2xl overflow-hidden">
                            <img
                                src="/logo.jpg"
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
