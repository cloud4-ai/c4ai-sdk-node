"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_CSSRecords = void 0;
const C4AIRequestParameters_class_1 = require("../../../global/request/C4AIRequestParameters.class");
class C4AI_CSSRecords extends C4AIRequestParameters_class_1.C4AI_RequestParameters {
    constructor(config = {}, 
    /**
     * The list of CSS Records
     */
    ...data) {
        super(...data);
        this.config = {
            rotationStrategy: 'round_robin'
        };
        this.config = Object.assign(Object.assign({}, this.config), config);
    }
    // Implement the `next()` method of the iterator protocol
    next() {
        if (this.index < this.data.length) {
            const rotationStrategy = this.config.rotationStrategy;
            let nextIndex = this.index;
            if (rotationStrategy === 'round_robin') {
                nextIndex = (this.index + 1) % this.data.length;
            }
            else if (rotationStrategy === 'random') {
                nextIndex = Math.floor(Math.random() * this.data.length);
            }
            else if (rotationStrategy === 'sequential') {
                nextIndex = this.index + 1;
            }
            this.index = nextIndex;
            return { value: this.data[nextIndex], done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
}
exports.C4AI_CSSRecords = C4AI_CSSRecords;
//# sourceMappingURL=CSSRecords.class.js.map