/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityPub } from '../models/ActivityPub';
import type { ForgeLike } from '../models/ForgeLike';
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
     * Send to the inbox
     * @returns void
     * @throws ApiError
     */
    public static activitypubPersonInbox({
        userId,
    }: {
        /**
         * user ID of the user
         */
        userId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activitypub/user-id/{user-id}/inbox',
            path: {
                'user-id': userId,
            },
        });
    }
}
