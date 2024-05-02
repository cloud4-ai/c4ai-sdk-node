import { AxiosInstance } from "axios";
export declare class C4AI_SDK_Context {
    private _token;
    private sic;
    private logger;
    private C4AI_CLIENT_ID;
    private C4AI_CLIENT_SECRET;
    private C4AI_SDK_CONFIG_SDK_VALIDATION;
    private C4AI_SDK_CONFIG_VERBOSE;
    private C4AI_SDK_CONFIG_IGNORE_ERRORS;
    private baseURL;
    protected axiosInstance: AxiosInstance;
    protected credentialsPromise: Promise<void> | null;
    constructor();
    get token(): string;
    get verbose(): boolean;
    get ignoreErrors(): boolean;
    get sdkValidation(): boolean;
    setCredentials(client_id: string, client_secret: string): void;
    private loadCredentials;
    private loadConfigurationsFromFile;
    authenticate(): Promise<void>;
}
export declare const C4AI_SDK_ContextInstance: C4AI_SDK_Context;
