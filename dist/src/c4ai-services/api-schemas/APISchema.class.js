"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_APISchema = void 0;
const APISchema_Execute_command_1 = require("./commands/APISchema-Execute.command");
const common_types_1 = require("../../types/common.types");
const C4AIService_class_1 = require("../../global/C4AIService.class");
class C4AI_APISchema extends C4AIService_class_1.C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        super(sicOrNew);
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.apiSchemaInstance;
        this.identityInitializer(sicOrNew);
        this.init();
    }
}
exports.C4AI_APISchema = C4AI_APISchema;
C4AI_APISchema._commands = {
    EXECUTE: APISchema_Execute_command_1.C4AI_APISchema_Execute_Command
};
//# sourceMappingURL=APISchema.class.js.map