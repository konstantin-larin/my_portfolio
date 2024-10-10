import {LanguageContext} from "../common/contexts/LanguageContext.tsx";
import {fullstackContent} from "../../services/fullstack-content.ts";
import {useContext} from "react";
export default function TasksInfo() {
    const {language} = useContext(LanguageContext);

    return (
        <div className={'block-info-inner'}>
            <p>{fullstackContent.PR_T_1[language]}.</p>
            <p>
                {fullstackContent.PR_T_2[language]}
                <a href={'https://www.codewars.com/users/Kstn'} target={'_blank'}> Codewars</a>. {fullstackContent.PR_T_3[language]}.
            </p>
            <p>{fullstackContent.PR_T_4[language]}
                <a href="https://leetcode.com/u/kleo3333/" target={'_blank'}> Leetcode</a>,
                <a href="https://coderun.yandex.ru/profile" target={'_blank'}> CodeRun</a>.
            </p>
        </div>
    )
}