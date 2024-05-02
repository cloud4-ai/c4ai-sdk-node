import { config } from 'dotenv';
config();
import { EES_TESTS__COMMANDS } from './ees-commands';
import { EES_TESTS__DEFAULTS } from './ees';

describe('EES', () => {

    describe('EES: Defaults', EES_TESTS__DEFAULTS);

    describe('EES: Commands', EES_TESTS__COMMANDS);
});
