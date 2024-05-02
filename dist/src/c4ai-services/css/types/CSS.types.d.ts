import { C4AI_SDK_TYPES__IAPIServiceEntity } from "../../../types/C4AIService.types";
import { C4AI_SDK_Dictionary } from "../../../types/common.types";
export type C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams = {
    rotationStrategy: 'round_robin' | 'random';
};
export type C4AI_SDK_TYPES__CSS_JSON = {
    sic: string;
    id: number;
    name: string;
    description?: string;
    lts: {
        sic: string;
        id: number;
        version: string;
        text: string;
        parameters: Array<C4AI_SDK_TYPES__CSS_JSONParameter>;
    };
} & C4AI_SDK_TYPES__IAPIServiceEntity;
export type C4AI_SDK_TYPES__CSS_JSONParameter = {
    id: string;
    name: string;
    key: string;
    value: any;
    type: 'json' | 'array' | 'number' | 'string' | 'boolean' | 'base_64' | 'file' | 'file_url' | string;
    issuer: 'system' | 'custom' | 'proxy' | 'credentials' | string;
    referenceId: string;
};
export type C4AI_SDK_TYPES__CSS_ExecutionResponse = {
    result: any;
    payload?: C4AI_SDK_Dictionary<any>;
};
