import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        "@c4ai-sdk/constants/(.*)": ["<rootDir>/src/constants/$1"],
        "@c4ai-sdk/services/(.*)": ["<rootDir>/src/c4ai-services/$1"],
        "@c4ai-sdk/entities/(.*)": ["<rootDir>/src/c4ai-entities/$1"],
        "@c4ai-sdk/global/(.*)": ["<rootDir>/src/global/$1"],
        "@c4ai-sdk/types/(.*)": ["<rootDir>/src/types/$1"],
        "@c4ai-sdk/helpers/(.*)": ["<rootDir>/src/helpers/$1"],
    }

};
export default config;