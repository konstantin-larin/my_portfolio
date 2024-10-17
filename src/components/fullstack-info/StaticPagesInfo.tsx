import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function StaticPagesInfo() {
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContent.ST_P_1[language]}.</p>
            <p>{fullstackContent.ST_P_2[language]}.</p>

            <ul>
                <li>
                    <a href="https://konstantin-larin.github.io/studyUSA/"
                        target={'_blank'}>
                        <h3>
                            StudyUSA
                        </h3>
                    </a>
                    <a href="https://konstantin-larin.github.io/studyUSA/"
                        target={'_blank'}
                    >{fullstackContent.FOLLOW_THE_LINK[language]}</a> <br/>
                    <a href="https://github.com/konstantin-larin/studyUSA" target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
                </li>

                <li>
                    <a
                        href="https://konstantin-larin.github.io/avitoparser/"
                        target={'_blank'}
                    >
                        <h3>Avitoparser</h3>
                    </a>

                    <a
                        href="https://konstantin-larin.github.io/avitoparser/"
                        target={'_blank'}
                    >{fullstackContent.FOLLOW_THE_LINK[language]}</a>
                    <br/>
                    <a href="https://github.com/konstantin-larin/avitoparser"
                        target={'_blank'}>{fullstackContent.FOLLOW_THE_REPO[language]}</a>
                </li>
            </ul>
        </div>
    )
}