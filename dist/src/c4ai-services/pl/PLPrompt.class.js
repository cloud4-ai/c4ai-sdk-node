"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_PLPrompt = void 0;
const common_types_1 = require("../../types/common.types");
const C4AIService_class_1 = require("../../global/C4AIService.class");
const C4AIRequestParameters_class_1 = require("../../global/request/C4AIRequestParameters.class");
const PLPrompt_Compile_command_1 = require("./commands/PLPrompt-Compile.command");
const PLPrompt_api_1 = require("./api/PLPrompt.api");
const C4AISDKLogger_class_1 = require("../../global/C4AISDKLogger.class");
const C4AIRequestParameter_class_1 = require("../../global/request/C4AIRequestParameter.class");
class C4AI_PLPrompt extends C4AIService_class_1.C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        super(sicOrNew);
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.plPrompt;
        this.markup = '';
        this.identityInitializer(sicOrNew);
        this.init();
    }
    init() {
        this.API = new PLPrompt_api_1.C4AI_PLPrompt_API(this.service);
        this.logger = new C4AISDKLogger_class_1.C4AI_SDK_Logger(this.sic, this.context.verbose, this.context.ignoreErrors);
    }
    fromAPI(response) {
        this.sic = response.sic;
        // The LTS basically will be the version that was requested by SIC
        this.markup = response.lts.text;
        const params = response.lts.parameters.map(p => new C4AIRequestParameter_class_1.C4AI_RequestParameter(p.name, p.value, p));
        this.parameters = new C4AIRequestParameters_class_1.C4AI_RequestParameters(...params);
        return this;
    }
}
exports.C4AI_PLPrompt = C4AI_PLPrompt;
C4AI_PLPrompt._commands = {
    COMPILE: PLPrompt_Compile_command_1.C4AI_PLPrompt_Compile_Command
};
//# sourceMappingURL=PLPrompt.class.js.map