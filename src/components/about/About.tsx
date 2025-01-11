import { useTranslation } from 'react-i18next';
import AboutCard from "./AboutCard.tsx";
import Header from "../Header.tsx";

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="min-h-screen px-4 bg-background">
            <div className="max-w-7xl mx-auto py-20">
                <Header title={'about.title'}/>
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
