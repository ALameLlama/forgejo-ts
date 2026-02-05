/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessToken } from '../models/AccessToken';
import type { ActionRunJob } from '../models/ActionRunJob';
import type { ActionVariable } from '../models/ActionVariable';
import type { Activity } from '../models/Activity';
import type { BlockedUser } from '../models/BlockedUser';
import type { CreateAccessTokenOption } from '../models/CreateAccessTokenOption';
import type { CreateEmailOption } from '../models/CreateEmailOption';
import type { CreateGPGKeyOption } from '../models/CreateGPGKeyOption';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOAuth2ApplicationOptions } from '../models/CreateOAuth2ApplicationOptions';
import type { CreateOrUpdateSecretOption } from '../models/CreateOrUpdateSecretOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateVariableOption } from '../models/CreateVariableOption';
import type { DeleteEmailOption } from '../models/DeleteEmailOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { Email } from '../models/Email';
import type { GPGKey } from '../models/GPGKey';
import type { Hook } from '../models/Hook';
import type { OAuth2Application } from '../models/OAuth2Application';
import type { PublicKey } from '../models/PublicKey';
import type { QuotaInfo } from '../models/QuotaInfo';
import type { QuotaUsedArtifactList } from '../models/QuotaUsedArtifactList';
import type { QuotaUsedAttachmentList } from '../models/QuotaUsedAttachmentList';
import type { QuotaUsedPackageList } from '../models/QuotaUsedPackageList';
import type { RegistrationToken } from '../models/RegistrationToken';
import type { Repository } from '../models/Repository';
import type { StopWatch } from '../models/StopWatch';
import type { Team } from '../models/Team';
import type { TrackedTime } from '../models/TrackedTime';
import type { UpdateUserAvatarOption } from '../models/UpdateUserAvatarOption';
import type { UpdateVariableOption } from '../models/UpdateVariableOption';
import type { User } from '../models/User';
import type { UserHeatmapData } from '../models/UserHeatmapData';
import type { UserSettings } from '../models/UserSettings';
import type { UserSettingsOptions } from '../models/UserSettingsOptions';
import type { VerifyGPGKeyOption } from '../models/VerifyGPGKeyOption';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Get the authenticated user
     * @returns User User
     * @throws ApiError
     */
    public static userGetCurrent(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Search for user's action jobs according filter conditions
     * @returns ActionRunJob RunJobList is a list of action run jobs
     * @throws ApiError
     */
    public static userSearchRunJobs({
        labels,
    }: {
        /**
         * a comma separated list of run job labels to search for
         */
        labels?: string,
    }): CancelablePromise<Array<ActionRunJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/actions/runners/jobs',
            query: {
                'labels': labels,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get an user's actions runner registration token
     * @returns RegistrationToken RegistrationToken is a string used to register a runner with a server
     * @throws ApiError
     */
    public static userGetRunnerRegistrationToken(): CancelablePromise<RegistrationToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/actions/runners/registration-token',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create or Update a secret value in a user scope
     * @returns any response when creating a secret
     * @throws ApiError
     */
    public static updateUserSecret({
        secretname,
        body,
    }: {
        /**
         * name of the secret
         */
        secretname: string,
        body?: CreateOrUpdateSecretOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/actions/secrets/{secretname}',
            path: {
                'secretname': secretname,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a secret in a user scope
     * @returns void
     * @throws ApiError
     */
    public static deleteUserSecret({
        secretname,
    }: {
        /**
         * name of the secret
         */
        secretname: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/actions/secrets/{secretname}',
            path: {
                'secretname': secretname,
            },
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get the user-level list of variables which is created by current doer
     * @returns ActionVariable VariableList
     * @throws ApiError
     */
    public static getUserVariablesList({
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
    }): CancelablePromise<Array<ActionVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/actions/variables',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a user-level variable which is created by current doer
     * @returns ActionVariable ActionVariable
     * @throws ApiError
     */
    public static getUserVariable({
        variablename,
    }: {
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<ActionVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/actions/variables/{variablename}',
            path: {
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update a user-level variable which is created by current doer
     * @returns any response when updating a variable
     * @throws ApiError
     */
    public static updateUserVariable({
        variablename,
        body,
    }: {
        /**
         * name of the variable
         */
        variablename: string,
        body?: UpdateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/actions/variables/{variablename}',
            path: {
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Create a user-level variable
     * @returns any response when creating a variable
     * @throws ApiError
     */
    public static createUserVariable({
        variablename,
        body,
    }: {
        /**
         * name of the variable
         */
        variablename: string,
        body?: CreateVariableOption,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/actions/variables/{variablename}',
            path: {
                'variablename': variablename,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a user-level variable which is created by current doer
     * @returns any response when deleting a variable
     * @throws ApiError
     */
    public static deleteUserVariable({
        variablename,
    }: {
        /**
         * name of the variable
         */
        variablename: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/actions/variables/{variablename}',
            path: {
                'variablename': variablename,
            },
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the authenticated user's oauth2 applications
     * @returns OAuth2Application OAuth2ApplicationList represents a list of OAuth2 applications.
     * @throws ApiError
     */
    public static userGetOAuth2Applications({
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
    }): CancelablePromise<Array<OAuth2Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/applications/oauth2',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Creates a new OAuth2 application
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public static userCreateOAuth2Application({
        body,
    }: {
        body: CreateOAuth2ApplicationOptions,
    }): CancelablePromise<OAuth2Application> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/applications/oauth2',
            body: body,
            errors: {
                400: `APIError is error format response`,
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get an OAuth2 application
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public static userGetOAuth2Application({
        id,
    }: {
        /**
         * Application ID to be found
         */
        id: number,
    }): CancelablePromise<OAuth2Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete an OAuth2 application
     * @returns void
     * @throws ApiError
     */
    public static userDeleteOAuth2Application({
        id,
    }: {
        /**
         * token to be deleted
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update an OAuth2 application, this includes regenerating the client secret
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public static userUpdateOAuth2Application({
        id,
        body,
    }: {
        /**
         * application to be updated
         */
        id: number,
        body: CreateOAuth2ApplicationOptions,
    }): CancelablePromise<OAuth2Application> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Update avatar of the current user
     * @returns void
     * @throws ApiError
     */
    public static userUpdateAvatar({
        body,
    }: {
        body?: UpdateUserAvatarOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/avatar',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Delete avatar of the current user. It will be replaced by a default one
     * @returns void
     * @throws ApiError
     */
    public static userDeleteAvatar(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/avatar',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Blocks a user from the doer
     * @returns void
     * @throws ApiError
     */
    public static userBlockUser({
        username,
    }: {
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/block/{username}',
            path: {
                'username': username,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List all email addresses of the current user
     * @returns Email EmailList
     * @throws ApiError
     */
    public static userListEmails(): CancelablePromise<Array<Email>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/emails',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Add an email addresses to the current user's account
     * @returns Email EmailList
     * @throws ApiError
     */
    public static userAddEmail({
        body,
    }: {
        body?: CreateEmailOption,
    }): CancelablePromise<Array<Email>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/emails',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Delete email addresses from the current user's account
     * @returns void
     * @throws ApiError
     */
    public static userDeleteEmail({
        body,
    }: {
        body?: DeleteEmailOption,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/emails',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the authenticated user's followers
     * @returns User UserList
     * @throws ApiError
     */
    public static userCurrentListFollowers({
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
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/followers',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the users that the authenticated user is following
     * @returns User UserList
     * @throws ApiError
     */
    public static userCurrentListFollowing({
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
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/following',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Check whether a user is followed by the authenticated user
     * @returns void
     * @throws ApiError
     */
    public static userCurrentCheckFollowing({
        username,
    }: {
        /**
         * username of followed user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Follow a user
     * @returns void
     * @throws ApiError
     */
    public static userCurrentPutFollow({
        username,
    }: {
        /**
         * username of user to follow
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Unfollow a user
     * @returns void
     * @throws ApiError
     */
    public static userCurrentDeleteFollow({
        username,
    }: {
        /**
         * username of user to unfollow
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get a Token to verify
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public static getVerificationToken(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/gpg_key_token',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Verify a GPG key
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public static userVerifyGpgKey({
        body,
    }: {
        body?: VerifyGPGKeyOption,
    }): CancelablePromise<GPGKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/gpg_key_verify',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List the authenticated user's GPG keys
     * @returns GPGKey GPGKeyList
     * @throws ApiError
     */
    public static userCurrentListGpgKeys({
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
    }): CancelablePromise<Array<GPGKey>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/gpg_keys',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Add a GPG public key to current user's account
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public static userCurrentPostGpgKey({
        form,
    }: {
        form?: CreateGPGKeyOption,
    }): CancelablePromise<GPGKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/gpg_keys',
            body: form,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a GPG key
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public static userCurrentGetGpgKey({
        id,
    }: {
        /**
         * id of key to get
         */
        id: number,
    }): CancelablePromise<GPGKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/gpg_keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Remove a GPG public key from current user's account
     * @returns void
     * @throws ApiError
     */
    public static userCurrentDeleteGpgKey({
        id,
    }: {
        /**
         * id of key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/gpg_keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the authenticated user's webhooks
     * @returns Hook HookList
     * @throws ApiError
     */
    public static userListHooks({
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
            url: '/user/hooks',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static userCreateHook({
        body,
    }: {
        body: CreateHookOption,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/hooks',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static userGetHook({
        id,
    }: {
        /**
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/hooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Delete a hook
     * @returns void
     * @throws ApiError
     */
    public static userDeleteHook({
        id,
    }: {
        /**
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/hooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Update a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public static userEditHook({
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
            url: '/user/hooks/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the authenticated user's public keys
     * @returns PublicKey PublicKeyList
     * @throws ApiError
     */
    public static userCurrentListKeys({
        fingerprint,
        page,
        limit,
    }: {
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
    }): CancelablePromise<Array<PublicKey>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/keys',
            query: {
                'fingerprint': fingerprint,
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Create a public key
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public static userCurrentPostKey({
        body,
    }: {
        body?: CreateKeyOption,
    }): CancelablePromise<PublicKey> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/keys',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Get a public key
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public static userCurrentGetKey({
        id,
    }: {
        /**
         * id of key to get
         */
        id: number,
    }): CancelablePromise<PublicKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Delete a public key
     * @returns void
     * @throws ApiError
     */
    public static userCurrentDeleteKey({
        id,
    }: {
        /**
         * id of key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the authenticated user's blocked users
     * @returns BlockedUser BlockedUserList
     * @throws ApiError
     */
    public static userListBlockedUsers({
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
    }): CancelablePromise<Array<BlockedUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/list_blocked',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Get quota information for the authenticated user
     * @returns QuotaInfo QuotaInfo
     * @throws ApiError
     */
    public static userGetQuota(): CancelablePromise<QuotaInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/quota',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the artifacts affecting the authenticated user's quota
     * @returns QuotaUsedArtifactList QuotaUsedArtifactList
     * @throws ApiError
     */
    public static userListQuotaArtifacts({
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
    }): CancelablePromise<QuotaUsedArtifactList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/quota/artifacts',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the attachments affecting the authenticated user's quota
     * @returns QuotaUsedAttachmentList QuotaUsedAttachmentList
     * @throws ApiError
     */
    public static userListQuotaAttachments({
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
    }): CancelablePromise<QuotaUsedAttachmentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/quota/attachments',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Check if the authenticated user is over quota for a given subject
     * @returns boolean Returns true if the action is accepted.
     * @throws ApiError
     */
    public static userCheckQuota({
        subject,
    }: {
        /**
         * subject of the quota
         */
        subject: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/quota/check',
            query: {
                'subject': subject,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * List the packages affecting the authenticated user's quota
     * @returns QuotaUsedPackageList QuotaUsedPackageList
     * @throws ApiError
     */
    public static userListQuotaPackages({
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
    }): CancelablePromise<QuotaUsedPackageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/quota/packages',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the repos that the authenticated user owns
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userCurrentListRepos({
        page,
        limit,
        orderBy,
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
         * order the repositories
         */
        orderBy?: 'name' | 'id' | 'newest' | 'oldest' | 'recentupdate' | 'leastupdate' | 'reversealphabetically' | 'alphabetically' | 'reversesize' | 'size' | 'reversegitsize' | 'gitsize' | 'reverselfssize' | 'lfssize' | 'moststars' | 'feweststars' | 'mostforks' | 'fewestforks',
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/repos',
            query: {
                'page': page,
                'limit': limit,
                'order_by': orderBy,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
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
    /**
     * Get current user's account settings
     * @returns UserSettings UserSettings
     * @throws ApiError
     */
    public static getUserSettings(): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/settings',
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Update settings in current user's account
     * @returns UserSettings UserSettings
     * @throws ApiError
     */
    public static updateUserSettings({
        body,
    }: {
        body?: UserSettingsOptions,
    }): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/settings',
            body: body,
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * The repos that the authenticated user has starred
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userCurrentListStarred({
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
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/starred',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Whether the authenticated is starring the repo
     * @returns void
     * @throws ApiError
     */
    public static userCurrentCheckStarring({
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
            method: 'GET',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Star the given repo
     * @returns void
     * @throws ApiError
     */
    public static userCurrentPutStar({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to star
         */
        owner: string,
        /**
         * name of the repo to star
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Unstar the given repo
     * @returns void
     * @throws ApiError
     */
    public static userCurrentDeleteStar({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to unstar
         */
        owner: string,
        /**
         * name of the repo to unstar
         */
        repo: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Get list of all existing stopwatches
     * @returns StopWatch StopWatchList
     * @throws ApiError
     */
    public static userGetStopWatches({
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
    }): CancelablePromise<Array<StopWatch>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/stopwatches',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List repositories watched by the authenticated user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userCurrentListSubscriptions({
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
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/subscriptions',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List all the teams a user belongs to
     * @returns Team TeamList
     * @throws ApiError
     */
    public static userListTeams({
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
    }): CancelablePromise<Array<Team>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/teams',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * List the current user's tracked times
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public static userCurrentTrackedTimes({
        page,
        limit,
        since,
        before,
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
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
    }): CancelablePromise<Array<TrackedTime>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/times',
            query: {
                'page': page,
                'limit': limit,
                'since': since,
                'before': before,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
    /**
     * Unblocks a user from the doer
     * @returns void
     * @throws ApiError
     */
    public static userUnblockUser({
        username,
    }: {
        /**
         * username of the user
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/unblock/{username}',
            path: {
                'username': username,
            },
            errors: {
                401: `APIUnauthorizedError is a unauthorized error response`,
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Search for users
     * @returns any SearchResults of a successful search
     * @throws ApiError
     */
    public static userSearch({
        q,
        uid,
        sort,
        page,
        limit,
    }: {
        /**
         * keyword
         */
        q?: string,
        /**
         * ID of the user to search for
         */
        uid?: number,
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
    }): CancelablePromise<{
        data?: Array<User>;
        ok?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/search',
            query: {
                'q': q,
                'uid': uid,
                'sort': sort,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Get a user
     * @returns User User
     * @throws ApiError
     */
    public static userGet({
        username,
    }: {
        /**
         * username of user to get
         */
        username: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List a user's activity feeds
     * @returns Activity ActivityFeedsList
     * @throws ApiError
     */
    public static userListActivityFeeds({
        username,
        onlyPerformedBy,
        date,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * if true, only show actions performed by the requested user
         */
        onlyPerformedBy?: boolean,
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
            url: '/users/{username}/activities/feeds',
            path: {
                'username': username,
            },
            query: {
                'only-performed-by': onlyPerformedBy,
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
     * List the given user's followers
     * @returns User UserList
     * @throws ApiError
     */
    public static userListFollowers({
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
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/followers',
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
     * List the users that the given user is following
     * @returns User UserList
     * @throws ApiError
     */
    public static userListFollowing({
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
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/following',
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
     * Check if one user is following another user
     * @returns void
     * @throws ApiError
     */
    public static userCheckFollowing({
        username,
        target,
    }: {
        /**
         * username of following user
         */
        username: string,
        /**
         * username of followed user
         */
        target: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/following/{target}',
            path: {
                'username': username,
                'target': target,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the given user's GPG keys
     * @returns GPGKey GPGKeyList
     * @throws ApiError
     */
    public static userListGpgKeys({
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
    }): CancelablePromise<Array<GPGKey>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/gpg_keys',
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
     * Get a user's heatmap
     * @returns UserHeatmapData UserHeatmapData
     * @throws ApiError
     */
    public static userGetHeatmapData({
        username,
    }: {
        /**
         * username of user to get
         */
        username: string,
    }): CancelablePromise<Array<UserHeatmapData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/heatmap',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * List the given user's public keys
     * @returns PublicKey PublicKeyList
     * @throws ApiError
     */
    public static userListKeys({
        username,
        fingerprint,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
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
    }): CancelablePromise<Array<PublicKey>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/keys',
            path: {
                'username': username,
            },
            query: {
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
     * List the repos owned by the given user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userListRepos({
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
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/repos',
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
     * The repos that the given user has starred
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userListStarred({
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
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/starred',
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
     * List the repositories watched by a user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public static userListSubscriptions({
        username,
        page,
        limit,
    }: {
        /**
         * username of the user
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
    }): CancelablePromise<Array<Repository>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/subscriptions',
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
     * List the specified user's access tokens
     * @returns AccessToken AccessTokenList represents a list of API access token.
     * @throws ApiError
     */
    public static userGetTokens({
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
    }): CancelablePromise<Array<AccessToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}/tokens',
            path: {
                'username': username,
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
     * Generate an access token for the specified user
     * @returns AccessToken AccessToken represents an API access token.
     * @throws ApiError
     */
    public static userCreateToken({
        username,
        body,
    }: {
        /**
         * username of user
         */
        username: string,
        body?: CreateAccessTokenOption,
    }): CancelablePromise<AccessToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{username}/tokens',
            path: {
                'username': username,
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
     * Delete an access token from the specified user's account
     * @returns void
     * @throws ApiError
     */
    public static userDeleteAccessToken({
        username,
        token,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * token to be deleted, identified by ID and if not available by name
         */
        token: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{username}/tokens/{token}',
            path: {
                'username': username,
                'token': token,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found error response`,
                422: `APIError is error format response`,
            },
        });
    }
}
