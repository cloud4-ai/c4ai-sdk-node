import { C4AI_CSSRecord } from "./CSSRecord.class";
import { C4AI_SDK_TYPES__CSSRecordsConfig } from "../types/CSSRecord.types";
import { C4AI_RequestParameters } from "../../../global/request/C4AIRequestParameters.class";
export declare class C4AI_CSSRecords extends C4AI_RequestParameters<C4AI_CSSRecord> {
    protected data: C4AI_CSSRecord[];
    private config;
    constructor(config?: Partial<C4AI_SDK_TYPES__CSSRecordsConfig>, 
    /**
     * The list of CSS Records
     */
    ...data: Array<C4AI_CSSRecord>);
    next(): IteratorResult<C4AI_CSSRecord, C4AI_CSSRecord | undefined>;
}
