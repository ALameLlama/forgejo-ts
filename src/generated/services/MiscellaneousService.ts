/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitignoreTemplateInfo } from '../models/GitignoreTemplateInfo';
import type { LabelTemplate } from '../models/LabelTemplate';
import type { LicensesTemplateListEntry } from '../models/LicensesTemplateListEntry';
import type { LicenseTemplateInfo } from '../models/LicenseTemplateInfo';
import type { MarkdownOption } from '../models/MarkdownOption';
import type { MarkupOption } from '../models/MarkupOption';
import type { NodeInfo } from '../models/NodeInfo';
import type { ServerVersion } from '../models/ServerVersion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MiscellaneousService {
    /**
     * Returns a list of all gitignore templates
     * @returns string GitignoreTemplateList
     * @throws ApiError
     */
    public static listGitignoresTemplates(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates',
        });
    }
    /**
     * Returns information about a gitignore template
     * @returns GitignoreTemplateInfo GitignoreTemplateInfo
     * @throws ApiError
     */
    public static getGitignoreTemplateInfo({
        name,
    }: {
        /**
         * name of the template
         */
        name: string,
    }): CancelablePromise<GitignoreTemplateInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitignore/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Returns a list of all label templates
     * @returns string LabelTemplateList
     * @throws ApiError
     */
    public static listLabelTemplates(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/label/templates',
        });
    }
    /**
     * Returns all labels in a template
     * @returns LabelTemplate LabelTemplateInfo
     * @throws ApiError
     */
    public static getLabelTemplateInfo({
        name,
    }: {
        /**
         * name of the template
         */
        name: string,
    }): CancelablePromise<Array<LabelTemplate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/label/templates/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Returns a list of all license templates
     * @returns LicensesTemplateListEntry LicenseTemplateList
     * @throws ApiError
     */
    public static listLicenseTemplates(): CancelablePromise<Array<LicensesTemplateListEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licenses',
        });
    }
    /**
     * Returns information about a license template
     * @returns LicenseTemplateInfo LicenseTemplateInfo
     * @throws ApiError
     */
    public static getLicenseTemplateInfo({
        name,
    }: {
        /**
         * name of the license
         */
        name: string,
    }): CancelablePromise<LicenseTemplateInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/licenses/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found error response`,
            },
        });
    }
    /**
     * Render a markdown document as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public static renderMarkdown({
        body,
    }: {
        body?: MarkdownOption,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/markdown',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Render raw markdown as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public static renderMarkdownRaw({
        body,
    }: {
        /**
         * Request body to render
         */
        body: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/markdown/raw',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Render a markup document as HTML
     * @returns string MarkupRender is a rendered markup document
     * @throws ApiError
     */
    public static renderMarkup({
        body,
    }: {
        body?: MarkupOption,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/markup',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }
    /**
     * Returns the nodeinfo of the Forgejo application
     * @returns NodeInfo NodeInfo
     * @throws ApiError
     */
    public static getNodeInfo(): CancelablePromise<NodeInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nodeinfo',
        });
    }
    /**
     * Get default signing-key.gpg
     * @returns string GPG armored public key
     * @throws ApiError
     */
    public static getSigningKey(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/signing-key.gpg',
        });
    }
    /**
     * Returns the version of the running application
     * @returns ServerVersion ServerVersion
     * @throws ApiError
     */
    public static getVersion(): CancelablePromise<ServerVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version',
        });
    }
}
