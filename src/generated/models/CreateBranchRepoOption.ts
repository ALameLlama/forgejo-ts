/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * CreateBranchRepoOption options when creating a branch in a repository
 */
export type CreateBranchRepoOption = {
    /**
     * Name of the branch to create
     */
    new_branch_name: string;
    /**
     * Deprecated: true
     * Name of the old branch to create from
     */
    old_branch_name?: string;
    /**
     * Name of the old branch/tag/commit to create from
     */
    old_ref_name?: string;
};

