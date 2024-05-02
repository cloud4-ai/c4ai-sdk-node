import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams, C4AI_SDK_TYPES__EES_ServiceCommand_EXECUTE_APIEntity } from "../types/EESCommand.types";
import { C4AI_EESCommand } from "./EES.command";
import { C4AI_SDK_TYPES__EES_ExecutionCommands } from "../types/EES.types";
import { C4AI_SDK_Error } from "@c4ai-sdk/global/C4AISDKError.class";
import { C4AI_SDK_ERRORS__EES } from "../errors";
import { C4AI_CommandRequest } from "@c4ai-sdk/entities/command-requests/CommandRequest.class";
import { C4AI_EES_ExecutionOptions } from "../entities/EESExecutionOptions.class";
import { C4AI_EES_ExecutionSchedule } from "../entities/EESExecutionSchedule.class";



export class C4AI_EES_Execute_Command extends C4AI_EESCommand {

    protected name = 'EXECUTE'

    protected command!: C4AI_SDK_TYPES__EES_ExecutionCommands
    protected options: C4AI_EES_ExecutionOptions = new C4AI_EES_ExecutionOptions();
    protected schedule: C4AI_EES_ExecutionSchedule = new C4AI_EES_ExecutionSchedule();

    constructor(
        params: C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams,
    ) {
        super(params);

        this.validate(params);

        this.command = params.command;
        this.schedule = params.schedule || this.schedule;
        this.options = params.options || this.options;
    }


    private validate(params: C4AI_SDK_TYPES__EES_ServiceCommandConstructorParams,): void {
        if (!this.context.sdkValidation)
            return;

        if (!params.command) {
            if (this.context.ignoreErrors) {
                this.logger.warning('Target command is missing');
            } else {
                throw new C4AI_SDK_Error(C4AI_SDK_ERRORS__EES.TARGET_COMMAND_MISSING)
            }
        }

        if (!(params.command instanceof C4AI_SDK_ServiceCommand)) {
            if (this.context.ignoreErrors) {
                this.logger.warning('Target command is not an instance of C4AI_SDK_ServiceCommand');
            } else {
                throw new C4AI_SDK_Error(C4AI_SDK_ERRORS__EES.TARGET_COMMAND_TYPE_IS_INVALID)
            }
        }
    }


    async execute(): Promise<C4AI_CommandRequest> {
        const response = await this.API.execute(
            this.service.sic, {
            command: this.command.toJSON(),
            schedule: {
                ...this.service.schedule.toJSON(),
                ... this.schedule.toJSON()
            },
            options: {
                ...this.service.options.toJSON(),
                ... this.options.toJSON()
            }
        });

        return new C4AI_CommandRequest(response);
    }

    toJSON(): C4AI_SDK_TYPES__EES_ServiceCommand_EXECUTE_APIEntity {
        return {
            sic: this.service.sic,
            operation: this.name,
            command: this.command.toJSON(),
            schedule: {
                ...this.service.schedule.toJSON(),
                ... this.schedule.toJSON()
            },
            options: {
                ...this.service.options.toJSON(),
                ... this.options.toJSON()
            }
        }

    }
}