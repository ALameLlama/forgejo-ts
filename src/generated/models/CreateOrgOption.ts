/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CreateOrgOption options for creating an organization
 */
export type CreateOrgOption = {
    description?: string;
    email?: string;
    full_name?: string;
    location?: string;
    repo_admin_change_team_access?: boolean;
    username: string;
    /**
     * possible values are `public` (default), `limited` or `private`
     */
    visibility?: 'public' | 'limited' | 'private';
    website?: string;
};

