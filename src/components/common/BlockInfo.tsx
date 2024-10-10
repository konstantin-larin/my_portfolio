import {BlockModel} from "../../services/roadmap.ts";
import Cross from "../../assets/icons/Cross.tsx";
import {ReactNode, useContext} from "react";
import {LanguageContext} from "./contexts/LanguageContext.tsx";

export default function BlockInfo({block, hidden, setHidden, children}:
                                      {
                                          block: BlockModel,
                                          hidden: boolean,
                                          setHidden: (hidden: boolean) => void,
                                          children: ReactNode,
                                      }) {
    const {language} = useContext(LanguageContext);
    return (
        <div className={'block-info ' + block.type + ' ' + (hidden ? 'block-info_hidden' : '')}>
            <button onClick={() => {
                setHidden(true);
            }} className={'block-info-cross'}><Cross></Cross></button>
            <h2>{block.name[language]}</h2>
            {children}
        </div>
    )
}