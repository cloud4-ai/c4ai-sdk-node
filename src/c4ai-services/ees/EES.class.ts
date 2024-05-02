import {
    C4AI_SDK_TYPES__EES_JSON,
} from "./types/EES.types";
import { C4AI_EES_API } from "./api/EES.api";
import { C4AI_SDK_Service } from "@c4ai-sdk/global/C4AIService.class";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";
import { C4AI_EES_Execute_Command } from "./commands/EES-Execute.command";
import { C4AI_EES_ExecutionOptions } from "./entities/EESExecutionOptions.class";
import { C4AI_EES_ExecutionSchedule } from "./entities/EESExecutionSchedule.class";



export class C4AI_EES extends C4AI_SDK_Service<
    C4AI_SDK_TYPES__EES_JSON
> {

    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES = C4AI_SDK_TYPES__SIC_SERVICES_NAMES.ees;

    API!: C4AI_EES_API;

    protected _options: C4AI_EES_ExecutionOptions = new C4AI_EES_ExecutionOptions();
    protected _schedule: C4AI_EES_ExecutionSchedule = new C4AI_EES_ExecutionSchedule();


    protected static _commands = {
        EXECUTE: C4AI_EES_Execute_Command
    }

    static get Commands() {
        return this._commands;
    }

    constructor(sicOrNew: string | C4AI_SDK_TYPES__EES_JSON) {
        super(sicOrNew);

        this.identityInitializer(sicOrNew);
        this.init();
    }


    get options(): C4AI_EES_ExecutionOptions {
        return this._options;
    }

    get schedule(): C4AI_EES_ExecutionSchedule {
        return this._schedule;
    }
}