/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CreateQuotaRuleOptions represents the options for creating a quota rule
 */
export type CreateQuotaRuleOptions = {
    /**
     * The limit set by the rule
     */
    limit?: number;
    /**
     * Name of the rule to create
     */
    name?: string;
    /**
     * The subjects affected by the rule
     */
    subjects?: Array<string>;
};

