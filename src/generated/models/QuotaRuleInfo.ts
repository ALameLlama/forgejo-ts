/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * QuotaRuleInfo contains information about a quota rule
 */
export type QuotaRuleInfo = {
    /**
     * The limit set by the rule
     */
    limit?: number;
    /**
     * Name of the rule (only shown to admins)
     */
    name?: string;
    /**
     * Subjects the rule affects
     */
    subjects?: Array<string>;
};

