import { C4AI_SDK_Context } from "./C4AISDKContext.class";
import { C4AI_SDK_APIProvider } from "./C4AISDKAPIProvider.class";
import { C4AI_SDK_Logger } from "./C4AISDKLogger.class";
import { C4AI_SDK_TYPES__IAPIServiceEntity } from "../types/C4AIService.types";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../types/common.types";
export declare class C4AI_SDK_Service<_serializedType extends C4AI_SDK_TYPES__IAPIServiceEntity = any> {
    sic: string;
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    API: C4AI_SDK_APIProvider<_serializedType>;
    protected context: C4AI_SDK_Context;
    protected logger: C4AI_SDK_Logger;
    protected static _commands: {};
    static get Commands(): {};
    constructor(sicOrNew?: string | _serializedType);
    protected identityInitializer(sicOrNew: any): void;
    protected init(): void;
    load(): Promise<this>;
    protected fromSic(sic: string): this;
    protected fromAPI(response: _serializedType): this;
    protected fromJSON(serialized: _serializedType): void;
    toAPI(): void;
    toJSON(): _serializedType;
}
