"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_AAC_Execute_Command = void 0;
const AAC_command_1 = require("./AAC.command");
const C4AIServiceCommand_class_1 = require("../../../global/C4AIServiceCommand.class");
class C4AI_AAC_Execute_Command extends AAC_command_1.C4AI_AACCommand {
    constructor(params) {
        super(params);
        this.name = 'EXECUTE';
        this.validate(params);
        this.parameters = params.parameters;
        this.credentials = params.credentials || [];
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
        const credentials = {};
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
        // Deal with credentials
        this.credentials.forEach(cred => {
            if (cred.isLocal) {
                const { done, value } = cred.records.next();
                if (!done && value) {
                    credentials[value.name] = value.value;
                }
            }
            else {
                this.logger.warning(`Credentials ${cred.sic} is not local. Skipping it.`);
            }
        });
        return {
            sic: this.service.sic,
            operation: this.name,
            parameters,
            credentials,
            _bindings
        };
    }
}
exports.C4AI_AAC_Execute_Command = C4AI_AAC_Execute_Command;
//# sourceMappingURL=AAC-Execute.command.js.map