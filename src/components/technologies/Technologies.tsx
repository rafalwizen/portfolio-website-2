import React, { useState } from 'react';
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import {
    Database,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { useTranslation } from "react-i18next";
import ClaudeAiIcon from '../../assets/icons/claude-ai-icon.svg';
import ChatGptIcon from '../../assets/icons/chatgpt-icon.svg';
import V0 from '../../assets/icons/v0.svg';

interface Technology {
    icon: React.ReactNode | React.ReactNode[];
    name: string;
    description: string;
}

const Technologies = () => {
    const { t } = useTranslation();
    const [expandedCards, setExpandedCards] = useState<number[]>([]);

    const toggleCard = (index: number) => {
        setExpandedCards(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const technologies: Technology[] = [
        {
            icon: <FaReact size={40} />,
            name: t("technologies.items.react.name"),
            description: t("technologies.items.react.description")
        },
        {
            icon: <FaJava size={40}/>,
            name: t("technologies.items.java.name"),
            description: t("technologies.items.java.description")
        },
        {
            icon: <Database size={40} />,
            name: t("technologies.items.db.name"),
            description: t("technologies.items.db.description")
        },
        {
            icon: [<BiLogoJavascript size={40} />, <BiLogoTypescript size={40} />],
            name: t("technologies.items.js.name"),
            description: t("technologies.items.js.description")
        },
        {
            icon: <SiExpress size={40} />,
            name: t("technologies.items.express.name"),
            description: t("technologies.items.express.description")
        },
        {
            icon: [<img src={ClaudeAiIcon} alt="ClaudeAI icon" className="w-10 h-10"/>,
                <img src={ChatGptIcon} alt="ChatGPT icon" className="w-10 h-10"/>,
                <img src={V0} alt="V0 icon" className="w-10 h-10"/>],
            name: t("technologies.items.ai.name"),
            description: t("technologies.items.ai.description")
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
                                <div className="mb-4 text-black flex gap-4 items-center">
                                    {Array.isArray(tech.icon) ? (
                                        tech.icon.map((icon, iconIndex) => (
                                            <div key={iconIndex}>
                                                {icon}
                                            </div>
                                        ))
                                    ) : (
                                        tech.icon
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {tech.name}
                                </h3>
                                <div className="relative">
                                    <p className={`text-black/80 overflow-hidden transition-all duration-300 ${
                                        expandedCards.includes(index) ? 'max-h-[1000px]' : 'max-h-24'
                                    }`}>
                                        {tech.description}
                                    </p>
                                    {tech.description.length > 100 && (
                                        <button
                                            onClick={() => toggleCard(index)}
                                            className="mt-2 text-black-600 hover:black flex items-center justify-center w-full gap-1"
                                        >
                                            {expandedCards.includes(index) ? (
                                                <>
                                                    {t("technologies.less")}
                                                    <ChevronUp size={20}/>
                                                </>
                                            ) : (
                                                <>
                                                    {t("technologies.more")}
                                                    <ChevronDown size={20}/>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;