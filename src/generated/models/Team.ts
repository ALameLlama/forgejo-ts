/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from './Organization';
/**
 * Team represents a team in an organization
 */
export type Team = {
    can_create_org_repo?: boolean;
    description?: string;
    id?: number;
    includes_all_repositories?: boolean;
    name?: string;
    organization?: Organization;
    permission?: 'none' | 'read' | 'write' | 'admin' | 'owner';
    units?: Array<string>;
    units_map?: Record<string, string>;
};

