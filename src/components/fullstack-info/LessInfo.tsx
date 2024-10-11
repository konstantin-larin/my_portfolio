import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function LessInfo(){
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.LESS_1[language]}
                <a href="https://lesscss.org/" target={'_blank'}> {fullstackContent.DOCS[language]}</a> {fullstackContent.LESS_2[language]}.
            </p>
        </div>
    )
}