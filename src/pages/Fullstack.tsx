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
        new BlockModel(fullstackContent.HC, FullStackInfo.HTML, 'learn'),
        new BlockModel(fullstackContent.ST_P, FullStackInfo.STATIC_PAGES, 'practice'),
        new BlockModel(fullstackContent.JS_LANG, FullStackInfo.JS_1, 'learn'),
        new BlockModel(fullstackContent.PR_T, FullStackInfo.CODEWARS, 'practice'),
        new BlockModel(fullstackContent.JSD, FullStackInfo.JS_2, 'learn'),
        new BlockModel(fullstackContent.INT_S, FullStackInfo.INTERACTIVE_SITES, 'practice'),
        new BlockModel(fullstackContent.BJ, FullStackInfo.BEM, 'learn'),
        new BlockModel(fullstackContent.BS_S, FullStackInfo.SIGNAL, 'practice'),
        new BlockModel(fullstackContent.LESS, FullStackInfo.LESS, 'learn'),
        new BlockModel(fullstackContent.LESS_S, FullStackInfo.SBERKNOWLEDGE, 'practice'),
        new BlockModel(fullstackContent.ADV_JS, FullStackInfo.ADVANCED_JS, 'learn'),
        new BlockModel(fullstackContent.ANIM_S, FullStackInfo.AUTOONLINE, 'practice'),
        new BlockModel(fullstackContent.GIT, FullStackInfo.GIT, 'learn'),
        new BlockModel(fullstackContent.EL, FullStackInfo.ELECTRON, 'learn'),
        new BlockModel(fullstackContent.DESK_APP, FullStackInfo.CARD_LEARNING, 'practice'),
        new BlockModel(fullstackContent.R, FullStackInfo.REACT, 'learn'),
        new BlockModel(fullstackContent.T, FullStackInfo.TAILWIND, 'learn'),
        new BlockModel(fullstackContent.RT_S, FullStackInfo.LARJ, 'practice'),
        new BlockModel(fullstackContent.TS, FullStackInfo.TYPESCRIPT, 'learn'),
        new BlockModel(fullstackContent.CH_S, FullStackInfo.Chess, 'practice'),
        new BlockModel(fullstackContent.SQL, FullStackInfo.SQL, 'learn'),
    ];
    return <>
        <Roadmap name={fullstackContent.TITLE[language]} roadmap={roadmap}></Roadmap>
        <Links></Links>
        <Settings></Settings>
    </>
}