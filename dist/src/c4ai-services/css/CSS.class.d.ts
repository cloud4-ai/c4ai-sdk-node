import { C4AI_SDK_TYPES__CSS_JSON, C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams } from "./types/CSS.types";
import { C4AI_CSSRecords } from "./entities/CSSRecords.class";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
export declare class C4AI_CSS extends C4AI_SDK_Service<C4AI_SDK_TYPES__CSS_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    /**
     * Only for local entities
     * Those records always stores on the server side, However, in case when CSS is local, we store it here
     */
    records: C4AI_CSSRecords;
    constructor(sicOrNew?: string | C4AI_SDK_TYPES__CSS_JSON | C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams);
    get isLocal(): boolean;
    protected identityInitializer(sicOrNew?: string | C4AI_SDK_TYPES__CSS_JSON | C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams): void;
    private fromLocal;
}
