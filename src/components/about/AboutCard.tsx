import {useTranslation} from 'react-i18next';

interface AboutCardProps {
    header: string;
    description: string;
}

const AboutCard = ({header, description}:AboutCardProps) => {
    const {t} = useTranslation();

    return (
        <div className="p-8 bg-background-light rounded-xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t(header)}
            </h3>
            <p className="text-text-secondary">{t(description)}</p>
        </div>
    );
};

export default AboutCard;
