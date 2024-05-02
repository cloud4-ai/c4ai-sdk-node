import { config } from 'dotenv';
config();
import { C4AI_AAC } from '@c4ai-sdk/services/aac/AAC.class';
import { C4AI_PLPrompt } from '@c4ai-sdk/services/pl/PLPrompt.class';
import { C4AI_RequestParameters } from '@c4ai-sdk/global/request/C4AIRequestParameters.class';
import { C4AI_RequestParameter } from '@c4ai-sdk/global/request/C4AIRequestParameter.class';
import { C4AI_EES } from '@c4ai-sdk/services/ees/EES.class';
import { C4AI_SDK_Error } from '@c4ai-sdk/global/C4AISDKError.class';
import { C4AI_SDK_ERRORS__EES } from '@c4ai-sdk/services/ees/errors';


export const EES_TESTS__COMMANDS = () => {

    it('Should do FAIL Validation', async () => {
        try {
            const aacSic = process.env.C4AI_SDK_TEST__AAC_SIC!;

            const command = new C4AI_EES.Commands.EXECUTE({
                // to simulate empty service
                service: undefined as any,
                command: new C4AI_AAC.Commands.EXECUTE({
                    service: new C4AI_AAC(aacSic),
                    parameters: new C4AI_RequestParameters(
                        new C4AI_RequestParameter('prompt', 'Say Hello!'),
                    ),
                }),
            });

        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            // expect((error as C4AI_SDK_Error).code).toEqual(C4AI_SDK_ERRORS__EES.TARGET_COMMAND_MISSING.code);
        }
    });

    it('Should COMPILE a Simple Request', async () => {
        const eesSic = process.env.C4AI_SDK_TEST__EES_SIC!;
        const aacSic = process.env.C4AI_SDK_TEST__AAC_SIC!;

        const command = new C4AI_EES.Commands.EXECUTE({
            service: new C4AI_EES(eesSic),
            command: new C4AI_AAC.Commands.EXECUTE({
                service: new C4AI_AAC(aacSic),
                parameters: new C4AI_RequestParameters(
                    new C4AI_RequestParameter('prompt', 'Say Hello!'),
                ),
            }),
        });

        const compiled = command.toJSON();

        expect(compiled).toBeDefined();
        expect(compiled.command).toBeDefined();
        expect(compiled.command.parameters).toBeDefined();
        expect(compiled.command.parameters.prompt).toBeDefined();
        expect(compiled.command.parameters.prompt).toEqual('Say Hello!');
    });


    it('Should Compile Nested Commands', async () => {
        const eesSic = process.env.C4AI_SDK_TEST__EES_SIC!;
        const promptSic = process.env.C4AI_SDK_TEST__PL_PROMPT_SIC!;
        const aacSic = process.env.C4AI_SDK_TEST__AAC_SIC!;


        const command = new C4AI_EES.Commands.EXECUTE({
            service: new C4AI_EES(eesSic),
            command: new C4AI_AAC.Commands.EXECUTE({
                service: new C4AI_AAC(aacSic),
                parameters: new C4AI_RequestParameters(

                    new C4AI_RequestParameter('foo', 'bar'),
                    new C4AI_RequestParameter('foo2', 'bar2'),

                    new C4AI_RequestParameter(
                        'prompt',
                        new C4AI_PLPrompt.Commands.COMPILE({
                            service: new C4AI_PLPrompt(promptSic),
                            parameters: new C4AI_RequestParameters(
                                new C4AI_RequestParameter('foo', 'bar'),
                                new C4AI_RequestParameter('foo2', 'bar2'),
                            )
                        })),
                ),
            }),
        });

        const compiled = command.toJSON();

        expect(compiled).toBeDefined();
        expect(compiled.command).toBeDefined();
        expect(compiled.command.parameters).toBeDefined();
        expect(compiled.command.parameters.prompt).toBeUndefined();
        expect(compiled.command.parameters.foo).toBeDefined();
        expect(compiled.command.parameters.foo).toEqual('bar');
        expect(compiled.command.parameters.foo2).toBeDefined();
        expect(compiled.command.parameters.foo2).toEqual('bar2');
        expect(compiled.command._bindings).toBeDefined();
        expect(compiled.command._bindings.prompt).toBeDefined();
        expect(compiled.command._bindings.prompt.parameters).toBeDefined();
        expect(compiled.command._bindings.prompt.parameters.foo).toBeDefined();
        expect(compiled.command._bindings.prompt.parameters.foo).toEqual('bar');
        expect(compiled.command._bindings.prompt.parameters.foo2).toBeDefined();
        expect(compiled.command._bindings.prompt.parameters.foo2).toEqual('bar2');
    });
} 