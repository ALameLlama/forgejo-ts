/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitMeta } from './CommitMeta';
import type { TagArchiveDownloadCount } from './TagArchiveDownloadCount';
/**
 * Tag represents a repository tag
 */
export type Tag = {
    archive_download_count?: TagArchiveDownloadCount;
    commit?: CommitMeta;
    id?: string;
    message?: string;
    name?: string;
    tarball_url?: string;
    zipball_url?: string;
};

