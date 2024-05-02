import { C4AI_SDK_TYPES__KDB_JSON } from "./types/KDB.types";
import { C4AI_KDB_API } from "./api/KDB.api";
import { C4AI_SDK_Service } from "../../global/C4AIService.class";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../../types/common.types";
import { C4AI_KDB_Query_Command } from "./commands/KDB-Query.command";
export declare class C4AI_KDB extends C4AI_SDK_Service<C4AI_SDK_TYPES__KDB_JSON> {
    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    API: C4AI_KDB_API;
    protected static _commands: {
        QUERY: typeof C4AI_KDB_Query_Command;
    };
    static get Commands(): {
        QUERY: typeof C4AI_KDB_Query_Command;
    };
    constructor(sicOrNew: string | C4AI_SDK_TYPES__KDB_JSON);
}
