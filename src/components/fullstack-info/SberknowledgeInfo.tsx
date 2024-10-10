import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function SberknowledgeInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/sberknowledge/" target={'_blank'}>
                <h3>Sberknowledge</h3>
            </a>
            {/*<p>Как раз здесь я активно использовал</p>*/}
            <a href="https://konstantin-larin.github.io/sberknowledge/" target={'_blank'}>
                <p>{fullstackContent.FOLLOW_THE_LINK[language]}</p>
            </a>
        </div>
    )
}