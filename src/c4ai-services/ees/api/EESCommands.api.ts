import { C4AI_SDK_APIProvider } from "@c4ai-sdk/global/C4AISDKAPIProvider.class";
import {
    C4AI_SDK_TYPES__EES_JSON,
} from "../types/EES.types";
import { AxiosResponse } from "axios";
import { C4AI_SDK_TYPES__EES_RawRequestExecutionResult, C4AI_SDK_TYPES__EES_RawRequestParams } from "../types/EESCommandsAPI.types";

export class C4AI_EESCommands_API extends C4AI_SDK_APIProvider<C4AI_SDK_TYPES__EES_JSON> {


    async execute(sic: string, request: C4AI_SDK_TYPES__EES_RawRequestParams): Promise<C4AI_SDK_TYPES__EES_RawRequestExecutionResult> {
        const resp: AxiosResponse<C4AI_SDK_TYPES__EES_RawRequestExecutionResult> = await this.axiosInstance.post(
            `${this.baseURL}/api/${this.version}/${this.entity}/commands/${sic}/execute`,
            request
        );

        return resp.data;
    }
}