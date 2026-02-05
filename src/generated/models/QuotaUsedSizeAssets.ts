/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotaUsedSizeAssetsAttachments } from './QuotaUsedSizeAssetsAttachments';
import type { QuotaUsedSizeAssetsPackages } from './QuotaUsedSizeAssetsPackages';
/**
 * QuotaUsedSizeAssets represents the size-based asset usage of a user
 */
export type QuotaUsedSizeAssets = {
    /**
     * Storage size used for the user's artifacts
     */
    artifacts?: number;
    attachments?: QuotaUsedSizeAssetsAttachments;
    packages?: QuotaUsedSizeAssetsPackages;
};

