import {FullStackInfo} from "./FullStackInfo.ts";

export class BlockModel{
    name: {ru: string, en: string};
    info: FullStackInfo;
    type: string;
    constructor(name: {ru: string, en: string}, info: FullStackInfo, type: string) {
        this.name = name;
        this.info = info;
        this.type = type;
    }
}


