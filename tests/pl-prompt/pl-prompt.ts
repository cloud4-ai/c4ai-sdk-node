import { config } from 'dotenv';
config();
import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";
import { C4AI_SDK_Error } from "@c4ai-sdk/global/C4AISDKError.class";
import { C4AI_PLPrompt } from "@c4ai-sdk/services/pl/PLPrompt.class";

export const PLPrompt_TESTS__DEFAULTS = () => {
    it('Should validate sic', async () => {
        try {
            await new C4AI_PLPrompt('sic@000000000:pl-prompt:0000000000').load();
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
            expect((error as C4AI_SDK_Error).code).toEqual(C4AI_SDK_ERRORS.INVALID_SIC.code);
        }
    });


    it('Should FAIL load PLPrompt', async () => {
        try {
            const prompt = await new C4AI_PLPrompt('sic@0000000000:pl-prompt:0000000000').load();
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
        }
    });



    it('Should load PLPrompt', async () => {
        const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;

        const prompt = await new C4AI_PLPrompt(promptSic).load();

        expect(prompt).toBeDefined();
        expect(prompt).not.toBeNull();
    });



    it('Should load PL-Prompt and set default Values', async () => {
        const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;

        const plPrompt = await new C4AI_PLPrompt(promptSic).load();

        for (const param of plPrompt.parameters) {
            expect(param.defaultValue).toBeDefined();
            expect(param.id).toBeDefined();
            expect(param.id).not.toEqual('');
        }
    });




    it('Should set VALID parameters', async () => {
        const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;

        const prompt = await new C4AI_PLPrompt(promptSic).load();

        prompt.parameters.set('param', 'param');

        expect(prompt.parameters.get('param')?.name).toEqual('param');
        expect(prompt.parameters.get('param_1')).toBeUndefined();
        expect(prompt.parameters.toArray().length).toEqual(1);
    });




    it('Should set INVALID parameters', async () => {

        try {
            const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;

            const prompt = await new C4AI_PLPrompt(promptSic).load();

            prompt.parameters.set('param_1', 'param_1');
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
            expect((error as C4AI_SDK_Error).code).toEqual(C4AI_SDK_ERRORS.REQUEST_PARAMETERS_NOT_FOUND.code);
        }
    });



    // it('Should compile prompt', async () => {
    //     const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;

    //     const prompt = await new C4AI_PLPrompt(promptSic).load();

    //     prompt.parameters.set('param', 'param');

    //     const compiled = prompt.compile();

    //     expect(compiled).toBeDefined();
    //     expect(compiled).not.toEqual('');
    // })
};
