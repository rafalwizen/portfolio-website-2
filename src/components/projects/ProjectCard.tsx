import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    images: {
        pl: string[];
        en: string[];
    };
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({
                         title,
                         description,
                         technologies,
                         images,
                         liveUrl,
                         githubUrl
                     }: ProjectCardProps) => {
    const { t, i18n } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentLanguageImages = images[i18n.language as keyof typeof images] || images.en;

    const handlePrevImage = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentImageIndex(prev =>
            prev === 0 ? currentLanguageImages.length - 1 : prev - 1
        );
        setTimeout(() => setIsAnimating(false), 300);
    };

    const handleNextImage = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentImageIndex(prev =>
            prev === currentLanguageImages.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsAnimating(false), 300);
    };

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [i18n.language]);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full relative overflow-hidden group">
                <div
                    className="absolute w-full h-full flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`
                    }}
                >
                    {currentLanguageImages.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`${t(title)} - Image ${index + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                {currentLanguageImages.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevImage}
                            disabled={isAnimating}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 disabled:opacity-50"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            disabled={isAnimating}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 disabled:opacity-50"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                            {currentLanguageImages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentImageIndex
                                            ? 'bg-white'
                                            : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
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