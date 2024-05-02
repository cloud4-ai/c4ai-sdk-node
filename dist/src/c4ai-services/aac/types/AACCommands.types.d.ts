import { C4AI_SDK_TYPES__ServiceCommandConstructorParams, C4AI_SDK_TYPES__ServiceCommand_APIEntity } from "../../../types/C4AIServiceCommand.types";
import { C4AI_AAC } from "../AAC.class";
import { C4AI_RequestParameters } from "../../../global/request/C4AIRequestParameters.class";
import { C4AI_SDK_Dictionary } from "../../../types/common.types";
import { C4AI_CSS } from "../../css/CSS.class";
export type C4AI_SDK_TYPES__AAC_ServiceCommandConstructorParams = {
    /**
     * AAC Request Parameters.
     *
     * To find an appropriate request parameters please check your AAC configurations on https://console.cloud4.ai
     *
     * Those parameters may logged during execution on C4AI side.
     */
    parameters: C4AI_RequestParameters;
    /**
     * !!!VERY IMPORTANT!!! Keep all secrets here to prevent logging those parameters during the request.
     *  In case of any mistakes, please contact us to clean-up storage on C4AI side.
     *
     * Read more in docs: https://docs.cloud4.ai/ees/rawExecution
     */
    credentials?: Array<C4AI_CSS>;
} & C4AI_SDK_TYPES__ServiceCommandConstructorParams<C4AI_AAC>;
export type C4AI_SDK_TYPES__AAC_ServiceCommand_EXECUTE_APIEntity = {
    /**
     * Target service that should be used as an executor.
     *
     * To find a proper sic: sign in to https://portal.cloud4.ai
     */
    sic: string;
    /**
     * Those parameters may logged during execution.
     */
    parameters: C4AI_SDK_Dictionary<any>;
    /**
     * !!!VERY IMPORTANT!!! Keep all secrets here to prevent logging those parameters during the request.
     *  In case of any mistakes, please contact us to clean-up storage on C4AI side.
     *
     * Read more in docs: https://docs.cloud4.ai/ees/rawExecution
     */
    credentials?: C4AI_SDK_Dictionary<any>;
    /**
     * A binding Object with parameters that should be extracted from other services.
     *
     * Read more in docs: https://docs.cloud4.ai/ees/bindings
     */
    _bindings?: any;
} & C4AI_SDK_TYPES__ServiceCommand_APIEntity;
