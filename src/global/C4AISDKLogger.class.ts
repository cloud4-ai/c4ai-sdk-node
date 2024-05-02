import { C4AI_SDK_Error } from "./C4AISDKError.class";

export class C4AI_SDK_Logger {



    constructor(
        protected sic: string,
        protected verbose: boolean = true,
        protected ignoreErrors: boolean = false
    ) {

    }


    log(...args) {
        if (!this.verbose)
            return;

        console.log('\x1b[36m%s\x1b[0m', `[C4AI :: ${this.sic}] |${this.getTime()}| `, ...args)
    }

    warning(...args) {
        if (!this.verbose)
            return;

        console.log(`[C4AI :: ${this.sic}] |${this.getTime()}| `, ...args)
    }

    error(...args) {
        if (this.ignoreErrors)
            return;

        const firstArg = args[0];

        if (firstArg instanceof C4AI_SDK_Error)
            this.logC4AIError(firstArg)
        else
            console.log('\x1b[31m%s\x1b[0m', `[C4AI ERROR :: ${this.sic}] |${this.getTime()}| `, ...args)
    }


    private logC4AIError(error: C4AI_SDK_Error) {
        const time = this.getTime();

        console.log('\x1b[31m%s\x1b[0m', `[C4AI ERROR :: ${this.sic}] |${time}|`, error.code);
        console.log('\x1b[31m%s\x1b[0m', `[C4AI ERROR :: ${this.sic}] |${time}|`, error.name);
        console.log('\x1b[31m%s\x1b[0m', `[C4AI ERROR :: ${this.sic}] |${time}|`, error.description);
        if (error.link)
            console.log('\x1b[31m%s\x1b[0m', `[C4AI ERROR ${this.sic} :: ${time}] Read in docs: `, error.link);
    }



    private getTime() {
        const now = new Date();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(4, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    }
}