/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateQuotaRuleOptions } from './CreateQuotaRuleOptions';
/**
 * CreateQutaGroupOptions represents the options for creating a quota group
 */
export type CreateQuotaGroupOptions = {
    /**
     * Name of the quota group to create
     */
    name?: string;
    /**
     * Rules to add to the newly created group.
     * If a rule does not exist, it will be created.
     */
    rules?: Array<CreateQuotaRuleOptions>;
};

