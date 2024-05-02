"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_RequestParameters = void 0;
const errors_constants_1 = require("../../constants/errors.constants");
const C4AISDKError_class_1 = require("../C4AISDKError.class");
class C4AI_RequestParameters {
    constructor(
    /**
     * The list of parameters from the request
     */
    ...data) {
        this.index = 0;
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    get(paramName) {
        return this.data.find(el => el.name === paramName);
    }
    set(paramName, value) {
        const target = this.data.find(el => el.name === paramName);
        if (!target)
            throw new C4AISDKError_class_1.C4AI_SDK_Error(errors_constants_1.C4AI_SDK_ERRORS.REQUEST_PARAMETERS_NOT_FOUND);
        target.value = value;
        return this;
    }
    add(...params) {
        this.data.push(...params);
        return this;
    }
    // Implement the `next()` method of the iterator protocol
    next() {
        if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
    // Custom method to get the current value
    current() {
        if (this.index >= 0 && this.index < this.data.length) {
            return this.data[this.index];
        }
        return undefined;
    }
    [Symbol.iterator]() {
        return this;
    }
    toArray() {
        return this.data;
    }
    toJSON() {
        return this.data.reduce((acc, curr) => {
            acc[curr.name] = curr.value;
            return acc;
        }, {});
    }
}
exports.C4AI_RequestParameters = C4AI_RequestParameters;
//# sourceMappingURL=C4AIRequestParameters.class.js.map