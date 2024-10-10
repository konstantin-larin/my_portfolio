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
            <a href="https://konstantin-larin.github.io/me/" target={'_blank'}>
                <p>{fullstackContent.FOLLOW_THE_LINK[language]}</p>
            </a>
        </div>
    )
}