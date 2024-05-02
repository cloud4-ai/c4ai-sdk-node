import { C4AI_SDK_Error } from "@c4ai-sdk/global/C4AISDKError.class";
import { C4AI_SDK_TYPES__AAC_ExecuteCommandAPIResult } from "@c4ai-sdk/services/aac/types/AACAPI.types";
import { C4AI_SDK_TYPES__EES_RawRequestExecutionResult } from "@c4ai-sdk/services/ees/types/EESCommandsAPI.types";
import { C4AI_SDK_TYPES__APIProviderError } from "@c4ai-sdk/types/C4AIAPIProvider.types";

export class C4AI_CommandRequest {

    protected rawResult!: C4AI_SDK_TYPES__EES_RawRequestExecutionResult;

    constructor(raw: C4AI_SDK_TYPES__EES_RawRequestExecutionResult) {
        this.rawResult = raw;
    }

    /**
     * The result of the command execution 
     * 
     * In case of success, the result will be an object with the key `result` containing the result of the command execution
     * The cases when execution not Completed, the result will be `undefined`
     */
    get result(): C4AI_SDK_TYPES__AAC_ExecuteCommandAPIResult | undefined {
        return this.rawResult.result;
    }


    /**
     * 
     * The error that occurred during the command execution
     */
    get error(): C4AI_SDK_TYPES__APIProviderError | undefined {
        return this.rawResult.error
            ? new C4AI_SDK_Error(this.rawResult.error)
            : undefined;
    }

    /**
     * Command Request ID. Can be used to track the status of the command execution
     * 
     * Or to debug the result of the command execution through C4AI Cloud console: https://console.cloud4.ai
     */
    get id(): string {
        return this.rawResult.id;
    }
}