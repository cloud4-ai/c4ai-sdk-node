import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams, C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity } from "../types/APISchemaCommand.types";
import { C4AI_APISchemaCommand } from "./APISchema.command";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";


export class C4AI_APISchema_Execute_Command extends C4AI_APISchemaCommand {

    protected name = 'EXECUTE'

    protected parameters!: C4AI_RequestParameters


    constructor(
        params: C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams,
    ) {
        super(params);

        this.validate(params);

        this.parameters = params.parameters;
    }


    private validate(params: C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams): void {
        if (!this.context.sdkValidation)
            return;
    }




    toJSON(): C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity {
        const compiled = this.compile();

        return compiled
    }



    private compile(): C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity {

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
                    case param.value && param.value instanceof C4AI_SDK_ServiceCommand:
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
        }
    }
}