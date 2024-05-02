import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_AAC } from "../AAC.class";
import { C4AI_AACCommands_API } from "../api/AACCommand.api";

export class C4AI_AACCommand extends C4AI_SDK_ServiceCommand<
    C4AI_AAC
> {
    protected API: C4AI_AACCommands_API = new C4AI_AACCommands_API(this.service.service);
}
