import { C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams, C4AI_SDK_TYPES__EES_ServiceCommand_EXECUTE_APIEntity } from "../types/EESCommand.types";
import { C4AI_EESCommand } from "./EES.command";
import { C4AI_SDK_TYPES__EES_ExecutionCommands } from "../types/EES.types";
import { C4AI_CommandRequest } from "../../../c4ai-entities/command-requests/CommandRequest.class";
import { C4AI_EES_ExecutionOptions } from "../entities/EESExecutionOptions.class";
import { C4AI_EES_ExecutionSchedule } from "../entities/EESExecutionSchedule.class";
export declare class C4AI_EES_Execute_Command extends C4AI_EESCommand {
    protected name: string;
    protected command: C4AI_SDK_TYPES__EES_ExecutionCommands;
    protected options: C4AI_EES_ExecutionOptions;
    protected schedule: C4AI_EES_ExecutionSchedule;
    constructor(params: C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams);
    private validate;
    execute(): Promise<C4AI_CommandRequest>;
    toJSON(): C4AI_SDK_TYPES__EES_ServiceCommand_EXECUTE_APIEntity;
}
