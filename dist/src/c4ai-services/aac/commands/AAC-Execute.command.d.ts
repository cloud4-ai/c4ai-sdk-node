import { C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams, C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity } from "../types/AACCommands.types";
import { C4AI_RequestParameters } from "../../../global/request/C4AIRequestParameters.class";
import { C4AI_AACCommand } from "./AAC.command";
import { C4AI_CSS } from "../../css/CSS.class";
export declare class C4AI_AAC_Execute_Command extends C4AI_AACCommand {
    protected name: string;
    protected parameters: C4AI_RequestParameters;
    protected credentials: Array<C4AI_CSS>;
    constructor(params: C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams);
    private validate;
    toJSON(): C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity;
    private compile;
}
