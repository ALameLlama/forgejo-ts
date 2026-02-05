/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EditTeamOption options for editing a team
 */
export type EditTeamOption = {
    can_create_org_repo?: boolean;
    description?: string;
    includes_all_repositories?: boolean;
    name: string;
    permission?: 'read' | 'write' | 'admin';
    units?: Array<string>;
    units_map?: Record<string, string>;
};

