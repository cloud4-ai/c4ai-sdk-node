import { C4AI_SDK_Dictionary, C4AI_SDK_RequestParam } from "@c4ai-sdk/types/common.types";
import { C4AI_RequestParameter } from "./C4AIRequestParameter.class";
import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";
import { C4AI_SDK_Error } from "../C4AISDKError.class";


export class C4AI_RequestParameters<
    _ParamType extends C4AI_RequestParameter = C4AI_RequestParameter
> {
    protected data!: _ParamType[] | C4AI_RequestParameter[];
    protected index: number;

    constructor(
        /**
         * The list of parameters from the request
         */
        ...data: Array<_ParamType>
    ) {
        this.index = 0
        this.data = data as _ParamType[];


    }


    get length(): number {
        return this.data.length;
    }


    get(paramName: string): C4AI_RequestParameter | undefined {
        return this.data.find(el => el.name === paramName);
    }

    set(paramName: string, value: string): this {
        const target = this.data.find(el => el.name === paramName);

        if (!target)
            throw new C4AI_SDK_Error(C4AI_SDK_ERRORS.REQUEST_PARAMETERS_NOT_FOUND);

        target.value = value;

        return this;
    }

    add(...params: _ParamType[]): this {
        this.data.push(...params);

        return this;
    }

    // Implement the `next()` method of the iterator protocol
    next(): IteratorResult<_ParamType> {
        if (this.index < this.data.length) {
            return { value: this.data[this.index++] as _ParamType, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }

    // Custom method to get the current value
    current(): _ParamType | undefined {
        if (this.index >= 0 && this.index < this.data.length) {
            return this.data[this.index] as _ParamType;
        }
        return undefined;
    }

    [Symbol.iterator](): IterableIterator<_ParamType> {
        return this;
    }

    toArray(): Array<_ParamType> {
        return this.data as Array<_ParamType>;
    }

    toJSON(): C4AI_SDK_Dictionary<any> {
        return this.data.reduce((acc, curr) => {
            acc[curr.name] = curr.value;
            return acc
        }, {});
    }
}