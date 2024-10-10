import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function JSDOMInfo(){
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.JSD_1[language]}
            </p>
            <p>
                {fullstackContent.JSD_2[language]}
                <a href={'https://learn.javascript.ru/'} target={'_blank'}> LearnJavaScript</a>.
            </p>
            <p>
                {fullstackContent.JSD_3[language]}
                <a href="https://stackoverflow.com/" target={'_blank'}> StackOverflow</a>,
                <a href="https://codepen.io/" target={'_blank'}> CodePen</a>.
            </p>
            <p>
               {fullstackContent.JSD_4[language]}:
                <ul>
                    <li>{fullstackContent.JSD_5[language]}</li>
                    <li>DNS</li>
                    <li>HTTP</li>
                    <li>TCP/IP protocol</li>
                </ul>
            </p>
        </div>
    )
}