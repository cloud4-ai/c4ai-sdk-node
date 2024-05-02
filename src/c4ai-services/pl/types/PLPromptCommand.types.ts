import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "@c4ai-sdk/types/C4AIServiceCommand.types";
import { C4AI_PLPrompt } from "../PLPrompt.class";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
import { C4AI_SDK_Dictionary } from "@c4ai-sdk/types/common.types";


// ====================================================
// ===============EXECUTE COMMAND======================
// ==================================================== 

// Command Constructor Params
export type C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandConstructorParams = {
    /**
     * A set of prompt Parameters that will be used to compile the prompt.
     * 
     * The list of parameters can be found in Prompt Definition using C4AI Cloud console: https://console.cloud4.ai
     * Or directly in C4AI_PLPrompt class instance in case when data was loaded from the API. 
     */
    parameters: C4AI_RequestParameters,

} & C4AI_SDK_TYPES__ServiceCommandConstructorParams<C4AI_PLPrompt>



// Command JSON Format
export type C4AI_SDK_TYPES__PLPrompt_COMPILE_ServiceCommandAPIFormat = {

    parameters: C4AI_SDK_Dictionary<any>

} & C4AI_SDK_TYPES__ServiceCommand_APIEntity
