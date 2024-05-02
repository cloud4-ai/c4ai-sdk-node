import { C4AI_SDK_TYPES__IAPIServiceEntity } from "../../../types/C4AIService.types";
import { C4AI_SDK_Dictionary, C4AI_SDK_RequestParam } from "../../../types/common.types";
export type C4AI_SDK_TYPES__PLPrompt_JSON = {
    sic: string;
    id: number;
    name: string;
    description?: string;
    lts: {
        sic: string;
        id: number;
        version: string;
        text: string;
        parameters: Array<C4AI_SDK_RequestParam>;
    };
} & C4AI_SDK_TYPES__IAPIServiceEntity;
export type C4AI_SDK_TYPES__PLPrompt_ExecutionResponse = {
    result: any;
    payload?: C4AI_SDK_Dictionary<any>;
};
