import { C4AI_SDK_Dictionary } from '../types/common.types'
import { C4AI_SDK_Error_ConstructorParams } from '../types/C4AISDKError.types'

export const C4AI_SDK_ERRORS = {

    EMPTY_CREDENTIALS: {
        name: 'EMPTY_CREDENTIALS',
        message: 'Credentials are not provided',
        code: 'C4AI_SDK_GENERAL_00001',
        description: 'Credentials hve not been found in env. Please make sure you included them into ENV variables or directly into constructor.',
        link: 'https://docs.cloud4.ai/api-credentials'
    },
    INVALID_SIC: {
        name: 'INVALID_SIC',
        message: 'Invalid SIC Provided',
        code: 'C4AI_SDK_GENERAL_00002',
        description: 'provided SIC is invalid, make sure that it follows a proper structure.',
        link: 'https://docs.cloud4.ai/sic'
    },
    REQUEST_PARAMETERS_NOT_FOUND: {
        name: 'REQUEST_PARAMETERS_NOT_FOUND',
        message: 'Requested parameter was not found',
        code: 'C4AI_SDK_GENERAL_00003',
        description: 'Provided parameter name was not found in request parameters',
        link: 'https://docs.cloud4.ai/sic'
    },
    CREDENTIALS_NOT_FOUND: {
        name: 'CREDENTIALS_NOT_FOUND',
        message: 'Credentials were not found',
        code: 'C4AI_SDK_GENERAL_00004',
        description: 'Credentials were not found in the provided file',
        link: 'https://docs.cloud4.ai/sic'
    },
    METHOD_NOT_IMPLEMENTED: {
        name: 'METHOD_NOT_IMPLEMENTED',
        message: 'Method is not implemented',
        code: 'C4AI_SDK_GENERAL_00005',
        description: 'Method is not implemented',
        link: 'https://docs.cloud4.ai/sic'
    },
}