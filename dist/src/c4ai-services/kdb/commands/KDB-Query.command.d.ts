import { C4AI_SDK_TYPES__KDB_ServiceCommand_QueryConstructorParams } from "../types/KDBCommand.types";
import { C4AI_KDBCommand } from "./KDB.command";
export declare class C4AI_KDB_Query_Command extends C4AI_KDBCommand {
    protected name: string;
    constructor(params: C4AI_SDK_TYPES__KDB_ServiceCommand_QueryConstructorParams);
}
