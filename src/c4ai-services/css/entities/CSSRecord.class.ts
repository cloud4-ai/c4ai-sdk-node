import { C4AI_RequestParameter } from "@c4ai-sdk/global/request/C4AIRequestParameter.class";
import { C4AI_SDK_RequestParam } from "../../../types/common.types";

export class C4AI_CSSRecord extends C4AI_RequestParameter {
    constructor(
        /**
         * The name of the parameter
         */
        name: string,
        /**
         * the target value. If type in config doesn't set, will be used typeof
         */
        value: any,
        /**
         * Extra data that may help to map parameters more dedicated 
         */
        conf?: Partial<C4AI_SDK_RequestParam>
    ) {
        super(name, value, conf);
    }
}