import { C4AI_SDK_TYPES__CSS_JSON, C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams } from "./types/CSS.types";
import { C4AI_CSSRecords } from "./entities/CSSRecords.class";
import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";
import { C4AI_SDK_Service } from "@c4ai-sdk/global/C4AIService.class";
import { C4AI_SDK_SICParserHelper } from "@c4ai-sdk/helpers/C4AISicParser.helper";

export class C4AI_CSS extends C4AI_SDK_Service<
    C4AI_SDK_TYPES__CSS_JSON
> {

    service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES = C4AI_SDK_TYPES__SIC_SERVICES_NAMES.cssInstance;


    /**
     * Only for local entities
     * Those records always stores on the server side, However, in case when CSS is local, we store it here
     */
    records: C4AI_CSSRecords = new C4AI_CSSRecords();


    constructor(sicOrNew?: string | C4AI_SDK_TYPES__CSS_JSON | C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams) {
        super();
        this.identityInitializer(sicOrNew);
        this.init();
    }


    get isLocal(): boolean {
        return this.sic.startsWith('loc@');
    }


    protected identityInitializer(sicOrNew?: string | C4AI_SDK_TYPES__CSS_JSON | C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams): void {
        switch (true) {
            case typeof sicOrNew === 'string':
                this.fromSic(sicOrNew);
                break;

            case typeof sicOrNew === 'object' && (sicOrNew as any).sic:
                this.fromJSON(sicOrNew as C4AI_SDK_TYPES__CSS_JSON);
                break;

            default:
                this.fromLocal(sicOrNew as C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams);
                break;
        }
    }


    private fromLocal(sicOrNew: C4AI_SDK_TYPES__CSS_LocalEntityConstructorParams) {
        this.sic = C4AI_SDK_SICParserHelper.generateLocalSic(this.service);
        this.records = new C4AI_CSSRecords({
            rotationStrategy: sicOrNew.rotationStrategy
        });
    }
}
