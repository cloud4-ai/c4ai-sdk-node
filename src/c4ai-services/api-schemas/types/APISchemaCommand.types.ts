import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "@c4ai-sdk/types/C4AIServiceCommand.types";
import { C4AI_APISchema } from "../APISchema.class";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
import { C4AI_SDK_Dictionary } from "@c4ai-sdk/types/common.types";

export type C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams = {

    /**
     * APISchema Request Parameters. 
     * 
     * To find an appropriate request parameters please check your APISchema configurations on https://console.cloud4.ai
     * 
     * Those parameters may logged during execution on C4AI side.
     */
    parameters: C4AI_RequestParameters,

} & C4AI_SDK_TYPES__ServiceCommandConstructorParams<C4AI_APISchema>



export type C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity = {
    /**
     * Target service that should be used as an executor.
     * 
     * To find a proper sic: sign in to https://portal.cloud4.ai
     */
    sic: string,
    /**
     * Those parameters may logged during execution.
     */
    parameters: C4AI_SDK_Dictionary<any>,

    /**
     * A binding Object with parameters that should be extracted from other services.
     * 
     * Read more in docs: https://docs.cloud4.ai/ees/bindings
     */
    _bindings?: any,
} & C4AI_SDK_TYPES__ServiceCommand_APIEntity