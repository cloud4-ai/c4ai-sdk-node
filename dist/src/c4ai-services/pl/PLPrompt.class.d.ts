import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_SDK_TYPES__PLPrompt_JSON } from "./types/PLPrompt.types";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
import { C4AI_RequestParameters } from "../../global/request/C4AIRequestParameters.class";
import { C4AI_PLPrompt_Compile_Command } from "./commands/PLPrompt-Compile.command";
import { C4AI_PLPrompt_API } from "./api/PLPrompt.api";
export declare class C4AI_PLPrompt extends C4AI_SDK_Service<C4AI_SDK_TYPES__PLPrompt_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    parameters: C4AI_RequestParameters;
    markup: string;
    API: C4AI_PLPrompt_API;
    protected static _commands: {
        COMPILE: typeof C4AI_PLPrompt_Compile_Command;
    };
    static get Commands(): {
        COMPILE: typeof C4AI_PLPrompt_Compile_Command;
    };
    constructor(sicOrNew: string | any);
    init(): void;
    protected fromAPI(response: C4AI_SDK_TYPES__PLPrompt_JSON): this;
}
