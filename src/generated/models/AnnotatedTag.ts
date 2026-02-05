/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotatedTagObject } from './AnnotatedTagObject';
import type { CommitUser } from './CommitUser';
import type { PayloadCommitVerification } from './PayloadCommitVerification';
import type { TagArchiveDownloadCount } from './TagArchiveDownloadCount';
/**
 * AnnotatedTag represents an annotated tag
 */
export type AnnotatedTag = {
    archive_download_count?: TagArchiveDownloadCount;
    message?: string;
    object?: AnnotatedTagObject;
    sha?: string;
    tag?: string;
    tagger?: CommitUser;
    url?: string;
    verification?: PayloadCommitVerification;
};

