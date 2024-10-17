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

            <p>
                <a href="https://konstantin-larin.github.io/autoonline/" target={'_blank'}>
                    {fullstackContent.FOLLOW_THE_LINK[language]}
                </a>
                <br/>
                <a href="https://github.com/konstantin-larin/autoonline/"
                    target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
            </p>

        </div>
    )
}