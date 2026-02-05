/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ExternalTracker represents settings for external tracker
 */
export type ExternalTracker = {
    /**
     * External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.
     */
    external_tracker_format?: string;
    /**
     * External Issue Tracker issue regular expression
     */
    external_tracker_regexp_pattern?: string;
    /**
     * External Issue Tracker Number Format, either `numeric`, `alphanumeric`, or `regexp`
     */
    external_tracker_style?: string;
    /**
     * URL of external issue tracker.
     */
    external_tracker_url?: string;
};

