/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityPub } from '../models/ActivityPub';
import type { ForgeLike } from '../models/ForgeLike';
import type { ForgeOutbox } from '../models/ForgeOutbox';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivitypubService {
    /**
     * Returns the instance's Actor
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public static activitypubInstanceActor(): CancelablePromise<ActivityPub> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/actor',
        });
    }
    /**
     * Send to the inbox
     * @returns void
     * @throws ApiError
     */
    public static activitypubInstanceActorInbox(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/actor/inbox',
        });
    }
    /**
     * Display the outbox (always empty)
     * @returns ForgeOutbox Outbox
     * @throws ApiError
     */
    public static activitypubInstanceActorOutbox(): CancelablePromise<ForgeOutbox> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/actor/outbox',
        });
    }
    /**
     * Returns the Repository actor for a repo
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public static activitypubRepository({
        repositoryId,
    }: {
        /**
         * repository ID of the repo
         */
        repositoryId: number,
    }): CancelablePromise<ActivityPub> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/repository-id/{repository-id}',
            path: {
                'repository-id': repositoryId,
            },
        });
    }
    /**
     * Send to the inbox
     * @returns void
     * @throws ApiError
     */
    public static activitypubRepositoryInbox({
        repositoryId,
        body,
    }: {
        /**
         * repository ID of the repo
         */
        repositoryId: number,
        body?: ForgeLike,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/repository-id/{repository-id}/inbox',
            path: {
                'repository-id': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Display the outbox
     * @returns ForgeOutbox Outbox
     * @throws ApiError
     */
    public static activitypubRepositoryOutbox({
        repositoryId,
    }: {
        /**
         * repository ID of the repo
         */
        repositoryId: number,
    }): CancelablePromise<ForgeOutbox> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/repository-id/{repository-id}/outbox',
            path: {
                'repository-id': repositoryId,
            },
        });
    }
    /**
     * Returns the Person actor for a user
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public static activitypubPerson({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<ActivityPub> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/user-id/{user-id}',
            path: {
                'user-id': userId,
            },
        });
    }
    /**
     * Get a specific activity object of the user
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public static activitypubPersonActivityNote({
        userId,
        activityId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
        /**
         * activity ID of the sought activity
         */
        activityId: number,
    }): CancelablePromise<ActivityPub> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/user-id/{user-id}/activities/{activity-id}',
            path: {
                'user-id': userId,
                'activity-id': activityId,
            },
        });
    }
    /**
     * Get a specific activity of the user
     * @returns ActivityPub ActivityPub
     * @throws ApiError
     */
    public static activitypubPersonActivity({
        userId,
        activityId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
        /**
         * activity ID of the sought activity
         */
        activityId: number,
    }): CancelablePromise<ActivityPub> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/user-id/{user-id}/activities/{activity-id}/activity',
            path: {
                'user-id': userId,
                'activity-id': activityId,
            },
        });
    }
    /**
     * Send to the inbox
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public static activitypubPersonInbox({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/user-id/{user-id}/inbox',
            path: {
                'user-id': userId,
            },
        });
    }
    /**
     * List the user's recorded activity
     * @returns ForgeOutbox Outbox
     * @throws ApiError
     */
    public static activitypubPersonFeed({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<ForgeOutbox> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activitypub/user-id/{user-id}/outbox',
            path: {
                'user-id': userId,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }
}
