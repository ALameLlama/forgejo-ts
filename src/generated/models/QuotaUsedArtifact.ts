/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * QuotaUsedArtifact represents an artifact counting towards a user's quota
 */
export type QuotaUsedArtifact = {
    /**
     * HTML URL to the action run containing the artifact
     */
    html_url?: string;
    /**
     * Name of the artifact
     */
    name?: string;
    /**
     * Size of the artifact (compressed)
     */
    size?: number;
};

