import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_EES } from "../EES.class";
import { C4AI_EESCommands_API } from "../api/EESCommands.api";

export class C4AI_EESCommand extends C4AI_SDK_ServiceCommand<
    C4AI_EES
> {
    protected API: C4AI_EESCommands_API = new C4AI_EESCommands_API(this.service.service);
}
