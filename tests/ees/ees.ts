import { config } from 'dotenv';
config();
import { C4AI_SDK_ERRORS } from "@c4ai-sdk/constants/errors.constants";
import { C4AI_SDK_Error } from "@c4ai-sdk/global/C4AISDKError.class";
import { C4AI_EES } from "@c4ai-sdk/services/ees/EES.class";

export const EES_TESTS__DEFAULTS = () => {
    it('Should validate sic', async () => {
        try {
            await new C4AI_EES('sic@000000000:ees:0000000000').load();
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
            expect((error as C4AI_SDK_Error).code).toEqual(C4AI_SDK_ERRORS.INVALID_SIC.code);
        }
    });


    it('Should FAIL load EES', async () => {
        try {
            const ees = await new C4AI_EES('sic@0000000000:ees:0000000000').load();
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
        }
    });



    it('Should load EES', async () => {
        const eesSic = process.env.C4AI_SDK_TEST__EES_SIC!;

        const ees = await new C4AI_EES(eesSic).load();

        expect(ees).toBeDefined();
        expect(ees).not.toBeNull();
    });
};
