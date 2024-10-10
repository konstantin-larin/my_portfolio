import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function JSLangInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.JS_LANG_1[language]}
            </p>
            <p>
                {fullstackContent.JS_LANG_2[language]}
            </p>
            <p>
                {fullstackContent.JS_LANG_3[language]}
                <a href="https://learn.javascript.ru/" target={'_blank'}> LearnJavaScript</a>
            </p>
        </div>
    )
}