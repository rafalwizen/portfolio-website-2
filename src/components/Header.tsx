import Separator from "./Separator.tsx";
import {useTranslation} from "react-i18next";

export interface HeaderProps {
    title: string
}

const Header = ({title}: HeaderProps) => {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary text-center">
                {t(title)}
            </h2>
            <Separator/>
        </div>
    );
};

export default Header;