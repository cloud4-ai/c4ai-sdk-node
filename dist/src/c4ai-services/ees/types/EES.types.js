"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_TYPES__EES_ExecutionPriority = void 0;
var C4AI_SDK_TYPES__EES_ExecutionPriority;
(function (C4AI_SDK_TYPES__EES_ExecutionPriority) {
    /**
     * The request will be executed as soon as possible depending on the current load of the system.
     */
    C4AI_SDK_TYPES__EES_ExecutionPriority["AT_EASE"] = "AT_EASE";
    /**
     * The request will be executed with the highest priority. But will be executed only after all INSTANT requests.
     * If the system is overloaded, the request may be delayed.
     */
    C4AI_SDK_TYPES__EES_ExecutionPriority["PRIORITIZED"] = "PRIORITIZED";
    /**
     * Regardless of the system load, the request will be executed immediately.
     */
    C4AI_SDK_TYPES__EES_ExecutionPriority["INSTANT"] = "INSTANT";
})(C4AI_SDK_TYPES__EES_ExecutionPriority || (exports.C4AI_SDK_TYPES__EES_ExecutionPriority = C4AI_SDK_TYPES__EES_ExecutionPriority = {}));
//# sourceMappingURL=EES.types.js.map