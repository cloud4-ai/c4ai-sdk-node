import { C4AI_SDK_TYPES__IAPIServiceEntity } from "src/types/C4AIService.types"
import { C4AI_SDK_Dictionary } from "src/types/common.types"
import { C4AI_AAC_Execute_Command } from "@c4ai-sdk/services/aac/commands/AAC-Execute.command"

export type C4AI_SDK_TYPES__EES_JSON = {

} & C4AI_SDK_TYPES__IAPIServiceEntity


export type C4AI_SDK_TYPES__EES_ExecutionResponse = {
    result: any,
    payload?: C4AI_SDK_Dictionary<any>
}



export type C4AI_SDK_TYPES__EES_ExecutionCommands = C4AI_AAC_Execute_Command;


export enum C4AI_SDK_TYPES__EES_ExecutionPriority {
    /**
     * The request will be executed as soon as possible depending on the current load of the system.
     */
    AT_EASE = 'AT_EASE',

    /**
     * The request will be executed with the highest priority. But will be executed only after all INSTANT requests.
     * If the system is overloaded, the request may be delayed.
     */
    PRIORITIZED = 'PRIORITIZED',

    /**
     * Regardless of the system load, the request will be executed immediately.
     */
    INSTANT = 'INSTANT'
}