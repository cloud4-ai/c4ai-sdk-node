import { C4AI_SDK_TYPES__IAPIServiceEntity } from "../../../types/C4AIService.types";
export type C4AI_SDK_TYPES__APISchema_JSON = {
    sic: string;
    id: number;
    name: string;
    description?: string;
    lts: {
        sic: string;
        id: number;
        version: string;
        text: string;
    };
} & C4AI_SDK_TYPES__IAPIServiceEntity;
