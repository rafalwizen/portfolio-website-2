// import React from 'react';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[rgb(248,248,248)]">
            <Navbar />

            <section id="home" className="min-h-screen pt-16 px-4">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="flex items-center gap-8">
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold text-black mb-4">{t('home.greeting')}</h1>
                            <p className="text-black text-lg">{t('home.introduction')}</p>
                        </div>
                        <div className="w-1/2">
                            <div className="aspect-square bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="min-h-screen px-4 bg-white">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl font-bold text-black mb-8">{t('about.title')}</h2>
                    <div className="space-y-8">
                        <div className="text-black">{t('about.history')}</div>
                        <div className="text-black">{t('about.skills')}</div>
                        <div className="text-black">{t('about.approach')}</div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="min-h-screen px-4">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl font-bold text-black mb-8">{t('portfolio.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tu będą komponenty ProjectCard */}
                    </div>
                </div>
            </section>

            <section id="contact" className="min-h-screen px-4 bg-white">
                <div className="max-w-7xl mx-auto py-20">
                    <h2 className="text-3xl font-bold text-black mb-8">{t('contact.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            {/* Tu będzie komponent ContactForm */}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-black">{t('contact.social')}</h3>
                            {/* Tu będą linki do social media */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;