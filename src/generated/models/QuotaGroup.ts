/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotaRuleInfo } from './QuotaRuleInfo';
/**
 * QuotaGroup represents a quota group
 */
export type QuotaGroup = {
    /**
     * Name of the group
     */
    name?: string;
    /**
     * Rules associated with the group
     */
    rules?: Array<QuotaRuleInfo>;
};

