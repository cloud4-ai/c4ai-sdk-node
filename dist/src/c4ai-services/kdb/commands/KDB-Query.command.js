"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_KDB_Query_Command = void 0;
const KDB_command_1 = require("./KDB.command");
class C4AI_KDB_Query_Command extends KDB_command_1.C4AI_KDBCommand {
    constructor(params) {
        super(params);
        this.name = 'QUERY';
    }
}
exports.C4AI_KDB_Query_Command = C4AI_KDB_Query_Command;
//# sourceMappingURL=KDB-Query.command.js.map