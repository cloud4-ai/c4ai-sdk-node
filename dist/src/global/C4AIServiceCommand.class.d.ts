import { C4AI_SDK_Service } from "./C4AIService.class";
import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "../types/C4AIServiceCommand.types";
import { C4AI_SDK_Logger } from "./C4AISDKLogger.class";
import { C4AI_SDK_Context } from "./C4AISDKContext.class";
export declare class C4AI_SDK_ServiceCommand<_ServiceType extends C4AI_SDK_Service = C4AI_SDK_Service> {
    protected params: C4AI_SDK_TYPES__ServiceCommandConstructorParams<_ServiceType>;
    protected name: string;
    protected service: _ServiceType;
    protected logger: C4AI_SDK_Logger;
    protected context: C4AI_SDK_Context;
    constructor(params: C4AI_SDK_TYPES__ServiceCommandConstructorParams<_ServiceType>);
    toJSON(): C4AI_SDK_TYPES__ServiceCommand_APIEntity;
}
