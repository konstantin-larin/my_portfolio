import Moon from "../../assets/icons/Moon.tsx";
import Sun from "../../assets/icons/Sun.tsx";
import {useContext, useEffect, useState} from "react";
import {LanguageContext} from "./contexts/LanguageContext.tsx";
import {Language} from "../../services/fullstack-content.ts";
export default function Settings(){
    const languageContext = useContext(LanguageContext);
    const oppositeLanguage : Language = languageContext?.language === 'ru' ? 'en' : 'ru';
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        if(theme === 'dark') document.body.classList.remove('dark');
        else document.body.classList.add('dark');
    }, [theme]);
    return (
        <aside className={'settings'}>
            <button className={"icon-button"} onClick={() => {
                if(languageContext){
                    languageContext.setLanguage(oppositeLanguage);
                }
            }}>
                {oppositeLanguage[0].toUpperCase() + oppositeLanguage[1]}
            </button>
            <button onClick={() => {
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                localStorage.setItem('theme', newTheme);
                setTheme(newTheme);
            }}>
                {theme === 'dark' ?  <Moon></Moon> : <Sun></Sun>}
            </button>
        </aside>
    )
}