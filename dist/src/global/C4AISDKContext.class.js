"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_SDK_ContextInstance = exports.C4AI_SDK_Context = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const C4AISDKLogger_class_1 = require("./C4AISDKLogger.class");
const C4AISDKError_class_1 = require("./C4AISDKError.class");
const errors_constants_1 = require("../constants/errors.constants");
class C4AI_SDK_Context {
    constructor() {
        this._token = '';
        this.sic = 'local@c4ai-context';
        // Credentials
        this.C4AI_CLIENT_ID = '';
        this.C4AI_CLIENT_SECRET = '';
        // Configuration
        this.C4AI_SDK_CONFIG_SDK_VALIDATION = true;
        this.C4AI_SDK_CONFIG_VERBOSE = true;
        this.C4AI_SDK_CONFIG_IGNORE_ERRORS = false;
        this.baseURL = process.env.C4AI_SDK_API_LOCATION || 'https://sdk.cloud4.ai';
        this.credentialsPromise = null;
        this.logger = new C4AISDKLogger_class_1.C4AI_SDK_Logger(this.sic, this.verbose, this.ignoreErrors);
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
        this.axiosInstance.interceptors.request.use((conf) => __awaiter(this, void 0, void 0, function* () {
            if (this._token)
                conf.headers.Authorization = `Bearer ${this.token}`;
            return conf;
        }));
        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const err = new C4AISDKError_class_1.C4AI_SDK_Error(error);
            this.logger.error(err);
            throw err;
        });
        // global logger configuration
        // process.on('uncaughtException', (error) => {
        //     // log only in case of C4AI_SDK_Error
        //     if (error instanceof C4AI_SDK_Error)
        //         this.logger.error(error);
        // });
    }
    get token() {
        return this._token;
    }
    get verbose() {
        return process.env.C4AI_SDK_CONFIG_VERBOSE === 'true' || this.C4AI_SDK_CONFIG_VERBOSE;
    }
    get ignoreErrors() {
        return process.env.C4AI_SDK_CONFIG_IGNORE_ERRORS === 'true' || this.C4AI_SDK_CONFIG_IGNORE_ERRORS;
    }
    get sdkValidation() {
        return process.env.C4AI_SDK_CONFIG_SDK_VALIDATION === 'true' || this.C4AI_SDK_CONFIG_SDK_VALIDATION;
    }
    setCredentials(client_id, client_secret) {
        this.C4AI_CLIENT_ID = client_id;
        this.C4AI_CLIENT_SECRET = client_secret;
        this.logger.log('Credentials set manually');
    }
    loadCredentials() {
        if (!this.credentialsPromise)
            this.credentialsPromise = new Promise((resolve, reject) => {
                switch (true) {
                    case !!this.C4AI_CLIENT_ID && !!this.C4AI_CLIENT_SECRET:
                        break;
                    case fs_1.default.existsSync('c4ai.conf.json'):
                        this.loadConfigurationsFromFile();
                        break;
                    case !!process.env.C4AI_CLIENT_ID && !!process.env.C4AI_CLIENT_SECRET:
                        this.C4AI_CLIENT_ID = process.env.C4AI_CLIENT_ID;
                        this.C4AI_CLIENT_SECRET = process.env.C4AI_CLIENT_SECRET;
                        this.logger.log('Credentials loaded from environment variables');
                        break;
                    default:
                        reject(new C4AISDKError_class_1.C4AI_SDK_Error(errors_constants_1.C4AI_SDK_ERRORS.CREDENTIALS_NOT_FOUND));
                }
                this.logger = new C4AISDKLogger_class_1.C4AI_SDK_Logger(this.sic, this.verbose, this.ignoreErrors);
                resolve();
            });
        return this.credentialsPromise;
    }
    loadConfigurationsFromFile() {
        try {
            const data = fs_1.default.readFileSync('c4ai.conf.json', 'utf8');
            const config = JSON.parse(data);
            if (!config.client_id || !config.client_secret)
                throw new C4AISDKError_class_1.C4AI_SDK_Error(errors_constants_1.C4AI_SDK_ERRORS.CREDENTIALS_NOT_FOUND);
            this.C4AI_CLIENT_ID = config.client_id;
            this.C4AI_CLIENT_SECRET = config.client_secret;
            this.C4AI_SDK_CONFIG_VERBOSE = config.verbose || this.C4AI_SDK_CONFIG_VERBOSE;
            this.C4AI_SDK_CONFIG_IGNORE_ERRORS = config.ignoreErrors || this.C4AI_SDK_CONFIG_IGNORE_ERRORS;
            this.C4AI_SDK_CONFIG_SDK_VALIDATION = config.sdkValidation || this.C4AI_SDK_CONFIG_SDK_VALIDATION;
            this.logger.log('Credentials loaded from file');
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._token)
                return;
            yield this.loadCredentials();
            const response = yield this.axiosInstance.post(`${this.baseURL}/api/v1/auth/authorize`, {
                client_id: this.C4AI_CLIENT_ID,
                client_secret: this.C4AI_CLIENT_SECRET
            });
            this._token = response.data.token;
        });
    }
}
exports.C4AI_SDK_Context = C4AI_SDK_Context;
exports.C4AI_SDK_ContextInstance = new C4AI_SDK_Context();
//# sourceMappingURL=C4AISDKContext.class.js.map