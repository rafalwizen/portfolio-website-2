import {EmailIcon, GitHubIcon, LinkedInIcon} from "./Icons.tsx";
import {useState} from "react";
import Notification from "../Notification.tsx";
import {useTranslation} from "react-i18next";
import { MdOutlineContentCopy } from "react-icons/md";


const Socials = () => {
    const {t} = useTranslation();
    const [showNotification, setShowNotification] = useState(false);

    return (
        <div>
            <div className="space-y-6">
                <p>{t('contact.info')}</p>
                <a
                    onClick={() => {
                        navigator.clipboard.writeText('rafal.wizen@gmail.com')
                            .then(() => {
                                setShowNotification(true);
                            })
                            .catch(() => {
                                setShowNotification(true);
                            });
                    }}
                    className="flex items-center gap-3 text-text-primary hover:text-text-primary/70 transition-colors group cursor-pointer"
                >
                                <span
                                    className="w-10 h-10 flex items-center justify-center bg-background-light rounded-full group-hover:bg-[rgb(238,238,238)] transition-colors">
                                    <EmailIcon/>
                                </span>
                    rafal.wizen@gmail.com <MdOutlineContentCopy />
                </a>
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
            {showNotification && (
                <Notification
                    message={t("notifications.success")}
                    type="success"
                    onClose={() => setShowNotification(false)}
                />
            )}
        </div>

    );
};

export default Socials;