/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DispatchWorkflowOption options when dispatching a workflow
 */
export type DispatchWorkflowOption = {
    /**
     * Input keys and values configured in the workflow file.
     */
    inputs?: Record<string, string>;
    /**
     * Git reference for the workflow
     */
    ref: string;
    /**
     * Flag to return the run info
     */
    return_run_info?: boolean;
};

