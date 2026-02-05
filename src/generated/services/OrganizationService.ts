/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionRunJob } from '../models/ActionRunJob';
import type { ActionVariable } from '../models/ActionVariable';
import type { Activity } from '../models/Activity';
import type { BlockedUser } from '../models/BlockedUser';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateLabelOption } from '../models/CreateLabelOption';
import type { CreateOrgOption } from '../models/CreateOrgOption';
import type { CreateOrUpdateSecretOption } from '../models/CreateOrUpdateSecretOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateTeamOption } from '../models/CreateTeamOption';
import type { CreateVariableOption } from '../models/CreateVariableOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditLabelOption } from '../models/EditLabelOption';
import type { EditOrgOption } from '../models/EditOrgOption';
import type { EditTeamOption } from '../models/EditTeamOption';
import type { Hook } from '../models/Hook';
import type { Label } from '../models/Label';
import type { Organization } from '../models/Organization';
import type { OrganizationPermissions } from '../models/OrganizationPermissions';
import type { QuotaInfo } from '../models/QuotaInfo';
import type { QuotaUsedArtifactList } from '../models/QuotaUsedArtifactList';
import type { QuotaUsedAttachmentList } from '../models/QuotaUsedAttachmentList';
import type { QuotaUsedPackageList } from '../models/QuotaUsedPackageList';
import type { RenameOrgOption } from '../models/RenameOrgOption';
import type { Repository } from '../models/Repository';
import type { Secret } from '../models/Secret';
import type { Team } from '../models/Team';
import type { UpdateUserAvatarOption } from '../models/UpdateUserAvatarOption';
import type { UpdateVariableOption } from '../models/UpdateVariableOption';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationService {
    /**
     * @deprecated
     * Create a repository in an organization
     * @returns Repository Repository
     * @throws ApiError
     */
    public static createOrgRepoDeprecated({
        org,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/org/{org}/repos',
            path: {
                'org': org,
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
     * Get list of organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public static orgGetAll({
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
            url: '/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public static orgCreate({
        organization,
    }: {
        organization: CreateOrgOption,
    }): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs',
            body: organization,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public static orgGet({
        org,
    }: {
        /**
         * name of the organization to get
         */
        org: string,
    }): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete an organization
     * @returns void
     * @throws ApiError
     */
    public static orgDelete({
        org,
    }: {
        /**
         * organization that is to be deleted
         */
        org: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public static orgEdit({
        org,
        body,
    }: {
        /**
         * name of the organization to edit
         */
        org: string,
        body: EditOrgOption,
    }): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIError is error format response`,
            },
        });
    }
    /**
     * Search for organization's action jobs according filter conditions
     * @returns ActionRunJob RunJobList is a list of action run jobs
     * @throws ApiError
     */
    public static orgSearchRunJobs({
        org,
        labels,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * a comma separated list of run job labels to search for
         */
        labels?: string,
    }): CancelablePromise<Array<ActionRunJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners/jobs',
            path: {
                'org': org,
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
     * Get an organization's actions runner registration token
     * @returns string RegistrationToken is a string used to register a runner with a server
     * @throws ApiError
     */
    public static orgGetRunnerRegistrationToken({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/runners/registration-token',
            path: {
                'org': org,
            },
            responseHeader: 'token',
        });
    }
    /**
     * List an organization's actions secrets
     * @returns Secret SecretList
     * @throws ApiError
     */
    public static orgListActionsSecrets({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/actions/secrets',
            path: {
                'org': org,
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
     * Create or Update a secret value in an organization
     * @returns any response when creating a secret
     * @throws ApiError
     */
    public static updateOrgSecret({
        org,
        secretname,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        /**
         * name of the secret
         */
        secretname: string,
        body?: CreateOrUpdateSecretOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/secrets/{secretname}',
            path: {
                'org': org,
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
     * Delete a secret in an organization
     * @returns void
     * @throws ApiError
     */
    public static deleteOrgSecret({
        org,
        secretname,
    }: {
        /**
         * name of organization
         */
        org: string,
        /**
         * name of the secret
         */
        secretname: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/secrets/{secretname}',
            path: {
                'org': org,
                'secretname': secretname,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get an org-level variables list
     * @returns ActionVariable VariableList
     * @throws ApiError
     */
    public static getOrgVariablesList({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/actions/variables',
            path: {
                'org': org,
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
     * Get an org-level variable
     * @returns ActionVariable ActionVariable
     * @throws ApiError
     */
    public static getOrgVariable({
        org,
        variablename,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update an org-level variable
     * @returns any response when updating an org-level variable
     * @throws ApiError
     */
    public static updateOrgVariable({
        org,
        variablename,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: UpdateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
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
     * Create an org-level variable
     * @returns any response when creating an org-level variable
     * @throws ApiError
     */
    public static createOrgVariable({
        org,
        variablename,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
        body?: CreateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
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
     * Delete an org-level variable
     * @returns ActionVariable ActionVariable
     * @returns any response when deleting a variable
     * @throws ApiError
     */
    public static deleteOrgVariable({
        org,
        variablename,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/actions/variables/{variablename}',
            path: {
                'org': org,
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List an organization's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public static orgListActivityFeeds({
        org,
        date,
        page,
        limit,
    }: {
        /**
         * name of the org
         */
        org: string,
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
            url: '/orgs/{org}/activities/feeds',
            path: {
                'org': org,
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
     * Update Avatar
     * @returns void
     * @throws ApiError
     */
    public static orgUpdateAvatar({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: UpdateUserAvatarOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/avatar',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete Avatar
     * @returns void
     * @throws ApiError
     */
    public static orgDeleteAvatar({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/avatar',
            path: {
                'org': org,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Blocks a user from the organization
     * @returns void
     * @throws ApiError
     */
    public static orgBlockUser({
        org,
        username,
    }: {
        /**
         * name of the org
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/block/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List an organization's webhooks
     * @returns Hook HookList
     * @throws ApiError
     */
    public static orgListHooks({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
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
    public static orgCreateHook({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body: CreateHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/hooks',
            path: {
                'org': org,
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
    public static orgGetHook({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a hook
     * @returns void
     * @throws ApiError
     */
    public static orgDeleteHook({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static orgEditHook({
        org,
        id,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the hook to update
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/hooks/{id}',
            path: {
                'org': org,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List an organization's labels
     * @returns Label LabelList
     * @throws ApiError
     */
    public static orgListLabels({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Label>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/labels',
            path: {
                'org': org,
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
     * Create a label for an organization
     * @returns Label Label
     * @throws ApiError
     */
    public static orgCreateLabel({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: CreateLabelOption,
    }): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/labels',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a single label
     * @returns Label Label
     * @throws ApiError
     */
    public static orgGetLabel({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to get
         */
        id: number,
    }): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a label
     * @returns void
     * @throws ApiError
     */
    public static orgDeleteLabel({
        org,
        id,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a label
     * @returns Label Label
     * @throws ApiError
     */
    public static orgEditLabel({
        org,
        id,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * id of the label to edit
         */
        id: number,
        body?: EditLabelOption,
    }): CancelablePromise<Label> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/orgs/{org}/labels/{id}',
            path: {
                'org': org,
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
     * List the organization's blocked users
     * @returns BlockedUser BlockedUserList
     * @throws ApiError
     */
    public static orgListBlockedUsers({
        org,
        page,
        limit,
    }: {
        /**
         * name of the org
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<BlockedUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/list_blocked',
            path: {
                'org': org,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * List an organization's members
     * @returns User UserList
     * @throws ApiError
     */
    public static orgListMembers({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/members',
            path: {
                'org': org,
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
     * Check if a user is a member of an organization
     * @returns void
     * @throws ApiError
     */
    public static orgIsMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                303: `redirection to /orgs/{org}/public_members/{username}`,
                404: `user is not a member`,
            },
        });
    }
    /**
     * Remove a member from an organization
     * @returns void
     * @throws ApiError
     */
    public static orgDeleteMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List an organization's public members
     * @returns User UserList
     * @throws ApiError
     */
    public static orgListPublicMembers({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/public_members',
            path: {
                'org': org,
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
     * Check if a user is a public member of an organization
     * @returns void
     * @throws ApiError
     */
    public static orgIsPublicMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `user is not a public member`,
            },
        });
    }
    /**
     * Publicize a user's membership
     * @returns void
     * @throws ApiError
     */
    public static orgPublicizeMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Conceal a user's membership
     * @returns void
     * @throws ApiError
     */
    public static orgConcealMember({
        org,
        username,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orgs/{org}/public_members/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get quota information for an organization
     * @returns QuotaInfo QuotaInfo
     * @throws ApiError
     */
    public static orgGetQuota({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<QuotaInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/quota',
            path: {
                'org': org,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the artifacts affecting the organization's quota
     * @returns QuotaUsedArtifactList QuotaUsedArtifactList
     * @throws ApiError
     */
    public static orgListQuotaArtifacts({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<QuotaUsedArtifactList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/quota/artifacts',
            path: {
                'org': org,
            },
            query: {
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
     * List the attachments affecting the organization's quota
     * @returns QuotaUsedAttachmentList QuotaUsedAttachmentList
     * @throws ApiError
     */
    public static orgListQuotaAttachments({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<QuotaUsedAttachmentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/quota/attachments',
            path: {
                'org': org,
            },
            query: {
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
     * Check if the organization is over quota for a given subject
     * @returns any Boolean
     * @throws ApiError
     */
    public static orgCheckQuota({
        org,
    }: {
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/quota/check',
            path: {
                'org': org,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List the packages affecting the organization's quota
     * @returns QuotaUsedPackageList QuotaUsedPackageList
     * @throws ApiError
     */
    public static orgListQuotaPackages({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<QuotaUsedPackageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/quota/packages',
            path: {
                'org': org,
            },
            query: {
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
     * Rename an organization
     * @returns void
     * @throws ApiError
     */
    public static renameOrg({
        org,
        body,
    }: {
        /**
         * existing org name
         */
        org: string,
        body: RenameOrgOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/rename',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List an organization's repos
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static orgListRepos({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
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
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
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
     * Create a repository in an organization
     * @returns Repository Repository
     * @throws ApiError
     */
    public static createOrgRepo({
        org,
        body,
    }: {
        /**
         * name of organization
         */
        org: string,
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/repos',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List an organization's teams
     * @returns Team TeamList
     * @throws ApiError
     */
    public static orgListTeams({
        org,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
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
     * Create a team
     * @returns Team Team
     * @throws ApiError
     */
    public static orgCreateTeam({
        org,
        body,
    }: {
        /**
         * name of the organization
         */
        org: string,
        body?: CreateTeamOption,
    }): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orgs/{org}/teams',
            path: {
                'org': org,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search for teams within an organization
     * @returns any SearchResults of a successful search
     * @throws ApiError
     */
    public static teamSearch({
        org,
        q,
        includeDesc,
        page,
        limit,
    }: {
        /**
         * name of the organization
         */
        org: string,
        /**
         * keywords to search
         */
        q?: string,
        /**
         * include search within team description (defaults to true)
         */
        includeDesc?: boolean,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<{
        data?: Array<Team>;
        ok?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orgs/{org}/teams/search',
            path: {
                'org': org,
            },
            query: {
                'q': q,
                'include_desc': includeDesc,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Unblock a user from the organization
     * @returns void
     * @throws ApiError
     */
    public static orgUnblockUser({
        org,
        username,
    }: {
        /**
         * name of the org
         */
        org: string,
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orgs/{org}/unblock/{username}',
            path: {
                'org': org,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a team
     * @returns Team Team
     * @throws ApiError
     */
    public static orgGetTeam({
        id,
    }: {
        /**
         * id of the team to get
         */
        id: number,
    }): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a team
     * @returns void
     * @throws ApiError
     */
    public static orgDeleteTeam({
        id,
    }: {
        /**
         * id of the team to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Edit a team
     * @returns Team Team
     * @throws ApiError
     */
    public static orgEditTeam({
        id,
        body,
    }: {
        /**
         * id of the team to edit
         */
        id: number,
        body?: EditTeamOption,
    }): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a team's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public static orgListTeamActivityFeeds({
        id,
        date,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
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
            url: '/teams/{id}/activities/feeds',
            path: {
                'id': id,
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
     * List a team's members
     * @returns User UserList
     * @throws ApiError
     */
    public static orgListTeamMembers({
        id,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
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
            url: '/teams/{id}/members',
            path: {
                'id': id,
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
     * List a particular member of team
     * @returns User User
     * @throws ApiError
     */
    public static orgListTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the member to list
         */
        username: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a team member
     * @returns void
     * @throws ApiError
     */
    public static orgAddTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the user to add
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Remove a team member
     * @returns void
     * @throws ApiError
     */
    public static orgRemoveTeamMember({
        id,
        username,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * username of the user to remove
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{id}/members/{username}',
            path: {
                'id': id,
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a team's repos
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static orgListTeamRepos({
        id,
        page,
        limit,
    }: {
        /**
         * id of the team
         */
        id: number,
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
            url: '/teams/{id}/repos',
            path: {
                'id': id,
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
     * List a particular repo of team
     * @returns Repository Repository
     * @throws ApiError
     */
    public static orgListTeamRepo({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to list
         */
        org: string,
        /**
         * name of the repo to list
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Add a repository to a team
     * @returns void
     * @throws ApiError
     */
    public static orgAddTeamRepository({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to add
         */
        org: string,
        /**
         * name of the repo to add
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Remove a repository from a team
     * This does not delete the repository, it only removes the repository from the team.
     * @returns void
     * @throws ApiError
     */
    public static orgRemoveTeamRepository({
        id,
        org,
        repo,
    }: {
        /**
         * id of the team
         */
        id: number,
        /**
         * organization that owns the repo to remove
         */
        org: string,
        /**
         * name of the repo to remove
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/teams/{id}/repos/{org}/{repo}',
            path: {
                'id': id,
                'org': org,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the current user's organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public static orgListCurrentUserOrgs({
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
            url: '/user/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a user's organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public static orgListUserOrgs({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
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
            url: '/users/{username}/orgs',
            path: {
                'username': username,
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
     * Get user permissions in organization
     * @returns OrganizationPermissions OrganizationPermissions
     * @throws ApiError
     */
    public static orgGetUserPermissions({
        username,
        org,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * name of the organization
         */
        org: string,
    }): CancelablePromise<OrganizationPermissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/orgs/{org}/permissions',
            path: {
                'username': username,
                'org': org,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
}
