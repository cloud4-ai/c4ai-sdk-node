import { C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams, C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity } from "../types/APISchemaCommand.types";
import { C4AI_APISchemaCommand } from "./APISchema.command";
import { C4AI_RequestParameters } from "../../../global/request/C4AIRequestParameters.class";
export declare class C4AI_APISchema_Execute_Command extends C4AI_APISchemaCommand {
    protected name: string;
    protected parameters: C4AI_RequestParameters;
    constructor(params: C4AI_SDK_TYPES__APISchema_ServiceCommandConstructorParams);
    private validate;
    toJSON(): C4AI_SDK_TYPES__APISchema_ServiceCommand_EXECUTE_APIEntity;
    private compile;
}
