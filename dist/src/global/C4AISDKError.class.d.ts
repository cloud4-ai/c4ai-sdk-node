import { C4AI_SDK_Error_ConstructorParams } from "../types/C4AISDKError.types";
import { AxiosError } from "axios";
export declare class C4AI_SDK_Error extends Error {
    name: string;
    message: string;
    code: string;
    description: string;
    link?: string;
    constructor(params: C4AI_SDK_Error_ConstructorParams | AxiosError | Error);
    protected identifyInitializer(err: C4AI_SDK_Error_ConstructorParams | AxiosError | Error): C4AI_SDK_Error;
    protected fromAxios(err: AxiosError<any>): C4AI_SDK_Error;
    protected fromDefault(err: C4AI_SDK_Error_ConstructorParams): C4AI_SDK_Error;
    protected fromError(err: Error): C4AI_SDK_Error;
    toJSON(): C4AI_SDK_Error_ConstructorParams;
}
