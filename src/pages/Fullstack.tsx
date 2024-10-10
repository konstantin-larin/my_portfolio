import Roadmap from "../components/common/Roadmap.tsx";
import Links from "../components/common/Links.tsx";
import Settings from "../components/common/Settings.tsx";
import {useContext} from "react";
import {fullstackContent} from "../services/fullstack-content.ts"
import {LanguageContext} from "../components/common/contexts/LanguageContext.tsx";
import {BlockModel} from "../services/roadmap.ts";
import {FullStackInfo} from "../services/FullStackInfo.ts";

export default function Fullstack() {
    const {language} = useContext(LanguageContext);
    const roadmap = [
        new BlockModel('HTML  & CSS', FullStackInfo.HTML, 'learn'),
        new BlockModel(fullstackContent.ST_P_NAME[language], FullStackInfo.STATIC_PAGES, 'practice'),
        new BlockModel("Язык JavaScript", FullStackInfo.JS_1, 'learn'),
        new BlockModel("Практические задачи", FullStackInfo.CODEWARS, 'practice'),
        new BlockModel('JavaScript DOM', FullStackInfo.JS_2, 'learn'),
        new BlockModel('Интеркативные сайты', FullStackInfo.INTERACTIVE_SITES, 'practice'),
        new BlockModel('Bootstrap & JQuery', FullStackInfo.BEM, 'learn'),
        new BlockModel('Сайт с Bootstrap', FullStackInfo.SIGNAL, 'practice'),
        new BlockModel('Less', FullStackInfo.LESS, 'learn'),
        new BlockModel("Сайт на Less", FullStackInfo.SBERKNOWLEDGE, 'practice'),
        new BlockModel('Продвинутый JavaScript', FullStackInfo.ADVANCED_JS, 'learn'),
        new BlockModel('Сайт с js-анимациями', FullStackInfo.AUTOONLINE, 'practice'),
        new BlockModel('Git', FullStackInfo.GIT, 'learn'),
        new BlockModel("Electron", FullStackInfo.ELECTRON, 'learn'),
        new BlockModel('Desktop приложение', FullStackInfo.CARD_LEARNING, 'practice'),
        new BlockModel('React', FullStackInfo.REACT, 'learn'),
        new BlockModel('Tailwind CSS', FullStackInfo.TAILWIND, 'learn'),
        new BlockModel('Сайт на Tailwind и React', FullStackInfo.LARJ, 'practice'),
        new BlockModel("TypeScript", FullStackInfo.TYPESCRIPT, 'learn'),
        new BlockModel('Шахматы на TypeScript', FullStackInfo.Chess, 'practice'),
    ];
    return <>
        <Roadmap name={fullstackContent.TITLE[language]} roadmap={roadmap}></Roadmap>
        <Links></Links>
        <Settings></Settings>
    </>
}