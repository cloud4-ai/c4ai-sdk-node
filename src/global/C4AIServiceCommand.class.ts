import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";
import { C4AI_SDK_Error } from "./C4AISDKError.class";
import { C4AI_SDK_Service } from "./C4AIService.class";
import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "@c4ai-sdk/types/C4AIServiceCommand.types";
import { C4AI_SDK_Logger } from "./C4AISDKLogger.class";
import { C4AI_SDK_Context, C4AI_SDK_ContextInstance } from "./C4AISDKContext.class";

export class C4AI_SDK_ServiceCommand<_ServiceType extends C4AI_SDK_Service = C4AI_SDK_Service> {

    protected name: string = 'EXECUTE'

    protected service!: _ServiceType
    protected logger!: C4AI_SDK_Logger
    protected context: C4AI_SDK_Context = C4AI_SDK_ContextInstance


    constructor(
        protected params: C4AI_SDK_TYPES__ServiceCommandConstructorParams<_ServiceType>
    ) {
        this.service = params.service;
        this.logger = new C4AI_SDK_Logger(this.service.sic, this.context.verbose, this.context.ignoreErrors);
    }


    toJSON(): C4AI_SDK_TYPES__ServiceCommand_APIEntity {
        return {
            sic: this.service.sic,
            operation: this.name
        }
    }
}