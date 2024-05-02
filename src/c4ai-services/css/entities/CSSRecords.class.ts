import { C4AI_SDK_Error } from "src/global/C4AISDKError.class";
import { C4AI_CSSRecord } from "./CSSRecord.class";
import { C4AI_SDK_RequestParam } from "src/types/common.types";
import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";
import { C4AI_SDK_TYPES__CSSRecordsConfig } from "../types/CSSRecord.types";
import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";


export class C4AI_CSSRecords extends C4AI_RequestParameters<C4AI_CSSRecord> {

    protected data!: C4AI_CSSRecord[];

    private config: C4AI_SDK_TYPES__CSSRecordsConfig = {
        rotationStrategy: 'round_robin'
    };

    constructor(
        config: Partial<C4AI_SDK_TYPES__CSSRecordsConfig> = {},

        /**
         * The list of CSS Records
         */
        ...data: Array<C4AI_CSSRecord>
    ) {
        super(...data);
        this.config = { ...this.config, ...config };
    }



    // Implement the `next()` method of the iterator protocol
    next(): IteratorResult<C4AI_CSSRecord, C4AI_CSSRecord | undefined> {
        if (this.index < this.data.length) {
            const rotationStrategy = this.config.rotationStrategy;
            let nextIndex = this.index;

            if (rotationStrategy === 'round_robin') {
                nextIndex = (this.index + 1) % this.data.length;
            } else if (rotationStrategy === 'random') {
                nextIndex = Math.floor(Math.random() * this.data.length);
            } else if (rotationStrategy === 'sequential') {
                nextIndex = this.index + 1;
            }

            this.index = nextIndex;
            return { value: this.data[nextIndex], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}