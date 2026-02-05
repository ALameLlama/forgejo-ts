/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotaUsedSizeAssets } from './QuotaUsedSizeAssets';
import type { QuotaUsedSizeGit } from './QuotaUsedSizeGit';
import type { QuotaUsedSizeRepos } from './QuotaUsedSizeRepos';
/**
 * QuotaUsedSize represents the size-based quota usage of a user
 */
export type QuotaUsedSize = {
    assets?: QuotaUsedSizeAssets;
    git?: QuotaUsedSizeGit;
    repos?: QuotaUsedSizeRepos;
};

