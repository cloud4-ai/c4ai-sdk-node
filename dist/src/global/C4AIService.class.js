"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_Service = void 0;
const C4AISDKError_class_1 = require("./C4AISDKError.class");
const errors_constants_1 = require("../constants/errors.constants");
const C4AISDKContext_class_1 = require("./C4AISDKContext.class");
const C4AISDKAPIProvider_class_1 = require("./C4AISDKAPIProvider.class");
const C4AISDKLogger_class_1 = require("./C4AISDKLogger.class");
const C4AISicParser_helper_1 = require("../helpers/C4AISicParser.helper");
class C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        this.context = C4AISDKContext_class_1.C4AI_SDK_ContextInstance;
        this.identityInitializer(sicOrNew);
        this.init();
    }
    identityInitializer(sicOrNew) {
        if (typeof sicOrNew === 'string')
            this.fromSic(sicOrNew);
        else
            this.fromJSON(sicOrNew);
    }
    // ================================Class Base Methods =======================
    init() {
        this.API = new C4AISDKAPIProvider_class_1.C4AI_SDK_APIProvider(this.service);
        this.logger = new C4AISDKLogger_class_1.C4AI_SDK_Logger(this.sic, this.context.verbose, this.context.ignoreErrors);
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.API.load(this.sic);
            return this.fromAPI(response);
        });
    }
    // ================================Class Initializers =======================
    fromSic(sic) {
        if (!C4AISicParser_helper_1.C4AI_SDK_SICParserHelper.isSic(sic))
            throw new C4AISDKError_class_1.C4AI_SDK_Error(errors_constants_1.C4AI_SDK_ERRORS.INVALID_SIC);
        this.sic = sic;
        return this;
    }
    fromAPI(response) {
        this.sic = response.sic;
        return this;
    }
    fromJSON(serialized) {
    }
    // ================================Class Types Converters =======================
    toAPI() {
    }
    toJSON() {
        return {
            sic: this.sic
        };
    }
}
exports.C4AI_SDK_Service = C4AI_SDK_Service;
C4AI_SDK_Service._commands = {};
//# sourceMappingURL=C4AIService.class.js.map