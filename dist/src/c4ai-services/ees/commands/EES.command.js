"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EESCommand = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const EESCommands_api_1 = require("../api/EESCommands.api");
class C4AI_EESCommand extends C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand {
    constructor() {
        super(...arguments);
        this.API = new EESCommands_api_1.C4AI_EESCommands_API(this.service.service);
    }
}
exports.C4AI_EESCommand = C4AI_EESCommand;
//# sourceMappingURL=EES.command.js.map