/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Label } from './Label';
import type { Milestone } from './Milestone';
import type { PRBranchInfo } from './PRBranchInfo';
import type { StateType } from './StateType';
import type { Team } from './Team';
import type { User } from './User';
/**
 * PullRequest represents a pull request
 */
export type PullRequest = {
    additions?: number;
    allow_maintainer_edit?: boolean;
    assignee?: User;
    assignees?: Array<User>;
    base?: PRBranchInfo;
    body?: string;
    changed_files?: number;
    closed_at?: string;
    comments?: number;
    created_at?: string;
    deletions?: number;
    diff_url?: string;
    draft?: boolean;
    due_date?: string;
    flow?: number;
    head?: PRBranchInfo;
    html_url?: string;
    id?: number;
    is_locked?: boolean;
    labels?: Array<Label>;
    merge_base?: string;
    merge_commit_sha?: string;
    mergeable?: boolean;
    merged?: boolean;
    merged_at?: string;
    merged_by?: User;
    milestone?: Milestone;
    number?: number;
    patch_url?: string;
    pin_order?: number;
    requested_reviewers?: Array<User>;
    requested_reviewers_teams?: Array<Team>;
    /**
     * number of review comments made on the diff of a PR review (not including comments on commits or issues in a PR)
     */
    review_comments?: number;
    state?: StateType;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: User;
};

