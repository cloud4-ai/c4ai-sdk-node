import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { C4AI_SDK_Context, C4AI_SDK_ContextInstance } from './C4AISDKContext.class';
import { C4AI_SDK_DeepPartial, C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from 'src/types/common.types';
import { C4AI_SDK_Error } from './C4AISDKError.class';

export class C4AI_SDK_APIProvider<
    _MainEntityClass
> {

    loading: boolean = false;

    protected entity!: C4AI_SDK_TYPES__SIC_SERVICES_NAMES

    protected axiosInstance: AxiosInstance
    protected version: string = 'v1'
    protected context: C4AI_SDK_Context = C4AI_SDK_ContextInstance
    protected baseURL = process.env.C4AI_SDK_API_LOCATION || 'https://sdk.cloud4.ai';


    protected customFormatter!: (response: AxiosResponse<any>) => any

    constructor(entity: C4AI_SDK_TYPES__SIC_SERVICES_NAMES) {

        this.entity = entity;

        this.axiosInstance = axios.create({
            baseURL: this.baseURL
        });

        this.axiosInstance.interceptors.request.use(async (conf) => {
            if (!this.context.token)
                await this.context.authenticate()

            conf.headers.Authorization = `Bearer ${this.context.token}`;

            this.loading = true;

            return conf;
        });

        this.axiosInstance.interceptors.response.use((response) => {
            this.loading = false;
            return response
        }, (error) => {
            // whatever you want to do with the error
            this.loading = false;
            return this.errorHandler(error)
        });

    }


    async create(
        entity: C4AI_SDK_DeepPartial<_MainEntityClass>,
    ): Promise<_MainEntityClass> {

        const resp: AxiosResponse<_MainEntityClass> = await this.axiosInstance.post(
            `${this.baseURL}/api/${this.version}/${this.entity}`,
            entity
        );

        return resp.data;
    }


    async get(
        entity: C4AI_SDK_DeepPartial<_MainEntityClass>,
    ): Promise<_MainEntityClass> {
        const resp: AxiosResponse<_MainEntityClass> =
            await this.axiosInstance.get(
                `${this.baseURL}/api/${this.version}/${this.entity}`
            );

        return resp.data;
    }


    /**
     * Method to load the entity from the API using the SIC
     */
    async load(sic: string): Promise<_MainEntityClass> {
        const resp: AxiosResponse<_MainEntityClass> =
            await this.axiosInstance.get(
                `${this.baseURL}/api/${this.version}/sic/${sic}`
            );
        return resp.data;
    }


    protected errorHandler(error) {
        throw new C4AI_SDK_Error(error);
    }
}

