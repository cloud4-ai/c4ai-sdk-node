"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_CSSRecord = void 0;
const C4AIRequestParameter_class_1 = require("../../../global/request/C4AIRequestParameter.class");
class C4AI_CSSRecord extends C4AIRequestParameter_class_1.C4AI_RequestParameter {
    constructor(
    /**
     * The name of the parameter
     */
    name, 
    /**
     * the target value. If type in config doesn't set, will be used typeof
     */
    value, 
    /**
     * Extra data that may help to map parameters more dedicated
     */
    conf) {
        super(name, value, conf);
    }
}
exports.C4AI_CSSRecord = C4AI_CSSRecord;
//# sourceMappingURL=CSSRecord.class.js.map