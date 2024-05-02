import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
import { C4AI_PLPromptCommand } from "./PLPrompt.command";
import { C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandAPIFormat, C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandConstructorParams } from "../types/PLPromptCommand.types";


export class C4AI_PLPrompt_Compile_Command extends C4AI_PLPromptCommand {

    protected name = 'GET_VALUE'
    protected parameters!: C4AI_RequestParameters


    constructor(
        params: C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandConstructorParams,
    ) {
        super(params);

        this.parameters = params.parameters;
    }



    toJSON(): C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandAPIFormat {
        return {
            sic: this.service.sic,
            operation: this.name,
            parameters: this.parameters.toJSON()
        }
    }
}