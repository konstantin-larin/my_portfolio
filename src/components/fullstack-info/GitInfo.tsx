import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function GitInfo(){
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <h3>
                {fullstackContent.GIT_1[language]}
            </h3>
        </div>
    )
}