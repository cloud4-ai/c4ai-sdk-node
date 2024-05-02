"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_AAC = void 0;
const AAC_Execute_command_1 = require("./commands/AAC-Execute.command");
const common_types_1 = require("../../types/common.types");
const C4AIService_class_1 = require("../../global/C4AIService.class");
class C4AI_AAC extends C4AIService_class_1.C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        super(sicOrNew);
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.aacInstance;
        this.identityInitializer(sicOrNew);
        this.init();
    }
}
exports.C4AI_AAC = C4AI_AAC;
C4AI_AAC._commands = {
    EXECUTE: AAC_Execute_command_1.C4AI_AAC_Execute_Command
};
//# sourceMappingURL=AAC.class.js.map