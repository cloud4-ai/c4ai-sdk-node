import { C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams, C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity } from "../types/AACCommands.types";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
import { C4AI_AACCommand } from "./AAC.command";
import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_CSS } from "@c4ai-sdk/services/css/CSS.class";



export class C4AI_AAC_Execute_Command extends C4AI_AACCommand {

    protected name = 'EXECUTE'

    protected parameters!: C4AI_RequestParameters
    protected credentials!: Array<C4AI_CSS>


    constructor(
        params: C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams,
    ) {
        super(params);

        this.validate(params);

        this.parameters = params.parameters;
        this.credentials = params.credentials || [];
    }


    private validate(params: C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams): void {
        if (!this.context.sdkValidation)
            return;
    }




    toJSON(): C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity {
        const compiled = this.compile();

        return compiled
    }



    private compile(): C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity {

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
                    case param.value && param.value instanceof C4AI_SDK_ServiceCommand:
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
            } else {
                this.logger.warning(`Credentials ${cred.sic} is not local. Skipping it.`);
            }
        });

        return {
            sic: this.service.sic,
            operation: this.name,
            parameters,
            credentials,
            _bindings
        }
    }
}