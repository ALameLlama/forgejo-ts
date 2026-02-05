/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ActionRunJob represents a job of a run
 */
export type ActionRunJob = {
    /**
     * the action run job id
     */
    id?: number;
    /**
     * the action run job name
     */
    name?: string;
    /**
     * the action run job needed ids
     */
    needs?: Array<string>;
    /**
     * the owner id
     */
    owner_id?: number;
    /**
     * the repository id
     */
    repo_id?: number;
    /**
     * the action run job labels to run on
     */
    runs_on?: Array<string>;
    /**
     * the action run job status
     */
    status?: string;
    /**
     * the action run job latest task id
     */
    task_id?: number;
};

