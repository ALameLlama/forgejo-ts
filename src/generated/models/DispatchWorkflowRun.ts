/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DispatchWorkflowRun represents a workflow run
 */
export type DispatchWorkflowRun = {
    /**
     * the workflow run id
     */
    id?: number;
    /**
     * the jobs name
     */
    jobs?: Array<string>;
    /**
     * a unique number for each run of a repository
     */
    run_number?: number;
};

