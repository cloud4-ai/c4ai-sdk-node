"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_RequestParameter = void 0;
class C4AI_RequestParameter {
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
        this.value = value;
        this.defaultValue = value;
        this.name = name;
        this.type = conf && conf.type ? conf.type : typeof value;
        this.id = conf === null || conf === void 0 ? void 0 : conf.id;
    }
}
exports.C4AI_RequestParameter = C4AI_RequestParameter;
//# sourceMappingURL=C4AIRequestParameter.class.js.map