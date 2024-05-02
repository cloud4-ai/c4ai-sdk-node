import { C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity } from "../../aac/types/AACCommands.types";
import { C4AI_SDK_TYPES__EES_ExecutionPriority } from "./EES.types";
import { C4AI_SDK_TYPES__APIProviderError } from "../../../types/C4AIAPIProvider.types";
import { C4AI_SDK_TYPES__AAC_ExecuteCommandAPIResult } from "../../aac/types/AACAPI.types";
export type C4AI_SDK_TYPES__EES_RawRequestExecutionCommands = C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity;
export type C4AI_SDK_TYPES__EES_RawRequestParams = {
    /**
     * The command that should be executed.
     *
     */
    command: C4AI_SDK_TYPES__EES_RawRequestExecutionCommands;
    /**
     * The property that defines the priority of the request and the way it should be executed.
     * It provides the options for time scheduling and execution limits in time.
     */
    schedule?: C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule;
    /**
     * The property that defines the priority of the request and the way it should be executed.
     */
    options?: C4AI_SDK_TYPES__EES_RawRequestExecutionOptions;
};
export interface C4AI_SDK_TYPES__EES_RawRequestExecutionOptions {
    /**
     * The priority of the request and the way it should be executed.
     * Applicable only in case when EES priority is set to Configurable during EES Wizard.
     * Otherwise, will be ignored, and EES original priority will be used instead.
     */
    priority?: C4AI_SDK_TYPES__EES_ExecutionPriority;
    /**
     * Allows to prevent the execution of the same request multiple times.
     */
    deduplicationId?: string;
    /**
     * The service that may be used in case of unsuccessful retries
     */
    fallback?: Array<C4AI_SDK_TYPES__EES_RawRequestExecutionCommands>;
    /**
     * The number of retries.
     * If not provided, the default value will be used from EES Wizard.
     */
    retries?: number;
    /**
     * The fallback channel in case when EES is async.
     * In case when it's not provided the default channel will be used from EES Wizard.
     */
    callback?: Array<C4AI_SDK_TYPES__EES_RawRequestExecutionCommands>;
}
export interface C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule {
    /**
     * the date when request should be executed
     */
    executeAt?: string;
    /**
     * the time in milliseconds after what the request should be executed
     */
    executeIn?: number;
    /**
     * the maximum date when request should be executed (for AT_EASE and PRIORITIZED priorities)
     */
    executeUntil?: string;
}
export type C4AI_SDK_TYPES__EES_RawRequestExecutionResult = {
    /**
     * Id of the request
     */
    id: string;
    /**
     * The status of the request
     */
    status: string;
    /**
     * The mode of the request
     */
    mode: 'play' | 'real';
    /**
     * The start time of the request
     */
    start: string;
    /**
     * The end time of the request
     *
     * If the request is not completed, this field will be empty
     */
    end?: string;
    /**
     * The duration of the request
     *
     * The duration is calculated as the difference between the end and start time
     */
    duration: number;
    /**
     * The name of command that was executed
     */
    command: string;
    /**
     * The SIC the service that was executed
     */
    service: string;
    /**
     * The user SIC that executed the request
     */
    user?: string;
    /**
     * The API SIC that was used to execute the command
     */
    api?: string;
    /**
     * The organization SIC that was used to execute the command
     */
    organization: string;
    /**
     * The metadata of the request
     *
     * The metadata is a JSON object that contains additional information about the request
     */
    meta?: any;
    /**
     * The result of the request
     */
    result?: C4AI_SDK_TYPES__AAC_ExecuteCommandAPIResult;
    /**
     * The error of the request
     *
     * If the request was successful, this field will be empty
     */
    error?: C4AI_SDK_TYPES__APIProviderError;
    /**
     * The time when the request was created
     *
     * It's not the same as the start time of the request.
     * createdAt is the time when the request was created in the system.
     */
    createdAt: string;
};
