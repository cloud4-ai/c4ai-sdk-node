"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_CommandRequest = void 0;
const C4AISDKError_class_1 = require("../../global/C4AISDKError.class");
class C4AI_CommandRequest {
    constructor(raw) {
        this.rawResult = raw;
    }
    /**
     * The result of the command execution
     *
     * In case of success, the result will be an object with the key `result` containing the result of the command execution
     * The cases when execution not Completed, the result will be `undefined`
     */
    get result() {
        return this.rawResult.result;
    }
    /**
     *
     * The error that occurred during the command execution
     */
    get error() {
        return this.rawResult.error
            ? new C4AISDKError_class_1.C4AI_SDK_Error(this.rawResult.error)
            : undefined;
    }
    /**
     * Command Request ID. Can be used to track the status of the command execution
     *
     * Or to debug the result of the command execution through C4AI Cloud console: https://console.cloud4.ai
     */
    get id() {
        return this.rawResult.id;
    }
}
exports.C4AI_CommandRequest = C4AI_CommandRequest;
//# sourceMappingURL=CommandRequest.class.js.map