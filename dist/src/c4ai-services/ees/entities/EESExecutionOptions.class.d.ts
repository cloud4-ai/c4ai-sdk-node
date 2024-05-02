import { C4AI_SDK_TYPES__EES_RawRequestExecutionOptions } from "../types/EESCommandsAPI.types";
import { C4AI_SDK_TYPES__EES_IExecutionOptions } from "../types/EESExecutionOptions.types";
export declare class C4AI_EES_ExecutionOptions {
    /**
    * The priority of the request and the way it should be executed.
    * Applicable only in case when EES priority is set to Configurable during EES Wizard.
    * Otherwise, will be ignored, and EES original priority will be used instead.
    */
    private priority?;
    /**
     * Allows to prevent the execution of the same request multiple times.
     */
    private deduplicationId?;
    /**
     * The service that may be used in case of unsuccessful retries
     */
    private fallback?;
    /**
     * The number of retries.
     * If not provided, the default value will be used from EES Wizard.
     */
    private retries?;
    /**
     * The callback channel in case when EES is async.
     * In case when it's not provided the default channel will be used from EES Wizard.
     */
    private callback?;
    constructor(conf?: Partial<C4AI_SDK_TYPES__EES_IExecutionOptions>);
    toJSON(): C4AI_SDK_TYPES__EES_RawRequestExecutionOptions;
}
