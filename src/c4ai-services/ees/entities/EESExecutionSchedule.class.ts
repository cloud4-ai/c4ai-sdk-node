import { C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule } from "../types/EESCommandsAPI.types";
import { C4AI_SDK_TYPES__EES_IExecutionSchedule } from "../types/EESExecutionSchedule.types";

export class C4AI_EES_ExecutionSchedule {
    /**
     * the date when request should be executed
     */
    private executeAt?: Date
    /**
     * the time in milliseconds after what the request should be executed 
     */
    private executeIn?: number
    /**
     * the maximum date when request should be executed (for AT_EASE and PRIORITIZED priorities) 
     */
    private executeUntil?: Date



    constructor(conf: Partial<C4AI_SDK_TYPES__EES_IExecutionSchedule> = {}) {
        this.executeAt = conf.executeAt ? new Date(conf.executeAt) : undefined;
        this.executeIn = conf.executeIn;
        this.executeUntil = conf.executeUntil ? new Date(conf.executeUntil) : undefined;
    }


    toJSON(): C4AI_SDK_TYPES__EES_RawRequestExecutionSchedule {
        return {
            executeAt: this.executeAt?.toISOString(),
            executeIn: this.executeIn,
            executeUntil: this.executeUntil?.toISOString()
        }
    }
}