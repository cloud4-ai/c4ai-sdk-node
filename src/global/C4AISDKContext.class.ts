import axios, { AxiosInstance, AxiosResponse } from "axios";
import fs from 'fs';
import { C4AI_SDK_Logger } from "./C4AISDKLogger.class";
import { C4AI_SDK_Error } from "./C4AISDKError.class";
import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";

export class C4AI_SDK_Context {

    private _token: string = '';
    private sic = 'local@c4ai-context';
    private logger: C4AI_SDK_Logger

    // Credentials
    private C4AI_CLIENT_ID: string = '';
    private C4AI_CLIENT_SECRET: string = '';

    // Configuration
    private C4AI_SDK_CONFIG_SDK_VALIDATION: boolean = true
    private C4AI_SDK_CONFIG_VERBOSE: boolean = true
    private C4AI_SDK_CONFIG_IGNORE_ERRORS: boolean = false

    private baseURL = process.env.C4AI_SDK_API_LOCATION || 'https://sdk.cloud4.ai';
    protected axiosInstance: AxiosInstance

    protected credentialsPromise: Promise<void> | null = null;

    constructor() {

        this.logger = new C4AI_SDK_Logger(this.sic, this.verbose, this.ignoreErrors);

        this.axiosInstance = axios.create({
            baseURL: this.baseURL
        });

        this.axiosInstance.interceptors.request.use(async (conf) => {
            if (this._token)
                conf.headers.Authorization = `Bearer ${this.token}`;

            return conf;
        });

        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const err = new C4AI_SDK_Error(error);
            this.logger.error(err);
            throw err
        });

        // global logger configuration

        // process.on('uncaughtException', (error) => {
        //     // log only in case of C4AI_SDK_Error
        //     if (error instanceof C4AI_SDK_Error)
        //         this.logger.error(error);
        // });
    }


    get token(): string {
        return this._token;
    }

    get verbose(): boolean {
        return process.env.C4AI_SDK_CONFIG_VERBOSE === 'true' || this.C4AI_SDK_CONFIG_VERBOSE;
    }

    get ignoreErrors(): boolean {
        return process.env.C4AI_SDK_CONFIG_IGNORE_ERRORS === 'true' || this.C4AI_SDK_CONFIG_IGNORE_ERRORS;
    }

    get sdkValidation(): boolean {
        return process.env.C4AI_SDK_CONFIG_SDK_VALIDATION === 'true' || this.C4AI_SDK_CONFIG_SDK_VALIDATION;
    }


    setCredentials(client_id: string, client_secret: string) {
        this.C4AI_CLIENT_ID = client_id;
        this.C4AI_CLIENT_SECRET = client_secret;
        this.logger.log('Credentials set manually');
    }

    private loadCredentials(): Promise<void> {
        if (!this.credentialsPromise)
            this.credentialsPromise = new Promise((resolve, reject) => {
                switch (true) {
                    case !!this.C4AI_CLIENT_ID && !!this.C4AI_CLIENT_SECRET:
                        break;

                    case fs.existsSync('c4ai.conf.json'):
                        this.loadConfigurationsFromFile();
                        break;

                    case !!process.env.C4AI_CLIENT_ID && !!process.env.C4AI_CLIENT_SECRET:

                        this.C4AI_CLIENT_ID = process.env.C4AI_CLIENT_ID;
                        this.C4AI_CLIENT_SECRET = process.env.C4AI_CLIENT_SECRET;

                        this.logger.log('Credentials loaded from environment variables');
                        break;

                    default:
                        reject(new C4AI_SDK_Error(C4AI_SDK_ERRORS.CREDENTIALS_NOT_FOUND));
                }

                this.logger = new C4AI_SDK_Logger(this.sic, this.verbose, this.ignoreErrors);
                resolve();
            });

        return this.credentialsPromise;
    }

    

    private loadConfigurationsFromFile() {
        try {
            const data = fs.readFileSync('c4ai.conf.json', 'utf8');

            const config = JSON.parse(data);

            if (!config.client_id || !config.client_secret)
                throw new C4AI_SDK_Error(C4AI_SDK_ERRORS.CREDENTIALS_NOT_FOUND);

            this.C4AI_CLIENT_ID = config.client_id;
            this.C4AI_CLIENT_SECRET = config.client_secret;
            this.C4AI_SDK_CONFIG_VERBOSE = config.verbose || this.C4AI_SDK_CONFIG_VERBOSE;
            this.C4AI_SDK_CONFIG_IGNORE_ERRORS = config.ignoreErrors || this.C4AI_SDK_CONFIG_IGNORE_ERRORS;
            this.C4AI_SDK_CONFIG_SDK_VALIDATION = config.sdkValidation || this.C4AI_SDK_CONFIG_SDK_VALIDATION;

            this.logger.log('Credentials loaded from file');
        } catch (error) {
            this.logger.error(error);
        }
    }


    async authenticate() {
        if (this._token) return;

        await this.loadCredentials();

        const response: AxiosResponse<{ token: string }> = await this.axiosInstance.post(
            `${this.baseURL}/api/v1/auth/authorize`,
            {
                client_id: this.C4AI_CLIENT_ID,
                client_secret: this.C4AI_CLIENT_SECRET
            });

        this._token = response.data.token;
    }
}


export const C4AI_SDK_ContextInstance = new C4AI_SDK_Context();
