"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_APISchemaCommand = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const APISchemaCommand_api_1 = require("../api/APISchemaCommand.api");
class C4AI_APISchemaCommand extends C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand {
    constructor() {
        super(...arguments);
        this.API = new APISchemaCommand_api_1.C4AI_APISchemaCommands_API(this.service.service);
    }
}
exports.C4AI_APISchemaCommand = C4AI_APISchemaCommand;
//# sourceMappingURL=APISchema.command.js.map