import { C4AI_SDK_APIProvider } from "../../../global/C4AISDKAPIProvider.class";
import { C4AI_SDK_TYPES__EES_JSON } from "../types/EES.types";
import { C4AI_SDK_TYPES__EES_RawRequestExecutionResult, C4AI_SDK_TYPES__EES_RawRequestParams } from "../types/EESCommandsAPI.types";
export declare class C4AI_EESCommands_API extends C4AI_SDK_APIProvider<C4AI_SDK_TYPES__EES_JSON> {
    execute(sic: string, request: C4AI_SDK_TYPES__EES_RawRequestParams): Promise<C4AI_SDK_TYPES__EES_RawRequestExecutionResult>;
}
