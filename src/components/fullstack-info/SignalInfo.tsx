import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function SignalInfo() {
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/signal_company/" target={'_blank'}>
                <h3>
                    Signal
                </h3>
            </a>
            <p>
                {fullstackContent.BS_S_1[language]}
            </p>
            <ul>
                {fullstackContent.FEATURES[language]}:
                <li>
                    {fullstackContent.BS_S_2[language]}
                </li>
                <li>
                    {fullstackContent.BS_S_3[language]}
                </li>
                <li>
                    {fullstackContent.BS_S_4[language]}
                </li>
            </ul>

            <p>
                <a href="https://konstantin-larin.github.io/signal_company/" target={'_blank'}>
                    {fullstackContent.FOLLOW_THE_LINK[language]}
                </a>
                <br/>
                <a href="https://github.com/konstantin-larin/signal_company"
                    target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
            </p>

        </div>
    )
}