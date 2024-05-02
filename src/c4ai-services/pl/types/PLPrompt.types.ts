import { C4AI_SDK_TYPES__IAPIServiceEntity } from "@c4ai-sdk/types/C4AIService.types";
import { C4AI_SDK_Dictionary, C4AI_SDK_RequestParam } from "@c4ai-sdk/types/common.types";


export type C4AI_SDK_TYPES__PLPrompt_JSON = {

    sic: string
    id: number;
    name: string;
    description?: string;
    // status!: SystemStatus
    // user?: User
    // api?: APICredential
    // project?: Project
    // organization!: Organization
    // library!: PromptLibrary
    lts: {
        sic: string
        id: number;
        version: string;
        text: string;
        parameters: Array<C4AI_SDK_RequestParam>;
        // status!: SystemStatus
        // user!: User
        // organization!: Organization
        // api!: APICredential
        // settings!: PromptSettings
    }
} & C4AI_SDK_TYPES__IAPIServiceEntity



export type C4AI_SDK_TYPES__PLPrompt_ExecutionResponse = {
    result: any,
    payload?: C4AI_SDK_Dictionary<any>
}
