/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentsResponse } from './ContentsResponse';
import type { FileCommitResponse } from './FileCommitResponse';
import type { PayloadCommitVerification } from './PayloadCommitVerification';
/**
 * FilesResponse contains information about multiple files from a repo
 */
export type FilesResponse = {
    commit?: FileCommitResponse;
    files?: Array<ContentsResponse>;
    verification?: PayloadCommitVerification;
};

