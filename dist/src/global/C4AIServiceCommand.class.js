"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_ServiceCommand = void 0;
const C4AISDKLogger_class_1 = require("./C4AISDKLogger.class");
const C4AISDKContext_class_1 = require("./C4AISDKContext.class");
class C4AI_SDK_ServiceCommand {
    constructor(params) {
        this.params = params;
        this.name = 'EXECUTE';
        this.context = C4AISDKContext_class_1.C4AI_SDK_ContextInstance;
        this.service = params.service;
        this.logger = new C4AISDKLogger_class_1.C4AI_SDK_Logger(this.service.sic, this.context.verbose, this.context.ignoreErrors);
    }
    toJSON() {
        return {
            sic: this.service.sic,
            operation: this.name
        };
    }
}
exports.C4AI_SDK_ServiceCommand = C4AI_SDK_ServiceCommand;
//# sourceMappingURL=C4AIServiceCommand.class.js.map