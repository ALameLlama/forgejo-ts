/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * QuotaUsedAttachment represents an attachment counting towards a user's quota
 */
export type QuotaUsedAttachment = {
    /**
     * API URL for the attachment
     */
    api_url?: string;
    /**
     * Context for the attachment: URLs to the containing object
     */
    contained_in?: {
        /**
         * API URL for the object that contains this attachment
         */
        api_url?: string;
        /**
         * HTML URL for the object that contains this attachment
         */
        html_url?: string;
    };
    /**
     * Filename of the attachment
     */
    name?: string;
    /**
     * Size of the attachment (in bytes)
     */
    size?: number;
};

