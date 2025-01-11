import { useTranslation } from 'react-i18next';
import AboutCard from "./AboutCard.tsx";

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="min-h-screen px-4 bg-background">
            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12">
                    {t('about.title')}
                </h2>
                <p>{t('about.info')}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    <AboutCard header={'about.firstHeader'} description={'about.first'}/>
                    <AboutCard header={'about.secondHeader'} description={'about.second'}/>
                    <AboutCard header={'about.thirdHeader'} description={'about.third'}/>
                </div>
            </div>
        </section>
    );
};

export default About;
