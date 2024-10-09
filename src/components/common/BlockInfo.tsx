import {BlockModel} from "../../services/roadmap.ts";
import Cross from "../../assets/icons/Cross.tsx";
import {ReactNode} from "react";

export default function BlockInfo({block, hidden, setHidden, children}:
                                      {
                                          block: BlockModel,
                                          hidden: boolean,
                                          setHidden: (hidden: boolean) => void,
                                          children: ReactNode,
                                      }) {
    return (
        <div className={'block-info ' + block.type + ' ' + (hidden ? 'block-info_hidden' : '')}>
            <button onClick={() => {
                setHidden(true);
            }} className={'block-info-cross'}><Cross></Cross></button>
            <h2>{block.name}</h2>
            {children}
        </div>
    )
}