/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionRunJob } from '../models/ActionRunJob';
import type { ActionTaskResponse } from '../models/ActionTaskResponse';
import type { ActionVariable } from '../models/ActionVariable';
import type { Activity } from '../models/Activity';
import type { AddCollaboratorOption } from '../models/AddCollaboratorOption';
import type { AnnotatedTag } from '../models/AnnotatedTag';
import type { Attachment } from '../models/Attachment';
import type { Branch } from '../models/Branch';
import type { BranchProtection } from '../models/BranchProtection';
import type { ChangedFile } from '../models/ChangedFile';
import type { ChangeFilesOptions } from '../models/ChangeFilesOptions';
import type { CombinedStatus } from '../models/CombinedStatus';
import type { Commit } from '../models/Commit';
import type { CommitStatus } from '../models/CommitStatus';
import type { Compare } from '../models/Compare';
import type { ContentsResponse } from '../models/ContentsResponse';
import type { CreateBranchProtectionOption } from '../models/CreateBranchProtectionOption';
import type { CreateBranchRepoOption } from '../models/CreateBranchRepoOption';
import type { CreateFileOptions } from '../models/CreateFileOptions';
import type { CreateForkOption } from '../models/CreateForkOption';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOrUpdateSecretOption } from '../models/CreateOrUpdateSecretOption';
import type { CreatePullRequestOption } from '../models/CreatePullRequestOption';
import type { CreatePullReviewComment } from '../models/CreatePullReviewComment';
import type { CreatePullReviewOptions } from '../models/CreatePullReviewOptions';
import type { CreatePushMirrorOption } from '../models/CreatePushMirrorOption';
import type { CreateReleaseOption } from '../models/CreateReleaseOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateStatusOption } from '../models/CreateStatusOption';
import type { CreateTagOption } from '../models/CreateTagOption';
import type { CreateTagProtectionOption } from '../models/CreateTagProtectionOption';
import type { CreateVariableOption } from '../models/CreateVariableOption';
import type { CreateWikiPageOptions } from '../models/CreateWikiPageOptions';
import type { DeleteFileOptions } from '../models/DeleteFileOptions';
import type { DeployKey } from '../models/DeployKey';
import type { DismissPullReviewOptions } from '../models/DismissPullReviewOptions';
import type { DispatchWorkflowOption } from '../models/DispatchWorkflowOption';
import type { DispatchWorkflowRun } from '../models/DispatchWorkflowRun';
import type { EditAttachmentOptions } from '../models/EditAttachmentOptions';
import type { EditBranchProtectionOption } from '../models/EditBranchProtectionOption';
import type { EditGitHookOption } from '../models/EditGitHookOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditPullRequestOption } from '../models/EditPullRequestOption';
import type { EditReleaseOption } from '../models/EditReleaseOption';
import type { EditRepoOption } from '../models/EditRepoOption';
import type { EditTagProtectionOption } from '../models/EditTagProtectionOption';
import type { FileDeleteResponse } from '../models/FileDeleteResponse';
import type { FileResponse } from '../models/FileResponse';
import type { FilesResponse } from '../models/FilesResponse';
import type { GenerateRepoOption } from '../models/GenerateRepoOption';
import type { GitBlobResponse } from '../models/GitBlobResponse';
import type { GitHook } from '../models/GitHook';
import type { GitTreeResponse } from '../models/GitTreeResponse';
import type { Hook } from '../models/Hook';
import type { Issue } from '../models/Issue';
import type { IssueConfig } from '../models/IssueConfig';
import type { IssueConfigValidation } from '../models/IssueConfigValidation';
import type { IssueTemplate } from '../models/IssueTemplate';
import type { MergePullRequestOption } from '../models/MergePullRequestOption';
import type { MigrateRepoOptions } from '../models/MigrateRepoOptions';
import type { NewIssuePinsAllowed } from '../models/NewIssuePinsAllowed';
import type { Note } from '../models/Note';
import type { NoteOptions } from '../models/NoteOptions';
import type { PullRequest } from '../models/PullRequest';
import type { PullReview } from '../models/PullReview';
import type { PullReviewComment } from '../models/PullReviewComment';
import type { PullReviewRequestOptions } from '../models/PullReviewRequestOptions';
import type { PushMirror } from '../models/PushMirror';
import type { Reference } from '../models/Reference';
import type { Release } from '../models/Release';
import type { ReplaceFlagsOption } from '../models/ReplaceFlagsOption';
import type { RepoCollaboratorPermission } from '../models/RepoCollaboratorPermission';
import type { Repository } from '../models/Repository';
import type { RepoTopicOptions } from '../models/RepoTopicOptions';
import type { SearchResults } from '../models/SearchResults';
import type { Secret } from '../models/Secret';
import type { SubmitPullReviewOptions } from '../models/SubmitPullReviewOptions';
import type { Tag } from '../models/Tag';
import type { TagProtection } from '../models/TagProtection';
import type { Team } from '../models/Team';
import type { TopicName } from '../models/TopicName';
import type { TopicResponse } from '../models/TopicResponse';
import type { TrackedTime } from '../models/TrackedTime';
import type { TransferRepoOption } from '../models/TransferRepoOption';
import type { UpdateBranchRepoOption } from '../models/UpdateBranchRepoOption';
import type { UpdateFileOptions } from '../models/UpdateFileOptions';
import type { UpdateRepoAvatarOption } from '../models/UpdateRepoAvatarOption';
import type { UpdateVariableOption } from '../models/UpdateVariableOption';
import type { User } from '../models/User';
import type { WatchInfo } from '../models/WatchInfo';
import type { WikiCommitList } from '../models/WikiCommitList';
import type { WikiPage } from '../models/WikiPage';
import type { WikiPageMetaData } from '../models/WikiPageMetaData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RepositoryService {
    /**
     * Migrate a remote git repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public static repoMigrate({
        body,
    }: {
        body?: MigrateRepoOptions,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/migrate',
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                409: `The repository with the same name already exists.`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search for repositories
     * @returns SearchResults SearchResults
     * @throws ApiError
     */
    public static repoSearch({
        q,
        topic,
        includeDesc,
        uid,
        priorityOwnerId,
        teamId,
        starredBy,
        _private,
        isPrivate,
        template,
        archived,
        mode,
        exclusive,
        sort,
        order,
        page,
        limit,
    }: {
        /**
         * keyword
         */
        q?: string,
        /**
         * Limit search to repositories with keyword as topic
         */
        topic?: boolean,
        /**
         * include search of keyword within repository description
         */
        includeDesc?: boolean,
        /**
         * search only for repos that the user with the given id owns or contributes to
         */
        uid?: number,
        /**
         * repo owner to prioritize in the results
         */
        priorityOwnerId?: number,
        /**
         * search only for repos that belong to the given team id
         */
        teamId?: number,
        /**
         * search only for repos that the user with the given id has starred
         */
        starredBy?: number,
        /**
         * include private repositories this user has access to (defaults to true)
         */
        _private?: boolean,
        /**
         * show only public, private or all repositories (defaults to all)
         */
        isPrivate?: boolean,
        /**
         * include template repositories this user has access to (defaults to true)
         */
        template?: boolean,
        /**
         * show only archived, non-archived or all repositories (defaults to all)
         */
        archived?: boolean,
        /**
         * type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative"
         */
        mode?: string,
        /**
         * if `uid` is given, search only for repos that the user owns
         */
        exclusive?: boolean,
        /**
         * sort repos by attribute. Supported values are "alpha", "created", "updated", "size", "git_size", "lfs_size", "stars", "forks" and "id". Default is "alpha"
         */
        sort?: string,
        /**
         * sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.
         */
        order?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<SearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/search',
            query: {
                'q': q,
                'topic': topic,
                'includeDesc': includeDesc,
                'uid': uid,
                'priority_owner_id': priorityOwnerId,
                'team_id': teamId,
                'starredBy': starredBy,
                'private': _private,
                'is_private': isPrivate,
                'template': template,
                'archived': archived,
                'mode': mode,
                'exclusive': exclusive,
                'sort': sort,
                'order': order,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public static repoGet({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDelete({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to delete
         */
        owner: string,
        /**
         * name of the repo to delete
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a repository's properties. Only fields that are set will be changed.
     * @returns Repository Repository
     * @throws ApiError
     */
    public static repoEdit({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to edit
         */
        owner: string,
        /**
         * name of the repo to edit
         */
        repo: string,
        /**
         * Properties of a repo that you can edit
         */
        body?: EditRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search for repository's action jobs according filter conditions
     * @returns ActionRunJob RunJobList is a list of action run jobs
     * @throws ApiError
     */
    public static repoSearchRunJobs({
        owner,
        repo,
        labels,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * a comma separated list of run job labels to search for
         */
        labels?: string,
    }): CancelablePromise<Array<ActionRunJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners/jobs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'labels': labels,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get a repository's actions runner registration token
     * @returns string RegistrationToken is a string used to register a runner with a server
     * @throws ApiError
     */
    public static repoGetRunnerRegistrationToken({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/runners/registration-token',
            path: {
                'owner': owner,
                'repo': repo,
            },
            responseHeader: 'token',
        });
    }
    /**
     * List an repo's actions secrets
     * @returns Secret SecretList
     * @throws ApiError
     */
    public static repoListActionsSecrets({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repository
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Secret>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/secrets',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create or Update a secret value in a repository
     * @returns any response when creating a secret
     * @throws ApiError
     */
    public static updateRepoSecret({
        owner,
        repo,
        secretname,
        body,
    }: {
        /**
         * owner of the repository
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the secret
         */
        secretname: string,
        body?: CreateOrUpdateSecretOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/secrets/{secretname}',
            path: {
                'owner': owner,
                'repo': repo,
                'secretname': secretname,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a secret in a repository
     * @returns void
     * @throws ApiError
     */
    public static deleteRepoSecret({
        owner,
        repo,
        secretname,
    }: {
        /**
         * owner of the repository
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the secret
         */
        secretname: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/secrets/{secretname}',
            path: {
                'owner': owner,
                'repo': repo,
                'secretname': secretname,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repository's action tasks
     * @returns ActionTaskResponse TasksList
     * @throws ApiError
     */
    public static listActionTasks({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results, default maximum page size is 50
         */
        limit?: number,
    }): CancelablePromise<ActionTaskResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/tasks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIConflict is a conflict empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get repo-level variables list
     * @returns ActionVariable VariableList
     * @throws ApiError
     */
    public static getRepoVariablesList({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * name of the owner
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<ActionVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/variables',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a repo-level variable
     * @returns ActionVariable ActionVariable
     * @throws ApiError
     */
    public static getRepoVariable({
        owner,
        repo,
        variablename,
    }: {
        /**
         * name of the owner
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/actions/variables/{variablename}',
            path: {
                'owner': owner,
                'repo': repo,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a repo-level variable
     * @returns any response when updating a repo-level variable
     * @throws ApiError
     */
    public static updateRepoVariable({
        owner,
        repo,
        variablename,
        body,
    }: {
        /**
         * name of the owner
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: UpdateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/actions/variables/{variablename}',
            path: {
                'owner': owner,
                'repo': repo,
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a repo-level variable
     * @returns any response when creating a repo-level variable
     * @throws ApiError
     */
    public static createRepoVariable({
        owner,
        repo,
        variablename,
        body,
    }: {
        /**
         * name of the owner
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: CreateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/variables/{variablename}',
            path: {
                'owner': owner,
                'repo': repo,
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a repo-level variable
     * @returns ActionVariable ActionVariable
     * @returns any response when deleting a variable
     * @throws ApiError
     */
    public static deleteRepoVariable({
        owner,
        repo,
        variablename,
    }: {
        /**
         * name of the owner
         */
        owner: string,
        /**
         * name of the repository
         */
        repo: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/actions/variables/{variablename}',
            path: {
                'owner': owner,
                'repo': repo,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Dispatches a workflow
     * @returns DispatchWorkflowRun DispatchWorkflowRun is a Workflow Run after dispatching
     * @throws ApiError
     */
    public static dispatchWorkflow({
        owner,
        repo,
        workflowname,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the workflow
         */
        workflowname: string,
        body?: DispatchWorkflowOption,
    }): CancelablePromise<DispatchWorkflowRun> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/actions/workflows/{workflowname}/dispatches',
            path: {
                'owner': owner,
                'repo': repo,
                'workflowname': workflowname,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repository's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public static repoListActivityFeeds({
        owner,
        repo,
        date,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * the date of the activities to be found
         */
        date?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/activities/feeds',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'date': date,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get an archive of a repository
     * @returns any success
     * @throws ApiError
     */
    public static repoGetArchive({
        owner,
        repo,
        archive,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * the git reference for download with attached archive format (e.g. master.zip)
         */
        archive: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/archive/{archive}',
            path: {
                'owner': owner,
                'repo': repo,
                'archive': archive,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Return all users that have write access and can be assigned to issues
     * @returns User UserList
     * @throws ApiError
     */
    public static repoGetAssignees({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/assignees',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update avatar
     * @returns void
     * @throws ApiError
     */
    public static repoUpdateAvatar({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: UpdateRepoAvatarOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/avatar',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete avatar
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteAvatar({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/avatar',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List branch protections for a repository
     * @returns BranchProtection BranchProtectionList
     * @throws ApiError
     */
    public static repoListBranchProtection({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<BranchProtection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branch_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Create a branch protections for a repository
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public static repoCreateBranchProtection({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateBranchProtectionOption,
    }): CancelablePromise<BranchProtection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branch_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get a specific branch protection for the repository
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public static repoGetBranchProtection({
        owner,
        repo,
        name,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of protected branch
         */
        name: string,
    }): CancelablePromise<BranchProtection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a specific branch protection for the repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteBranchProtection({
        owner,
        repo,
        name,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of protected branch
         */
        name: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a branch protections for a repository. Only fields that are set will be changed
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public static repoEditBranchProtection({
        owner,
        repo,
        name,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of protected branch
         */
        name: string,
        body?: EditBranchProtectionOption,
    }): CancelablePromise<BranchProtection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * List a repository's branches
     * @returns Branch BranchList
     * @throws ApiError
     */
    public static repoListBranches({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Branch>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create a branch
     * @returns Branch Branch
     * @throws ApiError
     */
    public static repoCreateBranch({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateBranchRepoOption,
    }): CancelablePromise<Branch> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `The branch is archived or a mirror.`,
                404: `The old branch does not exist.`,
                409: `The branch with the same name already exists.`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Retrieve a specific branch from a repository, including its effective branch protection
     * @returns Branch Branch
     * @throws ApiError
     */
    public static repoGetBranch({
        owner,
        repo,
        branch,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * branch to get
         */
        branch: string,
    }): CancelablePromise<Branch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a specific branch from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteBranch({
        owner,
        repo,
        branch,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * branch to delete
         */
        branch: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Update a branch
     * @returns void
     * @throws ApiError
     */
    public static repoUpdateBranch({
        owner,
        repo,
        branch,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the branch
         */
        branch: string,
        body?: UpdateBranchRepoOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List a repository's collaborators
     * @returns User UserList
     * @throws ApiError
     */
    public static repoListCollaborators({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Check if a user is a collaborator of a repository
     * If the user is a collaborator, return 204. If the user is not a collaborator, return 404.
     * @returns void
     * @throws ApiError
     */
    public static repoCheckCollaborator({
        owner,
        repo,
        collaborator,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * username of the collaborator
         */
        collaborator: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Add a collaborator to a repository
     * @returns void
     * @throws ApiError
     */
    public static repoAddCollaborator({
        owner,
        repo,
        collaborator,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * username of the collaborator to add
         */
        collaborator: string,
        body?: AddCollaboratorOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete a collaborator from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteCollaborator({
        owner,
        repo,
        collaborator,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * username of the collaborator to delete
         */
        collaborator: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get repository permissions for a user
     * @returns RepoCollaboratorPermission RepoCollaboratorPermission
     * @throws ApiError
     */
    public static repoGetRepoPermissions({
        owner,
        repo,
        collaborator,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * username of the collaborator
         */
        collaborator: string,
    }): CancelablePromise<RepoCollaboratorPermission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}/permission',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a list of all commits from a repository
     * @returns Commit CommitList
     * @throws ApiError
     */
    public static repoGetAllCommits({
        owner,
        repo,
        sha,
        path,
        stat,
        verification,
        files,
        page,
        limit,
        not,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * SHA or branch to start listing commits from (usually 'master')
         */
        sha?: string,
        /**
         * filepath of a file/dir
         */
        path?: string,
        /**
         * include diff stats for every commit (disable for speedup, default 'true')
         */
        stat?: boolean,
        /**
         * include verification for every commit (disable for speedup, default 'true')
         */
        verification?: boolean,
        /**
         * include a list of affected files for every commit (disable for speedup, default 'true')
         */
        files?: boolean,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results (ignored if used with 'path')
         */
        limit?: number,
        /**
         * commits that match the given specifier will not be listed.
         */
        not?: string,
    }): CancelablePromise<Array<Commit>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sha': sha,
                'path': path,
                'stat': stat,
                'verification': verification,
                'files': files,
                'page': page,
                'limit': limit,
                'not': not,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                409: `EmptyRepository`,
            },
        });
    }
    /**
     * Get a commit's combined status, by branch/tag/commit reference
     * @returns CombinedStatus CombinedStatus
     * @throws ApiError
     */
    public static repoGetCombinedStatusByRef({
        owner,
        repo,
        ref,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of branch/tag/commit
         */
        ref: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<CombinedStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/status',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a commit's statuses, by branch/tag/commit reference
     * @returns CommitStatus CommitStatusList
     * @throws ApiError
     */
    public static repoListStatusesByRef({
        owner,
        repo,
        ref,
        sort,
        state,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of branch/tag/commit
         */
        ref: string,
        /**
         * type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'leastindex' | 'highestindex',
        /**
         * type of state
         */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning',
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<CommitStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/statuses',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'sort': sort,
                'state': state,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get the pull request of the commit
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public static repoGetCommitPullRequest({
        owner,
        repo,
        sha,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * SHA of the commit to get
         */
        sha: string,
    }): CancelablePromise<PullRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{sha}/pull',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get commit comparison information
     * @returns Compare
     * @throws ApiError
     */
    public static repoCompareDiff({
        owner,
        repo,
        basehead,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * compare two branches or commits
         */
        basehead: string,
    }): CancelablePromise<Compare> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/compare/{basehead}',
            path: {
                'owner': owner,
                'repo': repo,
                'basehead': basehead,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Gets the metadata of all the entries of the root dir
     * @returns ContentsResponse ContentsListResponse
     * @throws ApiError
     */
    public static repoGetContentsList({
        owner,
        repo,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<Array<ContentsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/contents',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Modify multiple files in a repository
     * @returns FilesResponse FilesResponse
     * @throws ApiError
     */
    public static repoChangeFiles({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body: ChangeFilesOptions,
    }): CancelablePromise<FilesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/contents',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                422: `APIError is error format response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
     * @returns ContentsResponse ContentsResponse
     * @throws ApiError
     */
    public static repoGetContents({
        owner,
        repo,
        filepath,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * path of the dir, file, symlink or submodule in the repo
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<ContentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a file in a repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public static repoUpdateFile({
        owner,
        repo,
        filepath,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * path of the file to update
         */
        filepath: string,
        body: UpdateFileOptions,
    }): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                422: `APIError is error format response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Create a file in a repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public static repoCreateFile({
        owner,
        repo,
        filepath,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * path of the file to create
         */
        filepath: string,
        body: CreateFileOptions,
    }): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                422: `APIError is error format response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Delete a file in a repository
     * @returns FileDeleteResponse FileDeleteResponse
     * @throws ApiError
     */
    public static repoDeleteFile({
        owner,
        repo,
        filepath,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * path of the file to delete
         */
        filepath: string,
        body: DeleteFileOptions,
    }): CancelablePromise<FileDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIError is error format response`,
                404: `APIError is error format response`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Apply diff patch to repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public static repoApplyDiffPatch({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body: UpdateFileOptions,
    }): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/diffpatch',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get the EditorConfig definitions of a file in a repository
     * @returns any success
     * @throws ApiError
     */
    public static repoGetEditorConfig({
        owner,
        repo,
        filepath,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * filepath of file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/editorconfig/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repository's flags
     * @returns string StringSlice
     * @throws ApiError
     */
    public static repoListFlags({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/flags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Replace all flags of a repository
     * @returns void
     * @throws ApiError
     */
    public static repoReplaceAllFlags({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: ReplaceFlagsOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/flags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Remove all flags from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteAllFlags({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/flags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Check if a repository has a given flag
     * @returns void
     * @throws ApiError
     */
    public static repoCheckFlag({
        owner,
        repo,
        flag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the flag
         */
        flag: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/flags/{flag}',
            path: {
                'owner': owner,
                'repo': repo,
                'flag': flag,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a flag to a repository
     * @returns void
     * @throws ApiError
     */
    public static repoAddFlag({
        owner,
        repo,
        flag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the flag
         */
        flag: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/flags/{flag}',
            path: {
                'owner': owner,
                'repo': repo,
                'flag': flag,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Remove a flag from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteFlag({
        owner,
        repo,
        flag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the flag
         */
        flag: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/flags/{flag}',
            path: {
                'owner': owner,
                'repo': repo,
                'flag': flag,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repository's forks
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static listForks({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Fork a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public static createFork({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to fork
         */
        owner: string,
        /**
         * name of the repo to fork
         */
        repo: string,
        body?: CreateForkOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `The repository with the same name already exists.`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Gets the blob of a repository.
     * @returns GitBlobResponse GitBlobResponse
     * @throws ApiError
     */
    public static getBlob({
        owner,
        repo,
        sha,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * sha of the commit
         */
        sha: string,
    }): CancelablePromise<GitBlobResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/blobs/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a single commit from a repository
     * @returns Commit Commit
     * @throws ApiError
     */
    public static repoGetSingleCommit({
        owner,
        repo,
        sha,
        stat,
        verification,
        files,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * a git ref or commit sha
         */
        sha: string,
        /**
         * include diff stats for every commit (disable for speedup, default 'true')
         */
        stat?: boolean,
        /**
         * include verification for every commit (disable for speedup, default 'true')
         */
        verification?: boolean,
        /**
         * include a list of affected files for every commit (disable for speedup, default 'true')
         */
        files?: boolean,
    }): CancelablePromise<Commit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/commits/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'stat': stat,
                'verification': verification,
                'files': files,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a commit's diff or patch
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public static repoDownloadCommitDiffOrPatch({
        owner,
        repo,
        sha,
        diffType,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * SHA of the commit to get
         */
        sha: string,
        /**
         * whether the output is diff or patch
         */
        diffType: 'diff' | 'patch',
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/commits/{sha}.{diffType}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
                'diffType': diffType,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a note corresponding to a single commit from a repository
     * @returns Note Note
     * @throws ApiError
     */
    public static repoGetNote({
        owner,
        repo,
        sha,
        verification,
        files,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * a git ref or commit sha
         */
        sha: string,
        /**
         * include verification for every commit (disable for speedup, default 'true')
         */
        verification?: boolean,
        /**
         * include a list of affected files for every commit (disable for speedup, default 'true')
         */
        files?: boolean,
    }): CancelablePromise<Note> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/notes/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'verification': verification,
                'files': files,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Set a note corresponding to a single commit from a repository
     * @returns Note Note
     * @throws ApiError
     */
    public static repoSetNote({
        owner,
        repo,
        sha,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * a git ref or commit sha
         */
        sha: string,
        body?: NoteOptions,
    }): CancelablePromise<Note> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/git/notes/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Removes a note corresponding to a single commit from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoRemoveNote({
        owner,
        repo,
        sha,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * a git ref or commit sha
         */
        sha: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/git/notes/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get specified ref or filtered repository's refs
     * @returns Reference ReferenceList
     * @throws ApiError
     */
    public static repoListAllGitRefs({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<Reference>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/refs',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get specified ref or filtered repository's refs
     * @returns Reference ReferenceList
     * @throws ApiError
     */
    public static repoListGitRefs({
        owner,
        repo,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * part or full name of the ref
         */
        ref: string,
    }): CancelablePromise<Array<Reference>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/refs/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Gets the tag object of an annotated tag (not lightweight tags)
     * @returns AnnotatedTag AnnotatedTag
     * @throws ApiError
     */
    public static getAnnotatedTag({
        owner,
        repo,
        sha,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.
         */
        sha: string,
    }): CancelablePromise<AnnotatedTag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/tags/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Gets the tree of a repository.
     * @returns GitTreeResponse GitTreeResponse
     * @throws ApiError
     */
    public static getTree({
        owner,
        repo,
        sha,
        recursive,
        page,
        perPage,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * sha of the commit
         */
        sha: string,
        /**
         * show all directories and files
         */
        recursive?: boolean,
        /**
         * page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page
         */
        page?: number,
        /**
         * number of items per page
         */
        perPage?: number,
    }): CancelablePromise<GitTreeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/trees/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'recursive': recursive,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the hooks in a repository
     * @returns Hook HookList
     * @throws ApiError
     */
    public static repoListHooks({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Hook>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static repoCreateHook({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the Git hooks in a repository
     * @returns GitHook GitHookList
     * @throws ApiError
     */
    public static repoListGitHooks({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<GitHook>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/git',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a Git hook
     * @returns GitHook GitHook
     * @throws ApiError
     */
    public static repoGetGitHook({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to get
         */
        id: string,
    }): CancelablePromise<GitHook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a Git hook in a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteGitHook({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to get
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a Git hook in a repository
     * @returns GitHook GitHook
     * @throws ApiError
     */
    public static repoEditGitHook({
        owner,
        repo,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to get
         */
        id: string,
        body?: EditGitHookOption,
    }): CancelablePromise<GitHook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static repoGetHook({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a hook in a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteHook({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a hook in a repository
     * @returns Hook Hook
     * @throws ApiError
     */
    public static repoEditHook({
        owner,
        repo,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the hook
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Test a push webhook
     * @returns void
     * @throws ApiError
     */
    public static repoTestHook({
        owner,
        repo,
        id,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the hook to test
         */
        id: number,
        /**
         * The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload.
         */
        ref?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks/{id}/tests',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Returns the issue config for a repo
     * @returns IssueConfig RepoIssueConfig
     * @throws ApiError
     */
    public static repoGetIssueConfig({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<IssueConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issue_config',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Returns the validation information for a issue config
     * @returns IssueConfigValidation RepoIssueConfigValidation
     * @throws ApiError
     */
    public static repoValidateIssueConfig({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<IssueConfigValidation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issue_config/validate',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get available issue templates for a repository
     * @returns IssueTemplate IssueTemplates
     * @throws ApiError
     */
    public static repoGetIssueTemplates({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<IssueTemplate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issue_templates',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repo's pinned issues
     * @returns Issue IssueList
     * @throws ApiError
     */
    public static repoListPinnedIssues({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<Issue>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/pinned',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repository's keys
     * @returns DeployKey DeployKeyList
     * @throws ApiError
     */
    public static repoListKeys({
        owner,
        repo,
        keyId,
        fingerprint,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * the key_id to search for
         */
        keyId?: number,
        /**
         * fingerprint of the key
         */
        fingerprint?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<DeployKey>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'key_id': keyId,
                'fingerprint': fingerprint,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a key to a repository
     * @returns DeployKey DeployKey
     * @throws ApiError
     */
    public static repoCreateKey({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateKeyOption,
    }): CancelablePromise<DeployKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/keys',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a repository's key by id
     * @returns DeployKey DeployKey
     * @throws ApiError
     */
    public static repoGetKey({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the key to get
         */
        id: number,
    }): CancelablePromise<DeployKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a key from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteKey({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/keys/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get languages and number of bytes of code written
     * @returns number LanguageStatistics
     * @throws ApiError
     */
    public static repoGetLanguages({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Record<string, number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/languages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a file or it's LFS object from a repository
     * @returns binary Returns raw file content.
     * @throws ApiError
     */
    public static repoGetRawFileOrLfs({
        owner,
        repo,
        filepath,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * filepath of the file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/media/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Sync a mirrored repository
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static repoMirrorSync({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to sync
         */
        owner: string,
        /**
         * name of the repo to sync
         */
        repo: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/mirror-sync',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Returns if new Issue Pins are allowed
     * @returns NewIssuePinsAllowed RepoNewIssuePinsAllowed
     * @throws ApiError
     */
    public static repoNewPinAllowed({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<NewIssuePinsAllowed> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/new_pin_allowed',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repo's pull requests
     * @returns PullRequest PullRequestList
     * @throws ApiError
     */
    public static repoListPullRequests({
        owner,
        repo,
        state = 'open',
        sort,
        milestone,
        labels,
        poster,
        page = 1,
        limit,
    }: {
        /**
         * Owner of the repo
         */
        owner: string,
        /**
         * Name of the repo
         */
        repo: string,
        /**
         * State of pull request
         */
        state?: 'open' | 'closed' | 'all',
        /**
         * Type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'mostcomment' | 'leastcomment' | 'priority',
        /**
         * ID of the milestone
         */
        milestone?: number,
        /**
         * Label IDs
         */
        labels?: Array<number>,
        /**
         * Filter by pull request author
         */
        poster?: string,
        /**
         * Page number of results to return (1-based)
         */
        page?: number,
        /**
         * Page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PullRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'sort': sort,
                'milestone': milestone,
                'labels': labels,
                'poster': poster,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                500: `APIError is error format response`,
            },
        });
    }
    /**
     * Create a pull request
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public static repoCreatePullRequest({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreatePullRequestOption,
    }): CancelablePromise<PullRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * List a repo's pinned pull requests
     * @returns PullRequest PullRequestList
     * @throws ApiError
     */
    public static repoListPinnedPullRequests({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<PullRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/pinned',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a pull request by base and head
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public static repoGetPullRequestByBaseHead({
        owner,
        repo,
        base,
        head,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * base of the pull request to get
         */
        base: string,
        /**
         * head of the pull request to get
         */
        head: string,
    }): CancelablePromise<PullRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{base}/{head}',
            path: {
                'owner': owner,
                'repo': repo,
                'base': base,
                'head': head,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a pull request
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public static repoGetPullRequest({
        owner,
        repo,
        index,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to get
         */
        index: number,
    }): CancelablePromise<PullRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public static repoEditPullRequest({
        owner,
        repo,
        index,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to edit
         */
        index: number,
        body?: EditPullRequestOption,
    }): CancelablePromise<PullRequest> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/pulls/{index}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                412: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a pull request diff or patch
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public static repoDownloadPullDiffOrPatch({
        owner,
        repo,
        index,
        diffType,
        binary,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to get
         */
        index: number,
        /**
         * whether the output is diff or patch
         */
        diffType: 'diff' | 'patch',
        /**
         * whether to include binary file changes. if true, the diff is applicable with `git apply`
         */
        binary?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}.{diffType}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'diffType': diffType,
            },
            query: {
                'binary': binary,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get commits for a pull request
     * @returns Commit CommitList
     * @throws ApiError
     */
    public static repoGetPullRequestCommits({
        owner,
        repo,
        index,
        page,
        limit,
        verification,
        files,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to get
         */
        index: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * include verification for every commit (disable for speedup, default 'true')
         */
        verification?: boolean,
        /**
         * include a list of affected files for every commit (disable for speedup, default 'true')
         */
        files?: boolean,
    }): CancelablePromise<Array<Commit>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/commits',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'page': page,
                'limit': limit,
                'verification': verification,
                'files': files,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get changed files for a pull request
     * @returns ChangedFile ChangedFileList
     * @throws ApiError
     */
    public static repoGetPullRequestFiles({
        owner,
        repo,
        index,
        skipTo,
        whitespace,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to get
         */
        index: number,
        /**
         * skip to given file
         */
        skipTo?: string,
        /**
         * whitespace behavior
         */
        whitespace?: 'ignore-all' | 'ignore-change' | 'ignore-eol' | 'show-all',
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<ChangedFile>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/files',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'skip-to': skipTo,
                'whitespace': whitespace,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Check if a pull request has been merged
     * @returns void
     * @throws ApiError
     */
    public static repoPullRequestIsMerged({
        owner,
        repo,
        index,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                404: `pull request has not been merged`,
            },
        });
    }
    /**
     * Merge a pull request
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static repoMergePullRequest({
        owner,
        repo,
        index,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to merge
         */
        index: number,
        body?: MergePullRequestOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIEmpty is an empty response`,
                409: `APIError is error format response`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Cancel the scheduled auto merge for the given pull request
     * @returns void
     * @throws ApiError
     */
    public static repoCancelScheduledAutoMerge({
        owner,
        repo,
        index,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to merge
         */
        index: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * create review requests for a pull request
     * @returns PullReview PullReviewList
     * @throws ApiError
     */
    public static repoCreatePullReviewRequests({
        owner,
        repo,
        index,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        body: PullReviewRequestOptions,
    }): CancelablePromise<Array<PullReview>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * cancel review requests for a pull request
     * @returns void
     * @throws ApiError
     */
    public static repoDeletePullReviewRequests({
        owner,
        repo,
        index,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        body: PullReviewRequestOptions,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List all reviews for a pull request
     * @returns PullReview PullReviewList
     * @throws ApiError
     */
    public static repoListPullReviews({
        owner,
        repo,
        index,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PullReview>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a review to an pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public static repoCreatePullReview({
        owner,
        repo,
        index,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        body: CreatePullReviewOptions,
    }): CancelablePromise<PullReview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a specific review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public static repoGetPullReview({
        owner,
        repo,
        index,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<PullReview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Submit a pending review to an pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public static repoSubmitPullReview({
        owner,
        repo,
        index,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        body: SubmitPullReviewOptions,
    }): CancelablePromise<PullReview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete a specific review from a pull request
     * @returns void
     * @throws ApiError
     */
    public static repoDeletePullReview({
        owner,
        repo,
        index,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a specific review for a pull request
     * @returns PullReviewComment PullCommentList
     * @throws ApiError
     */
    public static repoGetPullReviewComments({
        owner,
        repo,
        index,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<Array<PullReviewComment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a new comment to a pull request review
     * @returns PullReviewComment PullComment
     * @throws ApiError
     */
    public static repoCreatePullReviewComment({
        owner,
        repo,
        index,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        body: CreatePullReviewComment,
    }): CancelablePromise<PullReviewComment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a pull review comment
     * @returns PullReviewComment PullComment
     * @throws ApiError
     */
    public static repoGetPullReviewComment({
        owner,
        repo,
        index,
        id,
        comment,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        /**
         * id of the comment
         */
        comment: number,
    }): CancelablePromise<PullReviewComment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments/{comment}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
                'comment': comment,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a pull review comment
     * @returns void
     * @throws ApiError
     */
    public static repoDeletePullReviewComment({
        owner,
        repo,
        index,
        id,
        comment,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        /**
         * id of the comment
         */
        comment: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments/{comment}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
                'comment': comment,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Dismiss a review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public static repoDismissPullReview({
        owner,
        repo,
        index,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        body: DismissPullReviewOptions,
    }): CancelablePromise<PullReview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Cancel to dismiss a review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public static repoUnDismissPullReview({
        owner,
        repo,
        index,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<PullReview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Merge PR's baseBranch into headBranch
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static repoUpdatePullRequest({
        owner,
        repo,
        index,
        style,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * index of the pull request to get
         */
        index: number,
        /**
         * how to update pull request
         */
        style?: 'merge' | 'rebase',
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/update',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'style': style,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get all push mirrors of the repository
     * @returns PushMirror PushMirrorList
     * @throws ApiError
     */
    public static repoListPushMirrors({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PushMirror>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/push_mirrors',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * add a push mirror to the repository
     * @returns PushMirror PushMirror
     * @throws ApiError
     */
    public static repoAddPushMirror({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreatePushMirrorOption,
    }): CancelablePromise<PushMirror> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/push_mirrors',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Sync all push mirrored repository
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static repoPushMirrorSync({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to sync
         */
        owner: string,
        /**
         * name of the repo to sync
         */
        repo: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/push_mirrors-sync',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Get push mirror of the repository by remoteName
     * @returns PushMirror PushMirror
     * @throws ApiError
     */
    public static repoGetPushMirrorByRemoteName({
        owner,
        repo,
        name,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * remote name of push mirror
         */
        name: string,
    }): CancelablePromise<PushMirror> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/push_mirrors/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * deletes a push mirror from a repository by remoteName
     * @returns void
     * @throws ApiError
     */
    public static repoDeletePushMirror({
        owner,
        repo,
        name,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * remote name of the pushMirror
         */
        name: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/push_mirrors/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a file from a repository
     * @returns binary Returns raw file content.
     * @throws ApiError
     */
    public static repoGetRawFile({
        owner,
        repo,
        filepath,
        ref,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * filepath of the file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/raw/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repo's releases
     * @returns Release ReleaseList
     * @throws ApiError
     */
    public static repoListReleases({
        owner,
        repo,
        draft,
        preRelease,
        q,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * filter (exclude / include) drafts, if you dont have repo write access none will show
         */
        draft?: boolean,
        /**
         * filter (exclude / include) pre-releases
         */
        preRelease?: boolean,
        /**
         * Search string
         */
        q?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Release>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'draft': draft,
                'pre-release': preRelease,
                'q': q,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a release
     * @returns Release Release
     * @throws ApiError
     */
    public static repoCreateRelease({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateReleaseOption,
    }): CancelablePromise<Release> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at
     * @returns Release Release
     * @throws ApiError
     */
    public static repoGetLatestRelease({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Release> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/latest',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a release by tag name
     * @returns Release Release
     * @throws ApiError
     */
    public static repoGetReleaseByTag({
        owner,
        repo,
        tag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * tag name of the release to get
         */
        tag: string,
    }): CancelablePromise<Release> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a release by tag name
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteReleaseByTag({
        owner,
        repo,
        tag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * tag name of the release to delete
         */
        tag: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a release
     * @returns Release Release
     * @throws ApiError
     */
    public static repoGetRelease({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release to get
         */
        id: number,
    }): CancelablePromise<Release> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a release
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteRelease({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Update a release
     * @returns Release Release
     * @throws ApiError
     */
    public static repoEditRelease({
        owner,
        repo,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release to edit
         */
        id: number,
        body?: EditReleaseOption,
    }): CancelablePromise<Release> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List release's attachments
     * @returns Attachment AttachmentList
     * @throws ApiError
     */
    public static repoListReleaseAttachments({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release
         */
        id: number,
    }): CancelablePromise<Array<Attachment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public static repoCreateReleaseAttachment({
        owner,
        repo,
        id,
        name,
        attachment,
        externalUrl,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release
         */
        id: number,
        /**
         * name of the attachment
         */
        name?: string,
        /**
         * attachment to upload (this parameter is incompatible with `external_url`)
         */
        attachment?: Blob,
        /**
         * url to external asset (this parameter is incompatible with `attachment`)
         */
        externalUrl?: string,
    }): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases/{id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            query: {
                'name': name,
            },
            formData: {
                'attachment': attachment,
                'external_url': externalUrl,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Get a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public static repoGetReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to get
         */
        attachmentId: number,
    }): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a release attachment
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to delete
         */
        attachmentId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public static repoEditReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to edit
         */
        attachmentId: number,
        body?: EditAttachmentOptions,
    }): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Return all users that can be requested to review in this repo
     * @returns User UserList
     * @throws ApiError
     */
    public static repoGetReviewers({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/reviewers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get signing-key.gpg for given repository
     * @returns string GPG armored public key
     * @throws ApiError
     */
    public static repoSigningKey({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/signing-key.gpg',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * List a repo's stargazers
     * @returns User UserList
     * @throws ApiError
     */
    public static repoListStargazers({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/stargazers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a commit's statuses
     * @returns CommitStatus CommitStatusList
     * @throws ApiError
     */
    public static repoListStatuses({
        owner,
        repo,
        sha,
        sort,
        state,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * sha of the commit
         */
        sha: string,
        /**
         * type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'leastindex' | 'highestindex',
        /**
         * type of state
         */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning',
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<CommitStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/statuses/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'sort': sort,
                'state': state,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a commit status
     * @returns CommitStatus CommitStatus
     * @throws ApiError
     */
    public static repoCreateStatus({
        owner,
        repo,
        sha,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * sha of the commit
         */
        sha: string,
        body?: CreateStatusOption,
    }): CancelablePromise<CommitStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/statuses/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a repo's watchers
     * @returns User UserList
     * @throws ApiError
     */
    public static repoListSubscribers({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/subscribers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Check if the current user is watching a repo
     * @returns WatchInfo WatchInfo
     * @throws ApiError
     */
    public static userCurrentCheckSubscription({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<WatchInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `User is not watching this repo or repo do not exist`,
            },
        });
    }
    /**
     * Watch a repo
     * @returns WatchInfo WatchInfo
     * @throws ApiError
     */
    public static userCurrentPutSubscription({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<WatchInfo> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Unwatch a repo
     * @returns void
     * @throws ApiError
     */
    public static userCurrentDeleteSubscription({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List tag protections for a repository
     * @returns TagProtection TagProtectionList
     * @throws ApiError
     */
    public static repoListTagProtection({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<TagProtection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tag_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }
    /**
     * Create a tag protections for a repository
     * @returns TagProtection TagProtection
     * @throws ApiError
     */
    public static repoCreateTagProtection({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateTagProtectionOption,
    }): CancelablePromise<TagProtection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/tag_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get a specific tag protection for the repository
     * @returns TagProtection TagProtection
     * @throws ApiError
     */
    public static repoGetTagProtection({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of the tag protect to get
         */
        id: number,
    }): CancelablePromise<TagProtection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tag_protections/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a specific tag protection for the repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteTagProtection({
        owner,
        repo,
        id,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of protected tag
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/tag_protections/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a tag protections for a repository. Only fields that are set will be changed
     * @returns TagProtection TagProtection
     * @throws ApiError
     */
    public static repoEditTagProtection({
        owner,
        repo,
        id,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * id of protected tag
         */
        id: number,
        body?: EditTagProtectionOption,
    }): CancelablePromise<TagProtection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/tag_protections/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * List a repository's tags
     * @returns Tag TagList
     * @throws ApiError
     */
    public static repoListTags({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results, default maximum page size is 50
         */
        limit?: number,
    }): CancelablePromise<Array<Tag>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a new git tag in a repository
     * @returns Tag Tag
     * @throws ApiError
     */
    public static repoCreateTag({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateTagOption,
    }): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIEmpty is an empty response`,
                409: `APIConflict is a conflict empty response`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get the tag of a repository by tag name
     * @returns Tag Tag
     * @throws ApiError
     */
    public static repoGetTag({
        owner,
        repo,
        tag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of tag
         */
        tag: string,
    }): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a repository's tag by name
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteTag({
        owner,
        repo,
        tag,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of tag to delete
         */
        tag: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIEmpty is an empty response`,
                409: `APIConflict is a conflict empty response`,
                422: `APIValidationError is error format response related to input validation`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * List a repository's teams
     * @returns Team TeamList
     * @throws ApiError
     */
    public static repoListTeams({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<Array<Team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/teams',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Check if a team is assigned to a repository
     * @returns Team Team
     * @throws ApiError
     */
    public static repoCheckTeam({
        owner,
        repo,
        team,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * team name
         */
        team: string,
    }): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIError is error format response`,
            },
        });
    }
    /**
     * Add a team to a repository
     * @returns void
     * @throws ApiError
     */
    public static repoAddTeam({
        owner,
        repo,
        team,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * team name
         */
        team: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete a team from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteTeam({
        owner,
        repo,
        team,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * team name
         */
        team: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                405: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List a repo's tracked times
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public static repoTrackedTimes({
        owner,
        repo,
        user,
        since,
        before,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * optional filter by user (available for issue managers)
         */
        user?: string,
        /**
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<TrackedTime>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/times',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'user': user,
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * @deprecated
     * List a user's tracked times in a repo
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public static userTrackedTimes({
        owner,
        repo,
        user,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * username of user
         */
        user: string,
    }): CancelablePromise<Array<TrackedTime>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/times/{user}',
            path: {
                'owner': owner,
                'repo': repo,
                'user': user,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get list of topics that a repository has
     * @returns TopicName TopicNames
     * @throws ApiError
     */
    public static repoListTopics({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<TopicName> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/topics',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Replace list of topics for a repository
     * @returns void
     * @throws ApiError
     */
    public static repoUpdateTopics({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: RepoTopicOptions,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/topics',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }
    /**
     * Add a topic to a repository
     * @returns void
     * @throws ApiError
     */
    public static repoAddTopic({
        owner,
        repo,
        topic,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the topic to add
         */
        topic: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/repos/{owner}/{repo}/topics/{topic}',
            path: {
                'owner': owner,
                'repo': repo,
                'topic': topic,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }
    /**
     * Delete a topic from a repository
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteTopic({
        owner,
        repo,
        topic,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the topic to delete
         */
        topic: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/topics/{topic}',
            path: {
                'owner': owner,
                'repo': repo,
                'topic': topic,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }
    /**
     * Transfer a repo ownership
     * @returns Repository Repository
     * @throws ApiError
     */
    public static repoTransfer({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
        /**
         * Transfer Options
         */
        body: TransferRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Accept a repo transfer
     * @returns Repository Repository
     * @throws ApiError
     */
    public static acceptRepoTransfer({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer/accept',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
            },
        });
    }
    /**
     * Reject a repo transfer
     * @returns Repository Repository
     * @throws ApiError
     */
    public static rejectRepoTransfer({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer/reject',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public static repoCreateWikiPage({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateWikiPageOptions,
    }): CancelablePromise<WikiPage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{owner}/{repo}/wiki/new',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public static repoGetWikiPage({
        owner,
        repo,
        pageName,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the page
         */
        pageName: string,
    }): CancelablePromise<WikiPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a wiki page
     * @returns void
     * @throws ApiError
     */
    public static repoDeleteWikiPage({
        owner,
        repo,
        pageName,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the page
         */
        pageName: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Edit a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public static repoEditWikiPage({
        owner,
        repo,
        pageName,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the page
         */
        pageName: string,
        body?: CreateWikiPageOptions,
    }): CancelablePromise<WikiPage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                413: `QuotaExceeded`,
                423: `APIRepoArchivedError is an error that is raised when an archived repo should be modified`,
            },
        });
    }
    /**
     * Get all wiki pages
     * @returns WikiPageMetaData WikiPageList
     * @throws ApiError
     */
    public static repoGetWikiPages({
        owner,
        repo,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<WikiPageMetaData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get revisions of a wiki page
     * @returns WikiCommitList WikiCommitList
     * @throws ApiError
     */
    public static repoGetWikiPageRevisions({
        owner,
        repo,
        pageName,
        page,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * name of the page
         */
        pageName: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
    }): CancelablePromise<WikiCommitList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/revisions/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            query: {
                'page': page,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a repository using a template
     * @returns Repository Repository
     * @throws ApiError
     */
    public static generateRepo({
        templateOwner,
        templateRepo,
        body,
    }: {
        /**
         * name of the template repository owner
         */
        templateOwner: string,
        /**
         * name of the template repository
         */
        templateRepo: string,
        body?: GenerateRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/repos/{template_owner}/{template_repo}/generate',
            path: {
                'template_owner': templateOwner,
                'template_repo': templateRepo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `The repository with the same name already exists.`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a repository by id
     * @returns Repository Repository
     * @throws ApiError
     */
    public static repoGetById({
        id,
    }: {
        /**
         * id of the repo to get
         */
        id: number,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/repositories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * search topics via keyword
     * @returns TopicResponse TopicListResponse
     * @throws ApiError
     */
    public static topicSearch({
        q,
        page,
        limit,
    }: {
        /**
         * keywords to search
         */
        q: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<TopicResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/topics/search',
            query: {
                'q': q,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public static createCurrentUserRepo({
        body,
    }: {
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/repos',
            body: body,
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                409: `The repository with the same name already exists.`,
                413: `QuotaExceeded`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
}
