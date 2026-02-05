/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralAPISettings } from '../models/GeneralAPISettings';
import type { GeneralAttachmentSettings } from '../models/GeneralAttachmentSettings';
import type { GeneralRepoSettings } from '../models/GeneralRepoSettings';
import type { GeneralUISettings } from '../models/GeneralUISettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SettingsService {
    /**
     * Get instance's global settings for api
     * @returns GeneralAPISettings GeneralAPISettings
     * @throws ApiError
     */
    public static getGeneralApiSettings(): CancelablePromise<GeneralAPISettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/api',
        });
    }
    /**
     * Get instance's global settings for Attachment
     * @returns GeneralAttachmentSettings GeneralAttachmentSettings
     * @throws ApiError
     */
    public static getGeneralAttachmentSettings(): CancelablePromise<GeneralAttachmentSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/attachment',
        });
    }
    /**
     * Get instance's global settings for repositories
     * @returns GeneralRepoSettings GeneralRepoSettings
     * @throws ApiError
     */
    public static getGeneralRepositorySettings(): CancelablePromise<GeneralRepoSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/repository',
        });
    }
    /**
     * Get instance's global settings for ui
     * @returns GeneralUISettings GeneralUISettings
     * @throws ApiError
     */
    public static getGeneralUiSettings(): CancelablePromise<GeneralUISettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/ui',
        });
    }
}
