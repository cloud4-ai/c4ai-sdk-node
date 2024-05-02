export interface C4AI_SDK_TYPES__EES_IExecutionSchedule {
    /**
     * the date when request should be executed
     */
    executeAt?: string;
    /**
     * the time in milliseconds after what the request should be executed
     */
    executeIn?: number;
    /**
     * the maximum date when request should be executed (for AT_EASE and PRIORITIZED priorities)
     */
    executeUntil?: string;
}
