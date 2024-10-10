import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
import gif from "../../assets/card_learning.gif"
export default function DesktopAppInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <h3>Card Learning</h3>
            <p>
                {fullstackContent.DESK_APP_1[language]}
            </p>
            <p>
                <a href="https://github.com/konstantin-larin/Card-Learning"
                    target={'_blank'}
                >{fullstackContent.FOLLOW_THE_REPO[language]}</a>
            </p>
            <p>
                <img src={gif} alt="card learning gif"/>
            </p>
        </div>
    )
}