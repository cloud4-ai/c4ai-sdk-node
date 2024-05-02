"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_PLPrompt_Compile_Command = void 0;
const PLPrompt_command_1 = require("./PLPrompt.command");
class C4AI_PLPrompt_Compile_Command extends PLPrompt_command_1.C4AI_PLPromptCommand {
    constructor(params) {
        super(params);
        this.name = 'GET_VALUE';
        this.parameters = params.parameters;
    }
    toJSON() {
        return {
            sic: this.service.sic,
            operation: this.name,
            parameters: this.parameters.toJSON()
        };
    }
}
exports.C4AI_PLPrompt_Compile_Command = C4AI_PLPrompt_Compile_Command;
//# sourceMappingURL=PLPrompt-Compile.command.js.map