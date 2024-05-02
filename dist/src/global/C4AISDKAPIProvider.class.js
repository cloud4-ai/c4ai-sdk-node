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
exports.C4AI_SDK_APIProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const C4AISDKContext_class_1 = require("./C4AISDKContext.class");
const C4AISDKError_class_1 = require("./C4AISDKError.class");
class C4AI_SDK_APIProvider {
    constructor(entity) {
        this.loading = false;
        this.version = 'v1';
        this.context = C4AISDKContext_class_1.C4AI_SDK_ContextInstance;
        this.baseURL = process.env.C4AI_SDK_API_LOCATION || 'https://sdk.cloud4.ai';
        this.entity = entity;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
        this.axiosInstance.interceptors.request.use((conf) => __awaiter(this, void 0, void 0, function* () {
            if (!this.context.token)
                yield this.context.authenticate();
            conf.headers.Authorization = `Bearer ${this.context.token}`;
            this.loading = true;
            return conf;
        }));
        this.axiosInstance.interceptors.response.use((response) => {
            this.loading = false;
            return response;
        }, (error) => {
            // whatever you want to do with the error
            this.loading = false;
            return this.errorHandler(error);
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.axiosInstance.post(`${this.baseURL}/api/${this.version}/${this.entity}`, entity);
            return resp.data;
        });
    }
    get(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.axiosInstance.get(`${this.baseURL}/api/${this.version}/${this.entity}`);
            return resp.data;
        });
    }
    /**
     * Method to load the entity from the API using the SIC
     */
    load(sic) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.axiosInstance.get(`${this.baseURL}/api/${this.version}/sic/${sic}`);
            return resp.data;
        });
    }
    errorHandler(error) {
        throw new C4AISDKError_class_1.C4AI_SDK_Error(error);
    }
}
exports.C4AI_SDK_APIProvider = C4AI_SDK_APIProvider;
//# sourceMappingURL=C4AISDKAPIProvider.class.js.map