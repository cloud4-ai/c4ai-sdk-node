import { C4AI_SDK_TYPES__AAC_JSON } from "./types/AAC.types";
import { C4AI_AAC_Execute_Command } from "./commands/AAC-Execute.command";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
export declare class C4AI_AAC extends C4AI_SDK_Service<C4AI_SDK_TYPES__AAC_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    protected static _commands: {
        EXECUTE: typeof C4AI_AAC_Execute_Command;
    };
    static get Commands(): {
        EXECUTE: typeof C4AI_AAC_Execute_Command;
    };
    constructor(sicOrNew: string | C4AI_SDK_TYPES__AAC_JSON);
}
