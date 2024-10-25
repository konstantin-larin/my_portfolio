import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";

export default function SQLInfo() {
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info-inner'}>
            <p>
                {fullstackContent.SQL_1[language]} <a href="https://sql-academy.org/ru/guide" target={'_blank'}>SQL ACADEMY</a>
            </p>
        </div>
    )
}