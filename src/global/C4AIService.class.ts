import { C4AI_SDK_Error } from "./C4AISDKError.class";
import { C4AI_SDK_ERRORS } from '@c4ai-sdk/constants/errors.constants'
import { C4AI_SDK_Context, C4AI_SDK_ContextInstance } from "./C4AISDKContext.class";
import { C4AI_SDK_APIProvider } from "./C4AISDKAPIProvider.class";
import { C4AI_SDK_Logger } from "./C4AISDKLogger.class";
import { C4AI_SDK_TYPES__IAPIServiceEntity } from "@c4ai-sdk/types/C4AIService.types";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";
import { C4AI_SDK_SICParserHelper } from "@c4ai-sdk/helpers/C4AISicParser.helper";

export class C4AI_SDK_Service<
    _serializedType extends C4AI_SDK_TYPES__IAPIServiceEntity = any,
> {


    sic!: string
    service!: C4AI_SDK_TYPES__SIC_SERVICES_NAMES
    API!: C4AI_SDK_APIProvider<_serializedType>

    protected context: C4AI_SDK_Context = C4AI_SDK_ContextInstance;
    protected logger!: C4AI_SDK_Logger


    protected static _commands = {
    }

    static get Commands() {
        return this._commands;
    }

    constructor(sicOrNew?: string | _serializedType) {
        this.identityInitializer(sicOrNew);
        this.init();
    }


    protected identityInitializer(sicOrNew) {
        if (typeof sicOrNew === 'string')
            this.fromSic(sicOrNew);
        else
            this.fromJSON(sicOrNew);
    }




    // ================================Class Base Methods =======================

    protected init() {
        this.API = new C4AI_SDK_APIProvider(this.service);
        this.logger = new C4AI_SDK_Logger(this.sic, this.context.verbose, this.context.ignoreErrors);

    }

    async load(): Promise<this> {
        const response = await this.API.load(this.sic);
        return this.fromAPI(response);
    }





    // ================================Class Initializers =======================
    protected fromSic(sic: string): this {
        if (!C4AI_SDK_SICParserHelper.isSic(sic))
            throw new C4AI_SDK_Error(C4AI_SDK_ERRORS.INVALID_SIC);

        this.sic = sic;

        return this;
    }

    protected fromAPI(response: _serializedType): this {
        this.sic = response.sic;

        return this;
    }

    protected fromJSON(serialized: _serializedType) {

    }




    // ================================Class Types Converters =======================

    toAPI() {

    }


    toJSON(): _serializedType {
        return {
            sic: this.sic
        } as _serializedType
    }
}