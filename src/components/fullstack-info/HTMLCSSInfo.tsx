import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";


export default function HTMLCSSInfo() {
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContent.HC_1[language]}</p>
            <ul>
                {fullstackContent.HC_2[language]}
                <li>{fullstackContent.HC_3[language]}</li>
                <li>{fullstackContent.HC_4[language]}</li>
                <li>{fullstackContent.HC_5[language]}</li>
                <li>{fullstackContent.HC_6[language]}</li>
            </ul>
            <ul>
                {fullstackContent.HC_7[language]}
                <a href="https://www.w3schools.com/" target={'_blank'}>
                    <li>W3Schools</li>
                </a>
                <a href="https://metanit.com/web/html5/" target={'_blank'}>
                    <li>Metanit</li>
                </a>
                <a href="https://habr.com/ru/companies/piter/articles/450682/" target={'_blank'}>
                    <li>{fullstackContent.HC_8[language]}</li>
                </a>
            </ul>
        </div>
    )
}