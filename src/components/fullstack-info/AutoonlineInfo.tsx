import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function AutoOnlineInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/autoonline/" target={"_blank"}>
                <h3>AutoOnline</h3>
            </a>
            <ul>
                {fullstackContent.FEATURES[language]}:
                <li>{fullstackContent.ANIM_S_1[language]}</li>
                <li>{fullstackContent.ANIM_S_2[language]}</li>
            </ul>
        </div>
    )
}