import {useTranslation} from 'react-i18next';
import ContactForm from './ContactForm.tsx';
import {LinkedInIcon, GitHubIcon} from './Icons.tsx';

const Contact = () => {
    const {t} = useTranslation();

    return (
        <section id="contact" className="min-h-screen px-4 bg-background">
            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12">
                    {t('contact.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-text-primary">
                            {t('contact.social')}
                        </h3>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://linkedin.com/in/rafał-wiżeń-637357258"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-primary hover:text-text-primary/70 transition-colors group"
                            >
                                <span
                                  className="w-10 h-10 flex items-center justify-center bg-background-light rounded-full group-hover:bg-[rgb(238,238,238)] transition-colors">
                                  <LinkedInIcon/>
                                </span>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/rafalwizen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-primary hover:text-text-primary/70 transition-colors group"
                            >
                                <span
                                    className="w-10 h-10 flex items-center justify-center bg-background-light rounded-full group-hover:bg-[rgb(238,238,238)] transition-colors">
                                    <GitHubIcon/>
                                </span>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-background-light p-8 rounded-xl">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;