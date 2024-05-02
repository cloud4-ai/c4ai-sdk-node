"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_APISchema_Execute_Command = void 0;
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
const APISchema_command_1 = require("./APISchema.command");
class C4AI_APISchema_Execute_Command extends APISchema_command_1.C4AI_APISchemaCommand {
    constructor(params) {
        super(params);
        this.name = 'EXECUTE';
        this.validate(params);
        this.parameters = params.parameters;
    }
    validate(params) {
        if (!this.context.sdkValidation)
            return;
    }
    toJSON() {
        const compiled = this.compile();
        return compiled;
    }
    compile() {
        const _bindings = {};
        const parameters = {};
        // Deal with parameters and bindings
        [
            ...this.parameters,
        ]
            .forEach(param => {
            if (this.context.sdkValidation && !param.value)
                this.logger.warning(`Missing value for parameter: ${param.name}`);
            if (this.context.sdkValidation && parameters[param.name])
                this.logger.warning(`Parameter ${param.name} already exists in parameters. Overwriting it.`);
            if (this.context.sdkValidation && _bindings[param.name])
                this.logger.warning(`Parameter ${param.name} already exists in bindings. Overwriting it.`);
            switch (true) {
                case param.value && param.value instanceof C4AIServiceCommand_class_1.C4AI_SDK_ServiceCommand:
                    _bindings[param.name] = param.value.toJSON();
                    break;
                default:
                    parameters[param.name] = param.value;
                    break;
            }
        });
        return {
            sic: this.service.sic,
            operation: this.name,
            parameters,
            _bindings
        };
    }
}
exports.C4AI_APISchema_Execute_Command = C4AI_APISchema_Execute_Command;
//# sourceMappingURL=APISchema-Execute.command.js.map