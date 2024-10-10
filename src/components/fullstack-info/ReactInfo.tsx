import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function ReactInfo(){
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.R_1[language]}
            </p>
            <p>
                {fullstackContent.R_2[language]} <a href="https://react.dev/" target={'_blank'}>{fullstackContent.DOCS[language]}</a>,
                <a href="https://konstantin-larin.github.io/react-learning/"
                    target={'_blank'}> {fullstackContent.R_3[language]}</a>, {fullstackContent.R_4[language]}.
            </p>
        </div>
    )
}