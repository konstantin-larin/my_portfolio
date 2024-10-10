import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function ElectronInfo(){
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.EL_1[language]}
            </p>
        </div>
    )
}