import { AxiosInstance, AxiosResponse } from 'axios';
import { C4AI_SDK_Context } from './C4AISDKContext.class';
import { C4AI_SDK_DeepPartial, C4AI_SDK_TYPES__SIC_SERVICES_NAMES } from 'src/types/common.types';
export declare class C4AI_SDK_APIProvider<_MainEntityClass> {
    loading: boolean;
    protected entity: C4AI_SDK_TYPES__SIC_SERVICES_NAMES;
    protected axiosInstance: AxiosInstance;
    protected version: string;
    protected context: C4AI_SDK_Context;
    protected baseURL: string;
    protected customFormatter: (response: AxiosResponse<any>) => any;
    constructor(entity: C4AI_SDK_TYPES__SIC_SERVICES_NAMES);
    create(entity: C4AI_SDK_DeepPartial<_MainEntityClass>): Promise<_MainEntityClass>;
    get(entity: C4AI_SDK_DeepPartial<_MainEntityClass>): Promise<_MainEntityClass>;
    /**
     * Method to load the entity from the API using the SIC
     */
    load(sic: string): Promise<_MainEntityClass>;
    protected errorHandler(error: any): void;
}
