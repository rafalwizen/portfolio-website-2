// import React from 'react';
import {useTranslation} from 'react-i18next';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({
                         title,
                         description,
                         technologies,
                         imageUrl,
                         liveUrl,
                         githubUrl
                     }: ProjectCardProps) => {
    const {t} = useTranslation();

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{t(title)}</h3>
                <p className="text-black mb-4">{t(description)}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[rgb(248,248,248)] rounded-full text-sm text-black"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                        >
                            {t('portfolio.viewProject')}
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100 transition-colors"
                        >
                            {t('portfolio.viewCode')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;