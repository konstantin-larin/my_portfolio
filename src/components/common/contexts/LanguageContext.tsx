import {createContext, ReactNode, useState} from "react";
import {Language} from "../../../services/fullstack-content.ts";
interface LanguageContextProps {
    language: Language,
    setLanguage: (language: Language) => void;
}
export const LanguageContext = createContext<LanguageContextProps>({
    language: 'ru',
    setLanguage: (language : Language) => {
        console.log(language);
    }
});
export function LanguageProvider({children} : {children: ReactNode}){
    let languageFromLocal : string = localStorage.getItem('lang') || (navigator.language.slice(0,2));
    const [language, setLanguage]  = useState<Language>(languageFromLocal as Language);

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage: (language: Language) => {
                localStorage.setItem('lang', language);
                setLanguage(language)
            }
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
