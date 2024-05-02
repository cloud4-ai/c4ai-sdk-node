"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_CSS = void 0;
const CSSRecords_class_1 = require("./entities/CSSRecords.class");
const common_types_1 = require("../../types/common.types");
const C4AIService_class_1 = require("../../global/C4AIService.class");
const C4AISicParser_helper_1 = require("../../helpers/C4AISicParser.helper");
class C4AI_CSS extends C4AIService_class_1.C4AI_SDK_Service {
    constructor(sicOrNew) {
        super();
        this.service = common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES.cssInstance;
        /**
         * Only for local entities
         * Those records always stores on the server side, However, in case when CSS is local, we store it here
         */
        this.records = new CSSRecords_class_1.C4AI_CSSRecords();
        this.identityInitializer(sicOrNew);
        this.init();
    }
    get isLocal() {
        return this.sic.startsWith('loc@');
    }
    identityInitializer(sicOrNew) {
        switch (true) {
            case typeof sicOrNew === 'string':
                this.fromSic(sicOrNew);
                break;
            case typeof sicOrNew === 'object' && sicOrNew.sic:
                this.fromJSON(sicOrNew);
                break;
            default:
                this.fromLocal(sicOrNew);
                break;
        }
    }
    fromLocal(sicOrNew) {
        this.sic = C4AISicParser_helper_1.C4AI_SDK_SICParserHelper.generateLocalSic(this.service);
        this.records = new CSSRecords_class_1.C4AI_CSSRecords({
            rotationStrategy: sicOrNew.rotationStrategy
        });
    }
}
exports.C4AI_CSS = C4AI_CSS;
//# sourceMappingURL=CSS.class.js.map