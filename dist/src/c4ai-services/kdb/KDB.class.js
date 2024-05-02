"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_KDB = void 0;
const C4AIService_class_1 = require("../../global/C4AIService.class");
const common_types_1 = require("../../types/common.types");
const KDB_Query_command_1 = require("./commands/KDB-Query.command");
class C4AI_KDB extends C4AIService_class_1.C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        super(sicOrNew);
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.ees;
        this.identityInitializer(sicOrNew);
        this.init();
    }
}
exports.C4AI_KDB = C4AI_KDB;
C4AI_KDB._commands = {
    QUERY: KDB_Query_command_1.C4AI_KDB_Query_Command
};
//# sourceMappingURL=KDB.class.js.map