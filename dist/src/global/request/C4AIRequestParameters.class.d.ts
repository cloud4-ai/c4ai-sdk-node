import { C4AI_SDK_Dictionary } from "../../types/common.types";
import { C4AI_RequestParameter } from "./C4AIRequestParameter.class";
export declare class C4AI_RequestParameters<_ParamType extends C4AI_RequestParameter = C4AI_RequestParameter> {
    protected data: _ParamType[] | C4AI_RequestParameter[];
    protected index: number;
    constructor(
    /**
     * The list of parameters from the request
     */
    ...data: Array<_ParamType>);
    get length(): number;
    get(paramName: string): C4AI_RequestParameter | undefined;
    set(paramName: string, value: string): this;
    add(...params: _ParamType[]): this;
    next(): IteratorResult<_ParamType>;
    current(): _ParamType | undefined;
    [Symbol.iterator](): IterableIterator<_ParamType>;
    toArray(): Array<_ParamType>;
    toJSON(): C4AI_SDK_Dictionary<any>;
}
