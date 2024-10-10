import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function ChessInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/ts_learn/">
                <p>{fullstackContent.SEE[language]}</p>
            </a>

            <p>
                {fullstackContent.CH_S_1[language]}
                {fullstackContent.CH_S_2[language]}<a href="https://youtu.be/mUvYGUYMvKo?si=Cll9mX5Y7-107gTm" target={'_blank'}>{fullstackContent.CH_S_3[language]}</a>
                {fullstackContent.CH_S_4[language]}
            </p>
        </div>
    )
}