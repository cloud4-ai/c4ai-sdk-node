import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";
import { C4AI_SDK_TYPES__PLPrompt_JSON } from "./types/PLPrompt.types";
import { C4AI_SDK_Service } from "@c4ai-sdk/global/C4AIService.class";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
import { C4AI_PLPrompt_Compile_Command } from "./commands/PLPrompt-Compile.command";
import { C4AI_SDK_APIProvider } from "@c4ai-sdk/global/C4AISDKAPIProvider.class";
import { C4AI_PLPrompt_API } from "./api/PLPrompt.api";
import { C4AI_SDK_Logger } from "@c4ai-sdk/global/C4AISDKLogger.class";
import { C4AI_RequestParameter } from "@c4ai-sdk/global/request/C4AIRequestParameter.class";




export class C4AI_PLPrompt extends C4AI_SDK_Service<
    C4AI_SDK_TYPES__PLPrompt_JSON
> {

    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES = C4AI_SDK_TYPES__SIC_SERVICES_NAMES.plPrompt;

    parameters!: C4AI_RequestParameters

    markup: string = ''

    API!: C4AI_PLPrompt_API;

    protected static _commands = {
        COMPILE: C4AI_PLPrompt_Compile_Command
    }

    static get Commands() {
        return this._commands;
    }

    constructor(sicOrNew: string | any) {
        super(sicOrNew);

        this.identityInitializer(sicOrNew);
        this.init();
    }


    init() {
        this.API = new C4AI_PLPrompt_API(this.service);
        this.logger = new C4AI_SDK_Logger(this.sic, this.context.verbose, this.context.ignoreErrors);
    }


    protected fromAPI(response: C4AI_SDK_TYPES__PLPrompt_JSON): this {
        this.sic = response.sic;
        // The LTS basically will be the version that was requested by SIC
        this.markup = response.lts.text;
        const params = response.lts.parameters.map(p => new C4AI_RequestParameter(p.name, p.value, p));

        this.parameters = new C4AI_RequestParameters(
            ...params
        );

        return this;
    }
}