import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="min-h-screen px-4 bg-white">
            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                    {t('about.title')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                        <h3 className="text-xl font-semibold text-black mb-4">
                            {t('about.historyHeader')}
                        </h3>
                        <p className="text-black/80">{t('about.history')}</p>
                    </div>
                    <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                        <h3 className="text-xl font-semibold text-black mb-4">
                            {t('about.skillsHeader')}
                        </h3>
                        <p className="text-black/80">{t('about.skills')}</p>
                    </div>
                    <div className="p-8 bg-[rgb(248,248,248)] rounded-xl">
                        <h3 className="text-xl font-semibold text-black mb-4">
                            {t('about.approachHeader')}
                        </h3>
                        <p className="text-black/80">{t('about.approach')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
