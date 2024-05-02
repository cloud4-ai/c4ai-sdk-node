import { config } from 'dotenv';
config();
jest.retryTimes(0);
import { C4AI_SDK_Context } from "@c4ai-sdk/global/C4AISDKContext.class";
import { C4AI_SDK_Error } from '@c4ai-sdk/global/C4AISDKError.class';
import fs from 'fs';
import path from 'path';

describe('Authorization', () => {

    it('Should FAIL auth', async () => {

        try {
            const testContext = new C4AI_SDK_Context();

            testContext.setCredentials(
                "C4AI",
                "C4AI"
            );

            await testContext.authenticate();
        } catch (error) {
            expect(error).toBeInstanceOf(C4AI_SDK_Error);
            expect(error).not.toBeNull();
        }
    });

    it('Should auth with direct credentials', async () => {

        const testContext = new C4AI_SDK_Context();
        const C4AI_CLIENT_ID = process.env.C4AI_CLIENT_ID!;
        const C4AI_CLIENT_SECRET = process.env.C4AI_CLIENT_SECRET!;

        testContext.setCredentials(
            C4AI_CLIENT_ID,
            C4AI_CLIENT_SECRET
        )

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');
    });

    it('Should auth with FILE credentials', async () => {

        const C4AI_CLIENT_ID = process.env.C4AI_CLIENT_ID!;
        const C4AI_CLIENT_SECRET = process.env.C4AI_CLIENT_SECRET!;

        const credentials = {
            client_id: C4AI_CLIENT_ID,
            client_secret: C4AI_CLIENT_SECRET
        };

        const filePath = path.join(__dirname, '../c4ai.conf.json');

        // Write credentials to file
        fs.writeFileSync(filePath, JSON.stringify(credentials));


        const testContext = new C4AI_SDK_Context();

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');

        // Remove the file
        fs.unlinkSync(filePath);
    });


    it('Should auth with ENV credentials', async () => {

        const testContext = new C4AI_SDK_Context();

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');
    });

});