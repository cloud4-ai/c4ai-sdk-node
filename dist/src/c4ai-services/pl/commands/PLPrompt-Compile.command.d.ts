import { C4AI_RequestParameters } from "../../../global/request/C4AIRequestParameters.class";
import { C4AI_PLPromptCommand } from "./PLPrompt.command";
import { C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandAPIFormat, C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandConstructorParams } from "../types/PLPromptCommand.types";
export declare class C4AI_PLPrompt_Compile_Command extends C4AI_PLPromptCommand {
    protected name: string;
    protected parameters: C4AI_RequestParameters;
    constructor(params: C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandConstructorParams);
    toJSON(): C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandAPIFormat;
}
