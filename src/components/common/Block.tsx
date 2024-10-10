import {BlockModel} from "../../services/roadmap.ts";
import {forwardRef} from "react";
import {useContext} from "react";
import {LanguageContext} from "./contexts/LanguageContext.tsx";

interface BlockProps {
    model: BlockModel,
    setBlock: (block: BlockModel) => void,
    setHidden: (bool: boolean) => void,
}

export const Block = forwardRef<HTMLDivElement, BlockProps>(
    ({model, setBlock, setHidden}, ref) => {
        const {language} = useContext(LanguageContext);
        return (
            <div
                ref={ref}
                className={'block-item ' + model.type}
                onClick={() => {
                    setHidden(false);
                    setBlock(model);
                }}>{model.name[language]}</div>
        )
    }
);
