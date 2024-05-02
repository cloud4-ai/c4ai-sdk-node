import { C4AI_SDK_TYPES__EES_ExecutionCommands, C4AI_SDK_TYPES__EES_ExecutionPriority } from "../types/EES.types";
import { C4AI_SDK_TYPES__EES_RawRequestExecutionOptions } from "../types/EESCommandsAPI.types";
import { C4AI_SDK_TYPES__EES_IExecutionOptions } from "../types/EESExecutionOptions.types";

export class C4AI_EES_ExecutionOptions {

    /**
    * The priority of the request and the way it should be executed.
    * Applicable only in case when EES priority is set to Configurable during EES Wizard.
    * Otherwise, will be ignored, and EES original priority will be used instead.
    */
    private priority?: C4AI_SDK_TYPES__EES_ExecutionPriority

    /**
     * Allows to prevent the execution of the same request multiple times.
     */
    private deduplicationId?: string

    /**
     * The service that may be used in case of unsuccessful retries
     */
    private fallback?: Array<C4AI_SDK_TYPES__EES_ExecutionCommands>

    /**
     * The number of retries.
     * If not provided, the default value will be used from EES Wizard.
     */
    private retries?: number

    /**
     * The callback channel in case when EES is async.
     * In case when it's not provided the default channel will be used from EES Wizard.
     */
    private callback?: Array<C4AI_SDK_TYPES__EES_ExecutionCommands>


    constructor(conf: Partial<C4AI_SDK_TYPES__EES_IExecutionOptions> = {}) {

        this.priority = conf.priority;
        this.deduplicationId = conf.deduplicationId;
        if (conf.fallback) this.fallback = conf.fallback;
        if (conf.callback) this.callback = conf.callback;
        this.retries = conf.retries;
    }


    toJSON(): C4AI_SDK_TYPES__EES_RawRequestExecutionOptions {
        return {
            priority: this.priority,
            deduplicationId: this.deduplicationId,
            fallback: this.fallback?.map((command) => command.toJSON()),
            retries: this.retries,
            callback: this.callback?.map((command) => command.toJSON()),
        }
    }
}