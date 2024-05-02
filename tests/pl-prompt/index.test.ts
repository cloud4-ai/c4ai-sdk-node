import { config } from 'dotenv';
config();
// import { PLPrompt_TESTS__COMMANDS } from './pl-prompt-commands.test';
import { PLPrompt_TESTS__DEFAULTS } from './pl-prompt';

describe('PLPrompt', () => {

    describe('PLPrompt: Defaults', PLPrompt_TESTS__DEFAULTS);

    // describe('PLPrompt: Commands', PLPrompt_TESTS__COMMANDS);
});
