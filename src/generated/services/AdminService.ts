/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionRunJob } from '../models/ActionRunJob';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOrgOption } from '../models/CreateOrgOption';
import type { CreateQuotaGroupOptions } from '../models/CreateQuotaGroupOptions';
import type { CreateQuotaRuleOptions } from '../models/CreateQuotaRuleOptions';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateUserOption } from '../models/CreateUserOption';
import type { Cron } from '../models/Cron';
import type { DeleteEmailOption } from '../models/DeleteEmailOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditQuotaRuleOptions } from '../models/EditQuotaRuleOptions';
import type { EditUserOption } from '../models/EditUserOption';
import type { Email } from '../models/Email';
import type { Hook } from '../models/Hook';
import type { Organization } from '../models/Organization';
import type { PublicKey } from '../models/PublicKey';
import type { QuotaGroup } from '../models/QuotaGroup';
import type { QuotaGroupList } from '../models/QuotaGroupList';
import type { QuotaInfo } from '../models/QuotaInfo';
import type { QuotaRuleInfo } from '../models/QuotaRuleInfo';
import type { RegistrationToken } from '../models/RegistrationToken';
import type { RenameUserOption } from '../models/RenameUserOption';
import type { Repository } from '../models/Repository';
import type { SetUserQuotaGroupsOptions } from '../models/SetUserQuotaGroupsOptions';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * List cron tasks
     * @returns Cron CronList
     * @throws ApiError
     */
    public static adminCronList({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Cron>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/cron',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Run cron task
     * @returns void
     * @throws ApiError
     */
    public static adminCronRun({
        task,
    }: {
        /**
         * task to run
         */
        task: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/cron/{task}',
            path: {
                'task': task,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List all users' email addresses
     * @returns Email EmailList
     * @throws ApiError
     */
    public static adminGetAllEmails({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/emails',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Search users' email addresses
     * @returns Email EmailList
     * @throws ApiError
     */
    public static adminSearchEmails({
        q,
        page,
        limit,
    }: {
        /**
         * keyword
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
    }): CancelablePromise<Array<Email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/emails/search',
            query: {
                'q': q,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List global (system) webhooks
     * @returns Hook HookList
     * @throws ApiError
     */
    public static adminListHooks({
        page,
        limit,
    }: {
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
            url: '/admin/hooks',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static adminCreateHook({
        body,
    }: {
        body: CreateHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/hooks',
            body: body,
        });
    }
    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static adminGetHook({
        id,
    }: {
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete a hook
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteHook({
        id,
    }: {
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static adminEditHook({
        id,
        body,
    }: {
        /**
         * id of the hook to update
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/admin/hooks/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }
    /**
     * List all organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public static adminGetAllOrgs({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Organization>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the available quota groups
     * @returns QuotaGroupList QuotaGroupList
     * @throws ApiError
     */
    public static adminListQuotaGroups(): CancelablePromise<QuotaGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/quota/groups',
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a new quota group
     * @returns QuotaGroup QuotaGroup
     * @throws ApiError
     */
    public static adminCreateQuotaGroup({
        group,
    }: {
        /**
         * Definition of the quota group
         */
        group: CreateQuotaGroupOptions,
    }): CancelablePromise<QuotaGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/quota/groups',
            body: group,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get information about the quota group
     * @returns QuotaGroup QuotaGroup
     * @throws ApiError
     */
    public static adminGetQuotaGroup({
        quotagroup,
    }: {
        /**
         * quota group to query
         */
        quotagroup: string,
    }): CancelablePromise<QuotaGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/quota/groups/{quotagroup}',
            path: {
                'quotagroup': quotagroup,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a quota group
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteQuotaGroup({
        quotagroup,
    }: {
        /**
         * quota group to delete
         */
        quotagroup: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/quota/groups/{quotagroup}',
            path: {
                'quotagroup': quotagroup,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Adds a rule to a quota group
     * @returns void
     * @throws ApiError
     */
    public static adminAddRuleToQuotaGroup({
        quotagroup,
        quotarule,
    }: {
        /**
         * quota group to add a rule to
         */
        quotagroup: string,
        /**
         * the name of the quota rule to add to the group
         */
        quotarule: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/quota/groups/{quotagroup}/rules/{quotarule}',
            path: {
                'quotagroup': quotagroup,
                'quotarule': quotarule,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Removes a rule from a quota group
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static adminRemoveRuleFromQuotaGroup({
        quotagroup,
        quotarule,
    }: {
        /**
         * quota group to remove a rule from
         */
        quotagroup: string,
        /**
         * the name of the quota rule to remove from the group
         */
        quotarule: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/quota/groups/{quotagroup}/rules/{quotarule}',
            path: {
                'quotagroup': quotagroup,
                'quotarule': quotarule,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List users in a quota group
     * @returns User UserList
     * @throws ApiError
     */
    public static adminListUsersInQuotaGroup({
        quotagroup,
    }: {
        /**
         * quota group to list members of
         */
        quotagroup: string,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/quota/groups/{quotagroup}/users',
            path: {
                'quotagroup': quotagroup,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a user to a quota group
     * @returns void
     * @throws ApiError
     */
    public static adminAddUserToQuotaGroup({
        quotagroup,
        username,
    }: {
        /**
         * quota group to add the user to
         */
        quotagroup: string,
        /**
         * username of the user to add to the quota group
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/quota/groups/{quotagroup}/users/{username}',
            path: {
                'quotagroup': quotagroup,
                'username': username,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Remove a user from a quota group
     * @returns void
     * @throws ApiError
     */
    public static adminRemoveUserFromQuotaGroup({
        quotagroup,
        username,
    }: {
        /**
         * quota group to remove a user from
         */
        quotagroup: string,
        /**
         * username of the user to remove from the quota group
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/quota/groups/{quotagroup}/users/{username}',
            path: {
                'quotagroup': quotagroup,
                'username': username,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the available quota rules
     * @returns QuotaRuleInfo QuotaRuleInfoList
     * @throws ApiError
     */
    public static adminListQuotaRules(): CancelablePromise<Array<QuotaRuleInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/quota/rules',
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a new quota rule
     * @returns QuotaRuleInfo QuotaRuleInfo
     * @throws ApiError
     */
    public static adminCreateQuotaRule({
        rule,
    }: {
        /**
         * Definition of the quota rule
         */
        rule: CreateQuotaRuleOptions,
    }): CancelablePromise<QuotaRuleInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/quota/rules',
            body: rule,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get information about a quota rule
     * @returns QuotaRuleInfo QuotaRuleInfo
     * @throws ApiError
     */
    public static adminGetQuotaRule({
        quotarule,
    }: {
        /**
         * quota rule to query
         */
        quotarule: string,
    }): CancelablePromise<QuotaRuleInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/quota/rules/{quotarule}',
            path: {
                'quotarule': quotarule,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Deletes a quota rule
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteQuotaRule({
        quotarule,
    }: {
        /**
         * quota rule to delete
         */
        quotarule: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/quota/rules/{quotarule}',
            path: {
                'quotarule': quotarule,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Change an existing quota rule
     * @returns QuotaRuleInfo QuotaRuleInfo
     * @throws ApiError
     */
    public static adminEditQuotaRule({
        quotarule,
        rule,
    }: {
        /**
         * Quota rule to change
         */
        quotarule: string,
        rule: EditQuotaRuleOptions,
    }): CancelablePromise<QuotaRuleInfo> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/admin/quota/rules/{quotarule}',
            path: {
                'quotarule': quotarule,
            },
            body: rule,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search action jobs according filter conditions
     * @returns ActionRunJob RunJobList is a list of action run jobs
     * @throws ApiError
     */
    public static adminSearchRunJobs({
        labels,
    }: {
        /**
         * a comma separated list of run job labels to search for
         */
        labels?: string,
    }): CancelablePromise<Array<ActionRunJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/runners/jobs',
            query: {
                'labels': labels,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get an global actions runner registration token
     * @returns RegistrationToken RegistrationToken is a string used to register a runner with a server
     * @throws ApiError
     */
    public static adminGetRunnerRegistrationToken(): CancelablePromise<RegistrationToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/runners/registration-token',
        });
    }
    /**
     * List unadopted repositories
     * @returns string StringSlice
     * @throws ApiError
     */
    public static adminUnadoptedList({
        page,
        limit,
        pattern,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * pattern of repositories to search for
         */
        pattern?: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/unadopted',
            query: {
                'page': page,
                'limit': limit,
                'pattern': pattern,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Adopt unadopted files as a repository
     * @returns void
     * @throws ApiError
     */
    public static adminAdoptRepository({
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
            method: 'POST',
            url: '/admin/unadopted/{owner}/{repo}',
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
     * Delete unadopted files
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteUnadoptedRepository({
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
            url: '/admin/unadopted/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Search users according filter conditions
     * @returns User UserList
     * @throws ApiError
     */
    public static adminSearchUsers({
        sourceId,
        loginName,
        sort,
        page,
        limit,
    }: {
        /**
         * ID of the user's login source to search for
         */
        sourceId?: number,
        /**
         * user's login name to search for
         */
        loginName?: string,
        /**
         * sort order of results
         */
        sort?: 'oldest' | 'newest' | 'alphabetically' | 'reversealphabetically' | 'recentupdate' | 'leastupdate',
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
            url: '/admin/users',
            query: {
                'source_id': sourceId,
                'login_name': loginName,
                'sort': sort,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a user account
     * @returns User User
     * @throws ApiError
     */
    public static adminCreateUser({
        body,
    }: {
        body?: CreateUserOption,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users',
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete user account
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteUser({
        username,
        purge,
    }: {
        /**
         * username of user to delete
         */
        username: string,
        /**
         * purge the user from the system completely
         */
        purge?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            query: {
                'purge': purge,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Edit an existing user
     * @returns User User
     * @throws ApiError
     */
    public static adminEditUser({
        username,
        body,
    }: {
        /**
         * username of user to edit
         */
        username: string,
        body?: EditUserOption,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List all email addresses for a user
     * @returns Email EmailList
     * @throws ApiError
     */
    public static adminListUserEmails({
        username,
    }: {
        /**
         * username of user to get email addresses of
         */
        username: string,
    }): CancelablePromise<Array<Email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{username}/emails',
            path: {
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete email addresses from a user's account
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteUserEmails({
        username,
        body,
    }: {
        /**
         * username of user to delete email addresses from
         */
        username: string,
        body?: DeleteEmailOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{username}/emails',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Add an SSH public key to user's account
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public static adminCreatePublicKey({
        username,
        key,
    }: {
        /**
         * username of the user
         */
        username: string,
        key?: CreateKeyOption,
    }): CancelablePromise<PublicKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{username}/keys',
            path: {
                'username': username,
            },
            body: key,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Remove a public key from user's account
     * @returns void
     * @throws ApiError
     */
    public static adminDeleteUserPublicKey({
        username,
        id,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * id of the key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{username}/keys/{id}',
            path: {
                'username': username,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public static adminCreateOrg({
        username,
        organization,
    }: {
        /**
         * username of the user that will own the created organization
         */
        username: string,
        organization: CreateOrgOption,
    }): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{username}/orgs',
            path: {
                'username': username,
            },
            body: organization,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get the user's quota info
     * @returns QuotaInfo QuotaInfo
     * @throws ApiError
     */
    public static adminGetUserQuota({
        username,
    }: {
        /**
         * username of user to query
         */
        username: string,
    }): CancelablePromise<QuotaInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{username}/quota',
            path: {
                'username': username,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Set the user's quota groups to a given list.
     * @returns void
     * @throws ApiError
     */
    public static adminSetUserQuotaGroups({
        username,
        groups,
    }: {
        /**
         * username of the user to modify the quota groups from
         */
        username: string,
        /**
         * list of groups that the user should be a member of
         */
        groups: SetUserQuotaGroupsOptions,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{username}/quota/groups',
            path: {
                'username': username,
            },
            body: groups,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Rename a user
     * @returns void
     * @throws ApiError
     */
    public static adminRenameUser({
        username,
        body,
    }: {
        /**
         * existing username of user
         */
        username: string,
        body: RenameUserOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{username}/rename',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Create a repository on behalf of a user
     * @returns Repository Repository
     * @throws ApiError
     */
    public static adminCreateRepo({
        username,
        repository,
    }: {
        /**
         * username of the user. This user will own the created repository
         */
        username: string,
        repository: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{username}/repos',
            path: {
                'username': username,
            },
            body: repository,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
}
