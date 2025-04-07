import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../AnimateOnScroll';

interface AboutCardProps {
    header: string;
    description: string;
}

const AboutCard = ({ header, description }: AboutCardProps) => {
    const { t } = useTranslation();

    return (
        <AnimateOnScroll className="p-8 bg-background-light rounded-xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t(header)}
            </h3>
            <p className="text-text-secondary">{t(description)}</p>
        </AnimateOnScroll>
    );
};

export default AboutCard;
