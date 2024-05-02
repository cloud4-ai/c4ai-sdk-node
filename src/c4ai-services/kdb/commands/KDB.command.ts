import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_KDB } from "../KDB.class";
import { C4AI_KDBCommands_API } from "../api/KDBCommand.api";

export class C4AI_KDBCommand extends C4AI_SDK_ServiceCommand<
    C4AI_KDB
> {
    protected API: C4AI_KDBCommands_API = new C4AI_KDBCommands_API(this.service.service);
}
