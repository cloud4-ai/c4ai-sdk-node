import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "../../../types/C4AIServiceCommand.types";
import { C4AI_EES } from "../EES.class";
import { C4AI_SDK_TYPES__EES_ExecutionCommands } from "./EES.types";
import { C4AI_SDK_TYPES__EES_RawRequestExecutionCommands, C4AI_SDK_TYPES__EES_RawRequestExecutionOptions, C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule } from "./EESCommandsAPI.types";
import { C4AI_EES_ExecutionOptions } from "../entities/EESExecutionOptions.class";
import { C4AI_EES_ExecutionSchedule } from "../entities/EESExecutionSchedule.class";
export type C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams = {
    /**
     * The list of commands associated with the service can be found in the service documentation.
     * OR
     * Directly via C4AI SDK: C4AI_EES.Commands | C4AI_AAC.Commands | C4AI_CSS.Commands ... etc.
     *
     * !! Note: Not all commands are available for execution. Please make Sure that the command type is applicable.
     */
    command: C4AI_SDK_TYPES__EES_ExecutionCommands;
    /**
     * The property that defines the priority of the request and the way it should be executed.
     * It provides the options for time scheduling and execution limits in time.
     */
    schedule?: C4AI_EES_ExecutionSchedule;
    /**
     * The property that defines the priority of the request and the way it should be executed.
     */
    options?: C4AI_EES_ExecutionOptions;
} & C4AI_SDK_TYPES__ServiceCommandConstructorParams<C4AI_EES>;
export type C4AI_SDK_TYPES__EES_ServiceCommand_EXECUTE_APIEntity = {
    /**
     * Target service that should be used as an executor.
     *
     * In this case it's EES service.
     */
    sic: string;
    /**
     * The command that should be executed.
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
} & C4AI_SDK_TYPES__ServiceCommand_APIEntity;
