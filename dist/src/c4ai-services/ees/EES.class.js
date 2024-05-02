"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EES = void 0;
const C4AIService_class_1 = require("../../global/C4AIService.class");
const common_types_1 = require("../../types/common.types");
const EES_Execute_command_1 = require("./commands/EES-Execute.command");
const EESExecutionOptions_class_1 = require("./entities/EESExecutionOptions.class");
const EESExecutionSchedule_class_1 = require("./entities/EESExecutionSchedule.class");
class C4AI_EES extends C4AIService_class_1.C4AI_SDK_Service {
    static get Commands() {
        return this._commands;
    }
    constructor(sicOrNew) {
        super(sicOrNew);
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.ees;
        this._options = new EESExecutionOptions_class_1.C4AI_EES_ExecutionOptions();
        this._schedule = new EESExecutionSchedule_class_1.C4AI_EES_ExecutionSchedule();
        this.identityInitializer(sicOrNew);
        this.init();
    }
    get options() {
        return this._options;
    }
    get schedule() {
        return this._schedule;
    }
}
exports.C4AI_EES = C4AI_EES;
C4AI_EES._commands = {
    EXECUTE: EES_Execute_command_1.C4AI_EES_Execute_Command
};
//# sourceMappingURL=EES.class.js.map