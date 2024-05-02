import { C4AI_SDK_TYPES__AAC_JSON } from "./types/AAC.types";
import { C4AI_AAC_Execute_Command } from "./commands/AAC-Execute.command";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";
import { C4AI_SDK_Service } from "@c4ai-sdk/global/C4AIService.class";

export class C4AI_AAC extends C4AI_SDK_Service<
    C4AI_SDK_TYPES__AAC_JSON
> {

    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES = C4AI_SDK_TYPES__SIC_SERVICES_NAMES.aacInstance;


    protected static _commands = {
        EXECUTE: C4AI_AAC_Execute_Command
    }

    static get Commands() {
        return this._commands;
    }


    constructor(sicOrNew: string | C4AI_SDK_TYPES__AAC_JSON) {
        super(sicOrNew);

        this.identityInitializer(sicOrNew);
        this.init();
    }


}
