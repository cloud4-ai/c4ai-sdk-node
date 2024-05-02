"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_PLPromptCommand = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const PLPromptCommand_api_1 = require("../api/PLPromptCommand.api");
class C4AI_PLPromptCommand extends C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand {
    constructor() {
        super(...arguments);
        this.API = new PLPromptCommand_api_1.C4AI_PLPromptCommands_API(this.service.service);
    }
}
exports.C4AI_PLPromptCommand = C4AI_PLPromptCommand;
//# sourceMappingURL=PLPrompt.command.js.map