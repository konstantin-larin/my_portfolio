import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function AboutMeInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/me/" target={'_blank'}>
                <h3>{fullstackContent.RT_S_1[language]}</h3>
            </a>
            <p>
                <a href="https://konstantin-larin.github.io/me/" target={'_blank'}>
                    {fullstackContent.FOLLOW_THE_LINK[language]}
                </a>
                <br/>
                <a href="https://github.com/konstantin-larin/me/"
                    target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
            </p>
        </div>
    )
}