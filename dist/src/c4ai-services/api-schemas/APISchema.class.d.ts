import { C4AI_SDK_TYPES__APISchema_JSON } from "./types/APISchema.types";
import { C4AI_APISchema_Execute_Command } from "./commands/APISchema-Execute.command";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
export declare class C4AI_APISchema extends C4AI_SDK_Service<C4AI_SDK_TYPES__APISchema_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    protected static _commands: {
        EXECUTE: typeof C4AI_APISchema_Execute_Command;
    };
    static get Commands(): {
        EXECUTE: typeof C4AI_APISchema_Execute_Command;
    };
    constructor(sicOrNew: string | C4AI_SDK_TYPES__APISchema_JSON);
}
