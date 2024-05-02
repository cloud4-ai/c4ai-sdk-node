import { C4AI_SDK_TYPES__EES_JSON } from "./types/EES.types";
import { C4AI_EES_API } from "./api/EES.api";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_EES_Execute_Command } from "./commands/EES-Execute.command";
import { C4AI_EES_ExecutionOptions } from "./entities/EESExecutionOptions.class";
import { C4AI_EES_ExecutionSchedule } from "./entities/EESExecutionSchedule.class";
export declare class C4AI_EES extends C4AI_SDK_Service<C4AI_SDK_TYPES__EES_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    API: C4AI_EES_API;
    protected _options: C4AI_EES_ExecutionOptions;
    protected _schedule: C4AI_EES_ExecutionSchedule;
    protected static _commands: {
        EXECUTE: typeof C4AI_EES_Execute_Command;
    };
    static get Commands(): {
        EXECUTE: typeof C4AI_EES_Execute_Command;
    };
    constructor(sicOrNew: string | C4AI_SDK_TYPES__EES_JSON);
    get options(): C4AI_EES_ExecutionOptions;
    get schedule(): C4AI_EES_ExecutionSchedule;
}
