import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function JSAdvancedInfo() {
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContent.ADV_JS_1[language]}</p>
            <p>{fullstackContent.ADV_JS_2[language]} <a href={'https://learn.javascript.ru/'} target={'_blank'}> LearnJavaScript</a>.</p>
            <ul>{fullstackContent.ADV_JS_3[language]}:
                <li>Fetch</li>
                <li>{fullstackContent.ADV_JS_4[language]}</li>
                <li>{fullstackContent.ADV_JS_5[language]}</li>
                <li>{fullstackContent.ADV_JS_6[language]}</li>
            </ul>
        </div>
    )
}