import { C4AI_SDK_SICParserHelper } from "@c4ai-sdk/helpers/C4AISicParser.helper";


describe('Basics', () => {

    
    it('Should return FALSE cause SIC is invalid', async () => {
        const result = C4AI_SDK_SICParserHelper.isSic('sic@00000000:ees:0000000000');
        expect(result).not.toBeTruthy();
    });

    it('Should return TRUE cause SIC is VALID', async () => {
        const result = C4AI_SDK_SICParserHelper.isSic('sic@0000000000:ees:0000000000');
        expect(result).toBeTruthy();
    });

});