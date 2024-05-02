import { C4AI_SDK_TYPES__IAPIServiceEntity } from "@c4ai-sdk/types/C4AIService.types";


export type C4AI_SDK_TYPES__APISchema_JSON = {

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
        // status!: SystemStatus
        // user!: User
        // organization!: Organization
        // api!: APICredential
        // settings!: PromptSettings
    }
} & C4AI_SDK_TYPES__IAPIServiceEntity



