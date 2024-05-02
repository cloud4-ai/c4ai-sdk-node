import { C4AI_SDK_RequestParam } from "../../types/common.types";
import { C4AI_SDK_ServiceCommand } from "../C4AIServiceCommand.class";
export declare class C4AI_RequestParameter {
    id?: string;
    type: string;
    name: string;
    value?: C4AI_SDK_ServiceCommand | any;
    defaultValue: string;
    constructor(
    /**
     * The name of the parameter
     */
    name: string, 
    /**
     * the target value. If type in config doesn't set, will be used typeof
     */
    value: C4AI_SDK_ServiceCommand | any, 
    /**
     * Extra data that may help to map parameters more dedicated
     */
    conf?: Partial<C4AI_SDK_RequestParam>);
}
