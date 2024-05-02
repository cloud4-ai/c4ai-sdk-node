import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "@c4ai-sdk/types/common.types";


export class C4AI_SDK_SICParserHelper {

    static sicCounter = 0;

    static sicRegexp: RegExp = new RegExp(
        `^(sic|loc|tmp)@([0-9]{10}):(${Object
            .values(C4AI_SDK_TYPES__SIC_SERVICES_NAMES)
            .reduce((acc, curr, i, arr) => {
                acc += (curr as string) + (i < (arr.length - 1) ? '|' : '');
                return acc;
            }, '')}):([0-9]{10})(@v[0-9]+|@lts)?$`)



    static parse(sic: string): {
        type: 'public' | 'interval'
        service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES,
        version?: string | 'lts',
        organizationId: string
        serviceId: string
    } {

        const [prefix, body, version] = sic.split('@');

        const [organizationId, service, serviceId] = body.split(':')

        return {
            type: (prefix === 'sic' || prefix === 'tmp' || 'loc') ? 'public' : 'interval',
            service: service as C4AI_SDK_TYPES__SIC_SERVICES_NAMES,
            version,
            organizationId,
            serviceId
        }
    }

    static isSic(sic: string): boolean {

        return this.sicRegexp.test(
            sic
        )
    }

    static withoutVersion(sic: string) {
        const [prefix, body] = sic.split('@');

        return `${prefix}@${body}`;
    }

    static isTemplate(sic: string): boolean {
        if (sic.indexOf('template') !== -1)
            return true;

        const [prefix] = sic.split('@');

        if (prefix === 'tmp')
            return true;

        return false;

    }

    static generateLocalSic(service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES) {
        this.sicCounter++;
        return `loc@0000000000:${service}:${this.formatWithLeadingZeros(this.sicCounter)}`;
    }


    static formatWithLeadingZeros(number, maxZeros = 10) {
        const formattedNumber = String(number).padStart(maxZeros + 1, '0');
        return formattedNumber.slice(-maxZeros);
    }
}