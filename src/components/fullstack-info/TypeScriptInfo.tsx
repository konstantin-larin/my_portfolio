import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function TypeScriptInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContenxt.TS_1[language]}.</p>
            <p>{fullstackContenxt.TS_2[language]}.</p>
        </div>
    )
}