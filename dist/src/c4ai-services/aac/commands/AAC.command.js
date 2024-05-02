"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_AACCommand = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const AACCommand_api_1 = require("../api/AACCommand.api");
class C4AI_AACCommand extends C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand {
    constructor() {
        super(...arguments);
        this.API = new AACCommand_api_1.C4AI_AACCommands_API(this.service.service);
    }
}
exports.C4AI_AACCommand = C4AI_AACCommand;
//# sourceMappingURL=AAC.command.js.map