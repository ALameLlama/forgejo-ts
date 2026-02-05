/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Commit } from './Commit';
import type { CommitAffectedFiles } from './CommitAffectedFiles';
export type Compare = {
    commits?: Array<Commit>;
    files?: Array<CommitAffectedFiles>;
    total_commits?: number;
};

