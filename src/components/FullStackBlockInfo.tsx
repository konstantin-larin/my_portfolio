import BlockInfo from "./common/BlockInfo.tsx";
import {BlockModel} from "../services/roadmap.ts";
import {FullStackInfo} from "../services/FullStackInfo.ts";
import HTMLCSSInfo from "./fullstack-info/HTMLCSSInfo.tsx";
import StaticPagesInfo from "./fullstack-info/StaticPagesInfo.tsx";
import JSLangInfo from "./fullstack-info/JSLangInfo.tsx";
import TasksInfo from "./fullstack-info/TasksInfo.tsx";
import JSDOMInfo from "./fullstack-info/JSDOMInfo.tsx";
import BemInfo from "./fullstack-info/BemInfo.tsx";
import LessInfo from "./fullstack-info/LessInfo.tsx";
import InteractiveSitesInfo from "./fullstack-info/InteractiveSitesInfo.tsx";
import SberknowledgeInfo from "./fullstack-info/SberknowledgeInfo.tsx";
import JSAdvancedInfo from "./fullstack-info/JSAdvancedInfo.tsx";
import AutoonlineInfo from "./fullstack-info/AutoonlineInfo.tsx";
import GitInfo from "./fullstack-info/GitInfo.tsx";
import ElectronInfo from "./fullstack-info/ElectronInfo.tsx";
import DesktopAppInfo from "./fullstack-info/DesktopAppInfo.tsx";
import ReactInfo from "./fullstack-info/ReactInfo.tsx";
import TailwindInfo from "./fullstack-info/TailwindInfo.tsx";
import AboutMeInfo from "./fullstack-info/AboutMeInfo.tsx";
import TypeScriptInfo from "./fullstack-info/TypeScriptInfo.tsx";
import ChessInfo from "./fullstack-info/ChessInfo.tsx";
import SignalInfo from "./fullstack-info/SignalInfo.tsx";
import SQLInfo from "./fullstack-info/SQLInfo.tsx";
import NextInfo from "./fullstack-info/NextInfo.tsx";


export default function FullStackBlockInfo({block,hidden, setHidden}:
{block : BlockModel, hidden: boolean, setHidden: (hidden: boolean) => void}){
    const info = block.info;
    return (
        <BlockInfo block={block} hidden={hidden} setHidden={setHidden}>
            {info === FullStackInfo.HTML && <HTMLCSSInfo/>}
            {info === FullStackInfo.STATIC_PAGES && <StaticPagesInfo/>}
            {info === FullStackInfo.JS_1 && <JSLangInfo />}
            {info === FullStackInfo.CODEWARS && <TasksInfo/>}
            {info === FullStackInfo.JS_2 && <JSDOMInfo/>}
            {info === FullStackInfo.BEM && <BemInfo/>}
            {info === FullStackInfo.SIGNAL && <SignalInfo/>}
            {info === FullStackInfo.INTERACTIVE_SITES && <InteractiveSitesInfo/>}
            {info === FullStackInfo.LESS && <LessInfo/>}
            {info === FullStackInfo.SBERKNOWLEDGE && <SberknowledgeInfo/>}
            {info === FullStackInfo.ADVANCED_JS && <JSAdvancedInfo/>}
            {info === FullStackInfo.AUTOONLINE && <AutoonlineInfo/>}
            {info === FullStackInfo.GIT && <GitInfo/>}
            {info === FullStackInfo.ELECTRON && <ElectronInfo/>}
            {info === FullStackInfo.CARD_LEARNING && <DesktopAppInfo/>}
            {info === FullStackInfo.REACT && <ReactInfo/>}
            {info === FullStackInfo.TAILWIND && <TailwindInfo/>}
            {info === FullStackInfo.LARJ && <AboutMeInfo/>}
            {info === FullStackInfo.TYPESCRIPT && <TypeScriptInfo/>}
            {info === FullStackInfo.Chess && <ChessInfo/>}
            {info === FullStackInfo.SQL && <SQLInfo/>}
            {info === FullStackInfo.NEXT && <NextInfo/>}
        </BlockInfo>
    )
}