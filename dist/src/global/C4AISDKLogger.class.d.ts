export declare class C4AI_SDK_Logger {
    protected sic: string;
    protected verbose: boolean;
    protected ignoreErrors: boolean;
    constructor(sic: string, verbose?: boolean, ignoreErrors?: boolean);
    log(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    private logC4AIError;
    private getTime;
}
