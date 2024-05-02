import { C4AI_SDK_Error_ConstructorParams } from "@c4ai-sdk/types/C4AISDKError.types"
import { AxiosError } from "axios"

export class C4AI_SDK_Error extends Error {

    name!: string
    message!: string
    code!: string
    description!: string
    link?: string

    constructor(params: C4AI_SDK_Error_ConstructorParams | AxiosError | Error) {
        super(params.message);
        this.identifyInitializer(params);
    }


    protected identifyInitializer(err: C4AI_SDK_Error_ConstructorParams | AxiosError | Error): C4AI_SDK_Error {

        switch (true) {
            case err instanceof AxiosError:
                return this.fromAxios(err);

            case err instanceof Error:
                return this.fromError(err)


            default:
                return this.fromDefault(err)
        }
    }


    protected fromAxios(err: AxiosError<any>): C4AI_SDK_Error {
        this.name = err.name;
        this.code = err.code || 'C4AI_SDK_EXTERNAL_API_ERROR';
        this.description = err.response?.data?.description || 'External API Error...';

        return this;
    }

    protected fromDefault(err: C4AI_SDK_Error_ConstructorParams): C4AI_SDK_Error {
        this.name = err.name;
        this.description = err.description;
        this.code = err.code;
        this.link = err.link;

        return this;
    }

    protected fromError(err: Error): C4AI_SDK_Error {
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
        this.code = 'C4AI_SDK_INTERNAL_ERROR'
        this.description = 'Something wen\'t wrong...'

        return this;
    }


    toJSON(): C4AI_SDK_Error_ConstructorParams {
        return {
            name: this.name,
            message: this.message,
            description: this.description,
            code: this.code,
            link: this.link
        }
    }
}