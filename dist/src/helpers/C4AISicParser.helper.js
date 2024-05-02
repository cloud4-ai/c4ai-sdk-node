"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_SICParserHelper = void 0;
const common_types_1 = require("../types/common.types");
class C4AI_SDK_SICParserHelper {
    static parse(sic) {
        const [prefix, body, version] = sic.split('@');
        const [organizationId, service, serviceId] = body.split(':');
        return {
            type: (prefix === 'sic' || prefix === 'tmp' || 'loc') ? 'public' : 'interval',
            service: service,
            version,
            organizationId,
            serviceId
        };
    }
    static isSic(sic) {
        return this.sicRegexp.test(sic);
    }
    static withoutVersion(sic) {
        const [prefix, body] = sic.split('@');
        return `${prefix}@${body}`;
    }
    static isTemplate(sic) {
        if (sic.indexOf('template') !== -1)
            return true;
        const [prefix] = sic.split('@');
        if (prefix === 'tmp')
            return true;
        return false;
    }
    static generateLocalSic(service) {
        this.sicCounter++;
        return `loc@0000000000:${service}:${this.formatWithLeadingZeros(this.sicCounter)}`;
    }
    static formatWithLeadingZeros(number, maxZeros = 10) {
        const formattedNumber = String(number).padStart(maxZeros + 1, '0');
        return formattedNumber.slice(-maxZeros);
    }
}
exports.C4AI_SDK_SICParserHelper = C4AI_SDK_SICParserHelper;
C4AI_SDK_SICParserHelper.sicCounter = 0;
C4AI_SDK_SICParserHelper.sicRegexp = new RegExp(`^(sic|loc|tmp)@([0-9]{10}):(${Object
    .values(common_types_1.C4AI_SDK_TYPES__SIC_SERVICES_NAMES)
    .reduce((acc, curr, i, arr) => {
    acc += curr + (i < (arr.length - 1) ? '|' : '');
    return acc;
}, '')}):([0-9]{10})(@v[0-9]+|@lts)?$`);
//# sourceMappingURL=C4AISicParser.helper.js.map