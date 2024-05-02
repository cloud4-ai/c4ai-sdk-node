"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EES_ExecutionSchedule = void 0;
class C4AI_EES_ExecutionSchedule {
    constructor(conf = {}) {
        this.executeAt = conf.executeAt ? new Date(conf.executeAt) : undefined;
        this.executeIn = conf.executeIn;
        this.executeUntil = conf.executeUntil ? new Date(conf.executeUntil) : undefined;
    }
    toJSON() {
        var _a, _b;
        return {
            executeAt: (_a = this.executeAt) === null || _a === void 0 ? void 0 : _a.toISOString(),
            executeIn: this.executeIn,
            executeUntil: (_b = this.executeUntil) === null || _b === void 0 ? void 0 : _b.toISOString()
        };
    }
}
exports.C4AI_EES_ExecutionSchedule = C4AI_EES_ExecutionSchedule;
//# sourceMappingURL=EESExecutionSchedule.class.js.map