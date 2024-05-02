"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EES_Execute_Command = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const EES_command_1 = require("./EES.command");
const C4AISDKError_class_1 = require("../../../global/C4AISDKError.class");
const errors_1 = require("../errors");
const CommandRequest_class_1 = require("../../../c4ai-entities/command-requests/CommandRequest.class");
const EESExecutionOptions_class_1 = require("../entities/EESExecutionOptions.class");
const EESExecutionSchedule_class_1 = require("../entities/EESExecutionSchedule.class");
class C4AI_EES_Execute_Command extends EES_command_1.C4AI_EESCommand {
    constructor(params) {
        super(params);
        this.name = 'EXECUTE';
        this.options = new EESExecutionOptions_class_1.C4AI_EES_ExecutionOptions();
        this.schedule = new EESExecutionSchedule_class_1.C4AI_EES_ExecutionSchedule();
        this.validate(params);
        this.command = params.command;
        this.schedule = params.schedule || this.schedule;
        this.options = params.options || this.options;
    }
    validate(params) {
        if (!this.context.sdkValidation)
            return;
        if (!params.command) {
            if (this.context.ignoreErrors) {
                this.logger.warning('Target command is missing');
            }
            else {
                throw new C4AISDKError_class_1.C4AI_SDK_Error(errors_1.C4AI_SDK_ERRORS__EES.TARGET_COMMAND_MISSING);
            }
        }
        if (!(params.command instanceof C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand)) {
            if (this.context.ignoreErrors) {
                this.logger.warning('Target command is not an instance of C4AI_SDK_ServiceCommand');
            }
            else {
                throw new C4AISDKError_class_1.C4AI_SDK_Error(errors_1.C4AI_SDK_ERRORS__EES.TARGET_COMMAND_TYPE_IS_INVALID);
            }
        }
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.API.execute(this.service.sic, {
                command: this.command.toJSON(),
                schedule: Object.assign(Object.assign({}, this.service.schedule.toJSON()), this.schedule.toJSON()),
                options: Object.assign(Object.assign({}, this.service.options.toJSON()), this.options.toJSON())
            });
            return new CommandRequest_class_1.C4AI_CommandRequest(response);
        });
    }
    toJSON() {
        return {
            sic: this.service.sic,
            operation: this.name,
            command: this.command.toJSON(),
            schedule: Object.assign(Object.assign({}, this.service.schedule.toJSON()), this.schedule.toJSON()),
            options: Object.assign(Object.assign({}, this.service.options.toJSON()), this.options.toJSON())
        };
    }
}
exports.C4AI_EES_Execute_Command = C4AI_EES_Execute_Command;
//# sourceMappingURL=EES-Execute.command.js.map