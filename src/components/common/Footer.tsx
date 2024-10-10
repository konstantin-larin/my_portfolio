import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
import {LanguageContext} from "./contexts/LanguageContext.tsx";
export default function Footer(){
    const {language} = useContext(LanguageContext);
    return (
        <footer className={'footer'}>
            {fullstackContent.FOOTER[language]}
        </footer>
    )
}