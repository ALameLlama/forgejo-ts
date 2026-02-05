/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Duration } from './Duration';
import type { Repository } from './Repository';
import type { User } from './User';
/**
 * ActionRun represents an action run
 */
export type ActionRun = {
    /**
     * the cron id for the schedule trigger
     */
    ScheduleID?: number;
    /**
     * who approved this action run
     */
    approved_by?: number;
    /**
     * the commit sha the action run ran on
     */
    commit_sha?: string;
    /**
     * when the action run was created
     */
    created?: string;
    duration?: Duration;
    /**
     * the webhook event that causes the workflow to run
     */
    event?: string;
    /**
     * the payload of the webhook event that causes the workflow to run
     */
    event_payload?: string;
    /**
     * the url of this action run
     */
    html_url?: string;
    /**
     * the action run id
     */
    id?: number;
    /**
     * a unique number for each run of a repository
     */
    index_in_repo?: number;
    /**
     * If this is triggered by a PR from a forked repository or an untrusted user, we need to check if it is approved and limit permissions when running the workflow.
     */
    is_fork_pull_request?: boolean;
    /**
     * has the commit/tag/… the action run ran on been deleted
     */
    is_ref_deleted?: boolean;
    /**
     * may need approval if it's a fork pull request
     */
    need_approval?: boolean;
    /**
     * the commit/tag/… the action run ran on
     */
    prettyref?: string;
    repository?: Repository;
    /**
     * when the action run was started
     */
    started?: string;
    /**
     * the current status of this run
     */
    status?: string;
    /**
     * when the action run was stopped
     */
    stopped?: string;
    /**
     * the action run's title
     */
    title?: string;
    /**
     * the trigger event defined in the `on` configuration of the triggered workflow
     */
    trigger_event?: string;
    trigger_user?: User;
    /**
     * when the action run was last updated
     */
    updated?: string;
    /**
     * the name of workflow file
     */
    workflow_id?: string;
};

