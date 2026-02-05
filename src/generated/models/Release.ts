/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
import type { TagArchiveDownloadCount } from './TagArchiveDownloadCount';
import type { User } from './User';
/**
 * Release represents a repository release
 */
export type Release = {
    archive_download_count?: TagArchiveDownloadCount;
    assets?: Array<Attachment>;
    author?: User;
    body?: string;
    created_at?: string;
    draft?: boolean;
    hide_archive_links?: boolean;
    html_url?: string;
    id?: number;
    name?: string;
    prerelease?: boolean;
    published_at?: string;
    tag_name?: string;
    tarball_url?: string;
    target_commitish?: string;
    upload_url?: string;
    url?: string;
    zipball_url?: string;
};

