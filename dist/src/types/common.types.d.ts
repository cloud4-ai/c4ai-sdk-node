export declare enum C4AI_SDK_TYPES__SIC_SERVICES_NAMES {
    default = "default",
    pl = "pl",
    plPrompt = "pl-prompt",
    aacInstance = "aac-instance",
    aacTemplate = "aac-template",
    ailInstance = "ail-instance",
    ailModel = "ail-model",
    kdbInstance = "kdb-instance",
    cssInstance = "css-instance",
    cssTemplate = "css-template",
    cssRecord = "css-record",
    apiSchemaInstance = "api-schema-instance",
    apiSchemaTemplate = "api-schema-template",
    sjsInstance = "sjs-instance",
    sjsTemplate = "sjs-template",
    ees = "ees",
    idtsInstance = "idts-instance",
    idtsTemplate = "idts-template",
    idosInstance = "idos-instance",
    idosTemplate = "idos-template",
    file = "file",
    organization = "organization",
    user = "user",
    api = "api",
    apiCredentials = "api-credentials",
    project = "project"
}
export type C4AI_SDK_RequestParam = {
    id?: string;
    /**
     * The issuer of the parameter. Could be system, custom, proxy, credentials or SIC to data provider service(e.g. CSS)
     */
    issuer?: 'system' | 'custom' | 'proxy' | 'credentials' | string;
    /**
     * Common internal value, uses for proper mapping
     */
    key?: string;
    /**
     * Allows to define the type of the parameter to convert input during the execution
     */
    type: 'json' | 'array' | 'number' | 'string' | 'boolean' | 'base_64' | 'file' | 'file_url';
    /**
     * The name of the parameter
     */
    name: string;
    /**
     * The value of the parameter
     */
    value: string;
};
export type C4AI_SDK_DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? C4AI_SDK_DeepPartial<T[P]> : T[P];
};
export type C4AI_SDK_ObjectKeyEnum<T, E> = {
    [P in keyof T]?: T[P] extends object ? C4AI_SDK_ObjectKeyEnum<T[P], E> : E;
};
export type C4AI_SDK_Dictionary<T> = {
    [Key: string]: T;
};
