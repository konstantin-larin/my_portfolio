import {BlockModel} from "../../services/roadmap.ts";
import {forwardRef} from "react";

interface BlockProps {
    model: BlockModel,
    setBlock: (block: BlockModel) => void,
    setHidden: (bool: boolean) => void,
}

export const Block = forwardRef<HTMLDivElement, BlockProps>(
    ({model, setBlock, setHidden}, ref) => {
        return (
            <div
                ref={ref}
                className={'block-item ' + model.type}
                onClick={() => {
                    setHidden(false);
                    setBlock(model);
                }}>{model.name}</div>
        )
    }
);
