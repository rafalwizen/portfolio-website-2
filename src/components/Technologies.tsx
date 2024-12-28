import React from 'react';

import {
    Code2,
    Database,
    Layout,
    Settings2,
    Smartphone,
    Globe
} from 'lucide-react';
import {useTranslation} from "react-i18next";

interface Technology {
    icon: React.ReactNode;
    name: string;
    description: string;
}

const Technologies = () => {
    const { t } = useTranslation();

    const technologies: Technology[] = [
        {
            icon: <Code2 size={40} />,
            name: "Frontend Development",
            description: "React, TypeScript, Next.js - tworzę responsywne i wydajne interfejsy użytkownika"
        },
        {
            icon: <Database size={40} />,
            name: "Backend Development",
            description: "Node.js, Express, MongoDB - projektuję skalowalne rozwiązania serwerowe"
        },
        {
            icon: <Layout size={40} />,
            name: "UI/UX Design",
            description: "Tailwind CSS, Material-UI - dbam o estetykę i użyteczność interfejsu"
        },
        {
            icon: <Settings2 size={40} />,
            name: "DevOps",
            description: "Git, Docker, CI/CD - automatyzuję procesy developerskie"
        },
        {
            icon: <Smartphone size={40} />,
            name: "Mobile Development",
            description: "React Native - tworzę aplikacje mobilne na iOS i Android"
        },
        {
            icon: <Globe size={40} />,
            name: "Web Performance",
            description: "Optymalizacja, SEO - dbam o szybkość i widoczność w sieci"
        }
    ];

    return (
        <section className="min-h-screen px-4 bg-[rgb(248,248,248)]">
            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center">
                    {t('technologies.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 text-black">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {tech.name}
                                </h3>
                                <p className="text-black/80">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;