"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_KDBCommand = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const KDBCommand_api_1 = require("../api/KDBCommand.api");
class C4AI_KDBCommand extends C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand {
    constructor() {
        super(...arguments);
        this.API = new KDBCommand_api_1.C4AI_KDBCommands_API(this.service.service);
    }
}
exports.C4AI_KDBCommand = C4AI_KDBCommand;
//# sourceMappingURL=KDB.command.js.map