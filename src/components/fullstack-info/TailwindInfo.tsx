import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function TailwindInfo(){
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContent.T_1[langauge]}</p>
            <p>{fullstackContent.T_2[langauge]}
                <a href="https://tailwindcss.com/docs/installation" target={'_blank'}> {fullstackContent.DOCS[language]} </a>
               {fullstackContent.T_3[langauge]}.
            </p>
        </div>
    )
}