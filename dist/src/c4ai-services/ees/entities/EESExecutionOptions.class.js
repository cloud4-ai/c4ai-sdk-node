"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EES_ExecutionOptions = void 0;
class C4AI_EES_ExecutionOptions {
    constructor(conf = {}) {
        this.priority = conf.priority;
        this.deduplicationId = conf.deduplicationId;
        if (conf.fallback)
            this.fallback = conf.fallback;
        if (conf.callback)
            this.callback = conf.callback;
        this.retries = conf.retries;
    }
    toJSON() {
        var _a, _b;
        return {
            priority: this.priority,
            deduplicationId: this.deduplicationId,
            fallback: (_a = this.fallback) === null || _a === void 0 ? void 0 : _a.map((command) => command.toJSON()),
            retries: this.retries,
            callback: (_b = this.callback) === null || _b === void 0 ? void 0 : _b.map((command) => command.toJSON()),
        };
    }
}
exports.C4AI_EES_ExecutionOptions = C4AI_EES_ExecutionOptions;
//# sourceMappingURL=EESExecutionOptions.class.js.map