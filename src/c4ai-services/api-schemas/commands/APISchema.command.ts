import { C4AI_SDK_ServiceCommand } from "@c4ai-sdk/global/C4AIServiceCommand.class";
import { C4AI_APISchema } from "../APISchema.class";
import { C4AI_APISchemaCommands_API } from "../api/APISchemaCommand.api";

export class C4AI_APISchemaCommand extends C4AI_SDK_ServiceCommand<
    C4AI_APISchema
> {

    protected API: C4AI_APISchemaCommands_API = new C4AI_APISchemaCommands_API(this.service.service);
}
