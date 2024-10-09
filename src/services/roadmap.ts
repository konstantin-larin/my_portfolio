import {FullStackInfo} from "./FullStackInfo.ts";

export class BlockModel{
    name: string;
    info: FullStackInfo;
    type: string;
    constructor(name: string, info: FullStackInfo, type: string) {
        this.name = name;
        this.info = info;
        this.type = type;
    }
}


