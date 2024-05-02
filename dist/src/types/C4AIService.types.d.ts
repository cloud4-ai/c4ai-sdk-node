export interface C4AI_SDK_TYPES__IExecuteServiceEntity {
    /**
     * Service identity Code (SIC)
     *
     * Read more in docs: https://docs.cloud4.ai/concept/sic-service-identity-code
     */
    sic: string;
    /**
     * Advanced options for the execution of the service. Allows to define the command that should be executed.
     * To see the list of available commands, please refer to the service documentation.
     */
    command?: string;
}
export interface C4AI_SDK_TYPES__IAPIServiceEntity {
    /**
     * Service identity Code (SIC)
     *
     * Read more in docs: https://docs.cloud4.ai/concept/sic-service-identity-code
     */
    sic: string;
}
