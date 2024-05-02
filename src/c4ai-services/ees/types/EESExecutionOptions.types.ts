import { C4AI_SDK_TYPES__EES_ExecutionCommands, C4AI_SDK_TYPES__EES_ExecutionPriority } from "./EES.types";


export interface C4AI_SDK_TYPES__EES_IExecutionOptions {

    /**
     * The priority of the request and the way it should be executed.
     * Applicable only in case when EES priority is set to Configurable during EES Wizard.
     * Otherwise, will be ignored, and EES original priority will be used instead.
     */
    priority?: C4AI_SDK_TYPES__EES_ExecutionPriority,

    /**
     * Allows to prevent the execution of the same request multiple times.
     */
    deduplicationId?: string,

    /**
     * The service that may be used in case of unsuccessful retries
     */
    fallback?: Array<C4AI_SDK_TYPES__EES_ExecutionCommands>,

    /**
     * The number of retries.
     * If not provided, the default value will be used from EES Wizard.
     */
    retries?: number,

    /**
     * The fallback channel in case when EES is async.
     * In case when it's not provided the default channel will be used from EES Wizard.
     */
    callback?: Array<C4AI_SDK_TYPES__EES_ExecutionCommands>,
}