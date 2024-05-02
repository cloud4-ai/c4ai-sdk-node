import { C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule } from "../types/EESCommandsAPI.types";
import { C4AI_SDK_TYPES__EES_IExecutionSchedule } from "../types/EESExecutionSchedule.types";
export declare class C4AI_EES_ExecutionSchedule {
    /**
     * the date when request should be executed
     */
    private executeAt?;
    /**
     * the time in milliseconds after what the request should be executed
     */
    private executeIn?;
    /**
     * the maximum date when request should be executed (for AT_EASE and PRIORITIZED priorities)
     */
    private executeUntil?;
    constructor(conf?: Partial<C4AI_SDK_TYPES__EES_IExecutionSchedule>);
    toJSON(): C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule;
}
