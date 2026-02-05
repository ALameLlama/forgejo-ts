/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * MergePullRequestForm form for merging Pull Request
 */
export type MergePullRequestOption = {
    Do: 'merge' | 'rebase' | 'rebase-merge' | 'squash' | 'fast-forward-only' | 'manually-merged';
    MergeCommitID?: string;
    MergeMessageField?: string;
    MergeTitleField?: string;
    delete_branch_after_merge?: boolean;
    force_merge?: boolean;
    head_commit_id?: string;
    merge_when_checks_succeed?: boolean;
};

