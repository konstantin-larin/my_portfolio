import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function InteractiveSitesInfo() {
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <ul>
                {fullstackContent.INT_S_1[language]}
                <li>
                    <a href="https://konstantin-larin.github.io/vedexpress/" target={'_blank'}>
                        <h3>
                            VedExpress
                        </h3>
                    </a>
                    <ul>
                        {fullstackContent.FEATURES[language]}:
                        <li>
                            {fullstackContent.INT_S_2[language]}
                        </li>
                        <li>
                            {fullstackContent.INT_S_3[language]}
                        </li>
                        <li>
                            {fullstackContent.INT_S_4[language]}
                        </li>
                    </ul>

                    <p>
                        <a href="https://konstantin-larin.github.io/vedexpress/" target={'_blank'}>
                            {fullstackContent.FOLLOW_THE_LINK[language]}
                        </a>
                        <br/>
                        <a href="https://github.com/konstantin-larin/vedexpress/"
                            target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
                    </p>
                </li>
                <li>
                    <a href="https://konstantin-larin.github.io/aperture/" target={'_blank'}>
                        <h3>
                        Aperture
                        </h3>
                    </a>
                    <ul>
                        {fullstackContent.FEATURES[language]}:
                        <li>
                            {fullstackContent.INT_S_5[language]}
                        </li>
                        <li>
                            {fullstackContent.INT_S_6[language]}
                        </li>
                        <li>
                            {fullstackContent.INT_S_7[language]}
                        </li>
                    </ul>
                    <p>
                        <a href="https://konstantin-larin.github.io/aperture/" target={'_blank'}>
                            {fullstackContent.FOLLOW_THE_LINK[language]}
                        </a>
                        <br/>
                        <a href="https://github.com/konstantin-larin/aperture/"
                            target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
                    </p>

                </li>
            </ul>
        </div>
    )
}