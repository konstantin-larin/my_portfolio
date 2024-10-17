import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function SberknowledgeInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/sberknowledge/" target={'_blank'}>
                <h3>Sberknowledge</h3>
            </a>
            <p>{fullstackContent.LESS_S_1[language]}</p>
            <p>
                <a href="https://konstantin-larin.github.io/sberknowledge/" target={'_blank'}>
                    {fullstackContent.FOLLOW_THE_LINK[language]}
                </a>
                <br/>
                <a href="https://github.com/konstantin-larin/sberknowledge/"
                    target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
            </p>
        </div>
    )
}