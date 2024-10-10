import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function BemInfo() {
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.BEM_S_1[language]}
            </p>
            <p>
                {fullstackContent.BEM_S_2[language]}
                <a href="https://ru.bem.info/methodology/" target={'_blank'}> {fullstackContent.BEM[language]} </a>
                ({fullstackContent.BEM_S_3[language]})
                { fullstackContent.BEM_S_4[language]}
            </p>
        </div>
    )
}