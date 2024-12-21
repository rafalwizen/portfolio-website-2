import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === 'pl' ? 'en' : 'pl';
        i18n.changeLanguage(newLang);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-black hover:text-gray-600"
                        >
                            {t('nav.home')}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-black hover:text-gray-600"
                        >
                            {t('nav.about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-black hover:text-gray-600"
                        >
                            {t('nav.portfolio')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-black hover:text-gray-600"
                        >
                            {t('nav.contact')}
                        </button>
                    </div>
                    <button
                        onClick={changeLanguage}
                        className="px-3 py-1 rounded border border-black text-black hover:bg-gray-100"
                    >
                        {i18n.language === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;