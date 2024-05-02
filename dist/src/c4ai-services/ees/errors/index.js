"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_ERRORS__EES = void 0;
exports.C4AI_SDK_ERRORS__EES = {
    EXECUTOR_SIC_MISSING: {
        name: 'EXECUTOR_SIC_MISSING',
        message: 'Executor SIC is missing',
        code: 'C4AI_SDK_EES_00001',
        description: 'Executor SIC is missing in the request. Please make sure you have provided the sic in the request.',
        link: 'https://docs.cloud4.ai/ees/executor-sic'
    },
    TARGET_COMMAND_MISSING: {
        name: 'TARGET_COMMAND_MISSING',
        message: 'Target command is missing',
        code: 'C4AI_SDK_EES_00002',
        description: 'Target command is missing in the request. Please make sure you have provided the target command in the request.',
        link: 'https://docs.cloud4.ai/ees/target-command'
    },
    TARGET_COMMAND_TYPE_IS_INVALID: {
        name: 'TARGET_COMMAND_TYPE_IS_INVALID',
        message: 'Target command is not an instance of C4AI_SDK_ServiceCommand',
        code: 'C4AI_SDK_EES_00003',
        description: 'Target command is not an instance of C4AI_SDK_ServiceCommand. Please make sure you have provided the correct target command in the request.',
        link: 'https://docs.cloud4.ai/ees/target-command'
    }
};
//# sourceMappingURL=index.js.map