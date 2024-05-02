import { C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from "../types/common.types";
export declare class C4AI_SDK_SICParserHelper {
    static sicCounter: number;
    static sicRegexp: RegExp;
    static parse(sic: string): {
        type: 'public' | 'interval';
        service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
        version?: string | 'lts';
        organizationId: string;
        serviceId: string;
    };
    static isSic(sic: string): boolean;
    static withoutVersion(sic: string): string;
    static isTemplate(sic: string): boolean;
    static generateLocalSic(service: C4AI_SDK_TYPES__SIC_SERVICES_NAMES): string;
    static formatWithLeadingZeros(number: any, maxZeros?: number): string;
}
