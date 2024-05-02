import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_PLPrompt } from "../PLPrompt.class";
import { C4AI_PLPromptCommands_API } from "../api/PLPromptCommand.api";

export class C4AI_PLPromptCommand extends C4AI_SDK_ServiceCommand<
    C4AI_PLPrompt
> {
    protected API: C4AI_PLPromptCommands_API = new C4AI_PLPromptCommands_API(this.service.service);
}
